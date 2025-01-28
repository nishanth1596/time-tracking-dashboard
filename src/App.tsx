import { useState } from "react";
import ReportCard from "./Components/ReportCard";
import TimeCards from "./Components/TimeCards";

const App = () => {
  const [currentReport, setCurrentReport] = useState<
    "daily" | "weekly" | "monthly"
  >("weekly");

  function handleCurrentReport(name: "daily" | "weekly" | "monthly") {
    setCurrentReport(name);
  }

  return (
    <div className="sm:flex sm:h-dvh sm:flex-col sm:justify-between lg:items-center">
      <header>
        <h1 className="sr-only">Time Tracking Dashboard</h1>
      </header>
      <main>
        <section className="my-20 max-w-[69.375rem] lg:grid lg:grid-cols-4">
          <ReportCard
            currentReport={currentReport}
            onClick={handleCurrentReport}
          />
          <TimeCards currentReport={currentReport} />
        </section>
      </main>

      <footer>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded with 💜 by{" "}
        <a href="https://www.frontendmentor.io/profile/nishanth1596">
          Nishanth Venkatesan
        </a>
        .
      </footer>
    </div>
  );
};

export default App;
