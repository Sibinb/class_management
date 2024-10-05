import leftArrow from "../assets/images/left-arrow.svg";
import { months } from "../constants/constants";
import { useDispatch } from "react-redux";
import { setMonth, setYear } from "../redux/slices/slotSelectionSlice";

const MonthChangeSlider = ({ year, month }) => {
  const dispatch = useDispatch();

  const handleSetMonth = (value) => {
    dispatch(setMonth(value));
  };

  const handleSetYear = (value) => {
    dispatch(setYear(value));
  };

  const handleNextMonth = () => {
    if (month === 11) {
      handleSetMonth(0);
      handleSetYear(year + 1);
    } else {
      handleSetMonth(month + 1);
    }
  };

  const handlePrevMonth = () => {
    if (month === 0) {
      handleSetMonth(11);
      handleSetYear(year - 1);
    } else {
      handleSetMonth(month - 1);
    }
  };

  return (
    <div className="flex gap-3 min-w-[250px] justify-between select-none">
      <span
        className="h-[30px] w-[30px] bg-primary rounded-lg flex-center cursor-pointer hover:bg-gray-200"
        onClick={handlePrevMonth}
      >
        <img src={leftArrow} alt="" />
      </span>
      <span className="text-xl font-semibold text-[#A99BC6]">
        {months[month] + " " + year}
      </span>
      <span
        className="h-[30px] w-[30px] bg-primary rounded-lg flex-center cursor-pointer hover:bg-gray-200"
        onClick={handleNextMonth}
      >
        <img className="rotate-180" src={leftArrow} alt="" />
      </span>
    </div>
  );
};

export default MonthChangeSlider;
