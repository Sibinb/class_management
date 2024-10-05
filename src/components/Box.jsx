import { useDispatch, useSelector } from "react-redux";
import { addSeletedClass, removeSeletedClass } from "../redux/slices/slotSelectionSlice";
import { toast } from "react-toastify";

const Box = ({ data, date, isDisabled = false}) => {
  const { year, month, selectedClasses } = useSelector((store)=> store.slotSelectData);

  const dispatch = useDispatch();
  const isSelected = selectedClasses.some(selected => selected.id === data?.id);

  const handleClick = () => {
      if(!isDisabled){
        
        if(selectedClasses?.length > 6){
          toast.warning("You can only select 7 slot.",{autoClose:2500});
          return;
        }

        const obj = {
          ...data,
          month: month,
          year: year,
        }

        if(isSelected){
          dispatch(removeSeletedClass(obj?.id))
          return
        }
        dispatch(addSeletedClass(obj));
      }
  };

    return (
      <div className={`p-3 w-full h-full flex flex-col text-[#4B4B4B] justify-between ${isDisabled ? 'bg-primary' : "bg-tertiary" }
        ${!isDisabled && ' cursor-pointer hover:bg-secondary hover:text-primary'}
        ${isSelected && "!bg-secondary !text-primary"}
        `}
      onClick={handleClick}
      >
        <div className="font-medium">
          <h1 className="font-semibold text-lg">{data?.dayInfo}</h1>
          <p className="text-sm">{data?.topicInfo}</p>
        </div>
        <div className="text-end font-semibold">{date}</div>
      </div>
    );
  };

export default Box;