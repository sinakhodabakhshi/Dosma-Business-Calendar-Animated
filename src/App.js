import { useState } from "react";
import Calendar from "./components/calendar/Calendar";
import CalendarSkeleton from "./components/calendar/CalendarSkeleton";
import Header from "./components/header/Header";
import data from "./data/db";
import DataContext from "./context/dataContext";

function App() {
  //you can use useFetchData custom hook instead of useState
  const [done, setDone] = useState(true);

  return (
    <div className="flex flex-col px-5">
      <Header />
      {done ? (
        <DataContext.Provider value={data}>
          <Calendar />
        </DataContext.Provider>
      ) : (
        <CalendarSkeleton />
      )}
    </div>
  );
}

export default App;
