import jermeyImg from "../assets/image-jeremy.png";

type ReportCardProps = {
  currentReport: "daily" | "weekly" | "monthly";
  onClick: (name: "daily" | "weekly" | "monthly") => void;
};

const ReportCard = ({ currentReport, onClick }: ReportCardProps) => {
  return (
    <article className="mx-6 rounded-2xl bg-(--color-1C204B) sm:col-span-2 sm:grid sm:gap-y-2.5 lg:col-span-1 lg:row-span-1 lg:mx-0 lg:ml-8 lg:gap-x-[1.88rem]">
      <div className="flex items-center rounded-2xl bg-(--color-5747EA) pt-9 pr-10 pb-[2.13rem] pl-8 text-[.938rem] font-normal sm:justify-around lg:flex-col lg:items-baseline lg:justify-baseline lg:gap-11 lg:pt-[2.69rem] lg:pb-20 lg:pl-8">
        <img
          className="w-16 lg:w-[4.875rem]"
          src={jermeyImg}
          alt="Jeremy Robson"
        />

        <h2 className="text-BBC0FF ml-5 leading-[1.125rem] sm:text-3xl lg:ml-0 lg:text-[.938rem]">
          Report for{" "}
          <span className="block text-2xl leading-6 font-light text-white sm:inline sm:text-4xl lg:text-[2.5rem] lg:leading-[2.94rem]">
            Jeremy Robson
          </span>
        </h2>
      </div>

      <ul className="text-7078C9 flex justify-around text-lg leading-5 *:my-6 lg:ml-8 lg:flex-col lg:items-start">
        <li>
          <button
            className="cursor-pointer"
            style={currentReport === "daily" ? { color: "#fff " } : undefined}
            onClick={() => onClick("daily")}
          >
            Daily
          </button>
        </li>
        <li>
          <button
            className="cursor-pointer"
            style={currentReport === "weekly" ? { color: "#fff " } : undefined}
            onClick={() => onClick("weekly")}
          >
            Weekly
          </button>
        </li>
        <li>
          <button
            className="cursor-pointer"
            style={currentReport === "monthly" ? { color: "#fff " } : undefined}
            onClick={() => onClick("monthly")}
          >
            Monthly
          </button>
        </li>
      </ul>
    </article>
  );
};

export default ReportCard;
