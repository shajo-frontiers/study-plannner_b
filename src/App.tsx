import './App.css';
import TimeTable, {TimetableEvent} from './TimeTable'
import Description from './Description'
import SearchClassName from './SearchClassName'
import AddtimetableIcon from './AddtimetableIcon'


function App() {
  const events:TimetableEvent[] = [
    {day: "Wed", period: 2, title: "情報システム設計"},
    {day: "Wed", period: 3, title: "ITビジネスのフロンティア"}
  ];

  const username1 = '中央太郎'
  return (
    <>
      <header>
        <h1 className="h-7">Study Planner Pro</h1>
      </header>
      <div className="username"><Description username = {username1}/></div>
      <div className="controls"><AddtimetableIcon /></div>
      <div className="controls2"><SearchClassName /></div>
      <div className="timetable"><TimeTable events={events} /></div>
    </>
  );
}

export default App;
