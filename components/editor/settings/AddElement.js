import { BsTextareaT, BsBoundingBoxCircles } from "react-icons/bs";
import { TbIcons } from "react-icons/tb";
const AddElement = ({ props }) => {
  return (
    <div className="text-darkBackground dark:text-background w-72">
      <div>
        <h2 className="font-bold text-lg">Add Elements</h2>
        <hr />
        <div className="flex flex-wrap justify-start ml-auto mr-auto overflow-auto whitespace-nowrap items-center h-9/10 mt-1 py-2 font-roboto">
          <AddElementButton handleOnClick={props.addTextElement}>
            <BsTextareaT className="ml-auto mr-auto" />
            <p className="text-sm text-center opacity-80">Text</p>
          </AddElementButton>
          <AddElementButton handleOnClick={props.addRectangleElement}>
            <BsBoundingBoxCircles className="ml-auto mr-auto" />
            <p className="text-sm text-center opacity-80">Rectangle</p>
          </AddElementButton>
          <AddElementButton handleOnClick={props.addIconElement}>
            <TbIcons className="ml-auto mr-auto" />
            <p className="text-sm text-center opacity-80">Icon</p>
          </AddElementButton>
        </div>
      </div>
    </div>
  );
};

export default AddElement;

const AddElementButton = ({ children, handleOnClick }) => {
  return (
    <>
      <button
        type="button"
        onClick={handleOnClick}
        className="p-2 min-w-4 max-w-5 ml-3 text-darkBackground dark:text-background rounded-md text-2xl text-center transition-all ease-in-out duration-150  hover:bg-darkBackground dark:hover:bg-background hover:bg-opacity-20 dark:hover:bg-opacity-20"
      >
        {children}
      </button>
    </>
  );
};
