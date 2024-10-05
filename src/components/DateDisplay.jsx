import { daysOfWeek } from "../constants/constants";
import Box from "./Box";
import { getRowNum } from "../lib/helper";
import { useSelector } from "react-redux";

const DateDisplay = () => {
  const { datesList} = useSelector((store)=> store.slotSelectData); // getting the values from store

  let rows = getRowNum(datesList[0]?.day, datesList?.length);
  const cols = 7;

  const firstDayNum = daysOfWeek.indexOf(datesList[0]?.day); // getting the first day from dates list
  let count = 0;
  let count1 = 1;

  const boxes = Array.from({ length: rows * cols }, (_, index) => {
    if (index < firstDayNum) {
      return <Box key={index + "D"} isDisabled={true} date={"_"} />;
    }

    if (count < datesList.length) {
      const obj = datesList[count];
      count++;
      return (
        <Box
          key={index + "D"}
          date={obj?.date}
          data={obj?.data}
          isDisabled={obj?.day === "Sunday" || obj?.data === null || obj?.data === undefined }
        />
      );
    }

    const num = count1;
    count1++;
    return <Box key={index + "D"} date={num} isDisabled={true} />;
  });

  return (
    <div>
      <div className="grid grid-cols-7 gap-[10px]  text-[15px] text-[#B1A5CB] font-semibold mb-2">
        <div className="">Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className={`grid-container ${rows === 6 && "grid-rows-alter"}`}>
        {boxes}
      </div>
    </div>
  );
};

export default DateDisplay;
