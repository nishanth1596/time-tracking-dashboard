import ellipsisImg from "../assets/icon-ellipsis.svg";

type TimeFrameProp = {
  current: number;
  previous: number;
};

type TimeFramesProps = {
  daily: TimeFrameProp;
  weekly: TimeFrameProp;
  monthly: TimeFrameProp;
};

type CardProps = {
  card: {
    title: string;
    timeframes: TimeFramesProps;
    image: string;
    color: string;
  };
  currentReport: "daily" | "weekly" | "monthly";
};

const TimeCard = ({ card, currentReport }: CardProps) => {
  const { current, previous } = card.timeframes[currentReport];

  return (
    <div
      className="pt-[2.375rem ] relative -z-10 overflow-hidden rounded-2xl lg:pt-[45px]"
      style={{ backgroundColor: card.color }}
    >
      <img
        src={card.image}
        alt={card.title}
        className="absolute -top-2.5 right-4 -z-10 w-[4.875rem]"
      />

      <div className="bg-1C204B hover:bg-33397A rounded-2xl rounded-b-none hover:cursor-pointer">
        <div className="flex items-center justify-between px-6 py-7 lg:pt-[1.81rem] lg:pr-9 lg:pl-[1.875rem]">
          <h3 className="text-lg leading-5 font-medium">{card.title}</h3>

          <img src={ellipsisImg} alt="Three dots icon" />
        </div>

        <div className="flex items-center justify-between px-6 pb-7 lg:block lg:pt-6 lg:pl-[1.875rem]">
          <p className="text-[2rem] leading-[2.375rem] font-light lg:text-[3.5rem] lg:leading-[4.125rem]">
            {current}hrs
          </p>
          <p className="text-BBC0FF text-[.94rem] font-normal lg:pt-2 lg:pb-8">
            Last Week - {previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
