import './App.css';
import TimeTable, { TimetableEvent } from './TimeTable';
import Description from "./Description";
import SearchClassName from './SearchClassName';
import React, { useState } from 'react';
import NewScreen from './NewScreen';
import SettingsScreen from './SettingsScreen'; // 新しく作成した設定画面をインポート

function App() {
  const events: TimetableEvent[] = [
    { day: "Wed", period: 2, title: "情報システム設計" },
    { day: "Wed", period: 3, title: "ITビジネスのフロンティア" }
  ];

  // 'main', 'set', 'settings' の3つの状態で画面を管理します
  const [currentScreen, setCurrentScreen] = useState('main');

  // メイン画面に戻るための関数
  const handleBackToMain = () => {
    setCurrentScreen('main');
  };

  // 表示するコンポーネントを決定する関数
  const renderScreen = () => {
    switch (currentScreen) {
      case 'set':
        return <NewScreen onBack={handleBackToMain} />;
      case 'settings':
        return <SettingsScreen onBack={handleBackToMain} />;
      case 'main':
      default:
        return (
          <>
            <Description />
            <SearchClassName />
            <TimeTable events={events}></TimeTable>
            <div className="button-container">
              {/* セットボタンがクリックされたら 'set' 画面に切り替え */}
              <button className="add-event-button2" onClick={() => setCurrentScreen('set')}>
                セット
              </button>
              {/* 設定ボタンがクリックされたら 'settings' 画面に切り替え */}
              <button className="add-event-button1" onClick={() => setCurrentScreen('settings')}>
                設定
              </button>
            </div>
          </>
        );
    }
  };

  return (
    <>
      <header>
        <h1 className="h-7">Study Planner</h1>
      </header>
      {renderScreen()}
    </>
  );
}

export default App;