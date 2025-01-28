import data from "../data.json";
import TimeCard from "./TimeCard";

type TimeframeProps = {
  current: number;
  previous: number;
};

type TimeframesProps = {
  daily: TimeframeProps;
  weekly: TimeframeProps;
  monthly: TimeframeProps;
};

type CardProps = {
  title: string;
  timeframes: TimeframesProps;
  image: string;
  color: string;
};

type CurrentReportProps = {
  currentReport: "daily" | "weekly" | "monthly";
};

const TimeCards = ({ currentReport }: CurrentReportProps) => {
  return (
    <article className="mx-6 mt-6 grid grid-cols-1 gap-y-6 sm:grid sm:grid-cols-2 sm:gap-2.5 lg:col-span-3 lg:mt-0 lg:grid-cols-3 lg:grid-rows-2">
      {data.map((card: CardProps) => {
        return (
          <TimeCard
            card={card}
            key={card.title}
            currentReport={currentReport}
          />
        );
      })}
    </article>
  );
};

export default TimeCards;
