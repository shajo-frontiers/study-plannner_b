import './App.css';
import TimeTable, {TimetableEvent} from './TimeTable'
import Description from  "./Description"
import SearchClassName from './SearchClassName';
import React, { useState } from 'react'; // useStateをインポート
import NewScreen from './NewScreen'; // NewScreenコンポーネントをインポート

function App() {
  const events:TimetableEvent[] = [
    {day: "Wed", period: 2, title: "情報システム設計"},
    {day: "Wed", period: 3, title: "ITビジネスのフロンティア"}
  ];

  const [screen, setScreen] = useState('main'); // 画面の状態を管理

  const handleSetButtonClick = () => {
    setScreen('new'); // 画面を'new'に切り替え
  };

  const username = '中央太郎'
  return (
    <>
      <header>
        <h1 className="h-7">Study Planner</h1>
      </header>
      {screen === 'main' ? (
        <>
          <Description />
          <SearchClassName />
          <TimeTable events={events}></TimeTable>
          <div className="button-container">
           <button className="add-event-button2" onClick={handleSetButtonClick}>セット</button> {/* onClickイベントハンドラを追加 */}
           <button className="add-event-button1">設定</button>
          </div>
        </>
      ) : (
        <NewScreen />
      )}
    </>
  );
}

export default App;