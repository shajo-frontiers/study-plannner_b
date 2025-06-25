import React from "react";

/**
 * Timetable event defined by weekday and period (1–6)
 */
export type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";
export type Period = 1 | 2 | 3 | 4 | 5 | 6;

export interface TimetableEvent {
  day: Day;
  period: Period;
  title: string;
}

const days: Day[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dayLabels: Record<Day, string> = {
  Mon: "月",
  Tue: "火",
  Wed: "水",
  Thu: "木",
  Fri: "金",
  Sat: "土",
};

const periods: Period[] = [1, 2, 3, 4, 5, 6];

// ADDED: デフォルトの時間帯データを定義
const defaultPeriodTimes: Record<Period, string> = {
  1: "9:00~10:40",
  2: "10:50~12:30",
  3: "13:20~15:00",
  4: "15:10~16:50",
  5: "17:00~18:30",
  6: "18:40~20:30",
};


interface TimeTableProps {
  /** 時間割データ */
  events: TimetableEvent[];
  /** viewport 高に合わせて伸ばすか (デフォルト true) */
  fullHeight?: boolean;
  /** fullHeight 時に差し引く高さ (px) */
  offset?: number;
  /** 各時限の時間帯 (任意) */ // ADDED: Propsに時間データを追加
  periodTimes?: Record<Period, string>;
}

/**
 * Timetable component (Tailwind CSS)
 *
 * グリッドとイベントセルを統合：行⇢列の順でマス目を順番に描画し、
 * 各セルにイベントがあればそのタイトルを表示し、なければ空セルを描画。
 */
const TimeTable: React.FC<TimeTableProps> = ({
  events,
  fullHeight = true,
  offset = 0,
  // CHANGED: propsで受け取り、デフォルト値を設定
  periodTimes = defaultPeriodTimes,
}) => {
  /** ルックアップ用マップ: { "Mon-1": "数学" } */
  const eventMap = React.useMemo(() => {
    const m: Record<string, string> = {};
    events.forEach((e) => {
      m[`${e.day}-${e.period}`] = e.title;
    });
    return m;
  }, [events]);

  // 行テンプレート：40px + 6行を均等分配
  const rows = "[grid-template-rows:40px_repeat(6,minmax(0,1fr))]";
  const containerStyle: React.CSSProperties | undefined = fullHeight
    ? { height: `calc(100vh - ${offset}px)` }
    : undefined;

  return (
    <div className="overflow-x-auto" style={containerStyle}>
      <div
        className={`grid border border-gray-300 [grid-template-columns:80px_repeat(6,1fr)] ${rows} h-full`} // CHANGED: 左端の列幅を調整 (例: 60px -> 80px)
      >
        {/* 左上ダミー */}
        <div className="bg-gray-100 border-b border-r border-gray-300" />

        {/* 曜日ヘッダー（日本語表記） */}
        {days.map((day) => (
          <div
            key={day}
            className="bg-gray-100 border-b border-gray-300 flex items-center justify-center font-semibold text-sm"
          >
            {dayLabels[day]}
          </div>
        ))}

        {/* 本体：period × days */}
        {periods.map((p) => (
          <React.Fragment key={p}>
            {/* --- ここからが変更箇所 --- */}
            {/* 時限ラベルと時間 */}
            <div className="border-r border-gray-300 flex items-center justify-center text-xs">
              <div className="flex flex-col items-center">
                <span className="font-semibold">{p}限</span>
                {/* periodTimesから時間を取得して表示 */}
                {periodTimes[p] && (
                  <span className="text-[10px] text-gray-500 mt-1">
                    {periodTimes[p]}
                  </span>
                )}
              </div>
            </div>
            {/* --- ここまでが変更箇所 --- */}

            {/* 各曜日セル */}
            {days.map((d) => {
              const key = `${d}-${p}`;
              const title = eventMap[key];
              const base = "flex items-center justify-center text-xs border";
              return title ? (
                <div
                  key={key}
                  className={`${base} border-blue-300 bg-blue-100 rounded text-gray-900 p-1`}
                >
                  {title}
                </div>
              ) : (
                <div key={key} className={`${base} border-gray-200`} />
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TimeTable;
