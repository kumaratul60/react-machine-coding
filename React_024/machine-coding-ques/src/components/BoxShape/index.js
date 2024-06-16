import Shape from "./Shape";
import "./index.css"

// create a shape based on the 2D data
// empty box where value === 1
//  when value === 0 the render nothing
// we can select the shape box and change background to green
// deselect in the order of selection
// when deselection process happning when desable any interaction
//  order of insertion or selection matters

const BOX_DATE = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];

const BoxTask = () => {
  return (
    <div>
      <Shape boxData={BOX_DATE} />
    </div>
  );
};

export default BoxTask;
