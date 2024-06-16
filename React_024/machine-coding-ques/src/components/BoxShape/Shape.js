import React, { useEffect, useMemo, useRef, useState } from "react";

/*
function flattenInPlace(arr) {
  for (let i = 0; i < arr.length; i++) {
    while (Array.isArray(arr[i])) {
      // Replace the current array element with its elements
      arr.splice(i, 1, ...arr[i]);
    }
  }
  return arr;
}

// Example usage:
const arr = [[1, 2], [3, [4, 5]], 6];
flattenInPlace(arr);

console.log(arr); // Output: [1, 2, 3, 4, 5, 6]
*/

const flatten = (arr, flattenArr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], flattenArr);
    } else {
      flattenArr.push(arr[i]);
    }
  }
  return flattenArr;
};

const Shape = ({ boxData }) => {
  // Flatten the 2D array to a 1D array
  //   const boxes = useMemo(() => boxData.flat(Infinity), [boxData]);
  const boxes = useMemo(() => flatten(boxData, []), [boxData]);
  // compute how many elements we have with value 1
  const countOfVisibles = useMemo(() => {
    return boxes.reduce((acc, box) => {
      if (box === 1) {
        acc += 1;
      }
      return acc;
    }, 0);
  }, [boxes]);

  /***
   To check order of insertion we can use Array, Object, Map, Set.
   Object => It can handle keys, insert in order, but it is not 100% reliable
   Array => we need quick lookup but operations like insertion and deletion can be less efficient, especially when performed frequently and not at the end of the array.
   Map => it provide lookup with key value pair but we need only keys
   */
  const [selected, setSelected] = useState(new Set());
  // unloading state need to prevent while unload happning then no one can aging select the boxes while its unload/desecting is preforming
  const [unloading, setUnLoading] = useState(false);

  const timerRef = useRef(null);

  const handleBoxClick = (event) => {
    // event, status
    const boxIdx = event.target.getAttribute("data-index");
    const boxStatus = event.target.getAttribute("data-status");

    if (boxIdx === null || boxStatus === "hidden" || unloading) {
      return;
    }

    setSelected((prev) => {
      return new Set(prev.add(boxIdx));
    });
  };

  const unLoad = () => {
    //  remove boxs every 500 ms

    // when desection of box is happning
    setUnLoading(true);

    // ["5","3","2"...]
    const keys = Array.from(selected.keys());

    const removeNextKey = () => {
      if (keys.length) {
        // "5"
        const currentKey = keys.shift();

        setSelected((prev) => {
          const updatedKeys = new Set(prev);
          updatedKeys.delete(currentKey);
          return updatedKeys;
        });

        // setTimeout(removeNextKey, 500);

        //optimise case only
        timerRef.current = setTimeout(removeNextKey, 500);
      } else {
        // when end the deselection of box process meanse we don't have any key
        setUnLoading(true);
        clearTimeout(timerRef.current);
      }
    };

    // setTimeout(removeNextKey, 100);
    timerRef.current = setTimeout(removeNextKey, 100);
  };

  useEffect(() => {
    // selected.size >= countOfVisibleBoxes
    if (selected.size >= countOfVisibles) {
      // deselecting
      unLoad();
    }
  }, [selected]);

  return (
    <div className="boxes" onClick={handleBoxClick}>
      {boxes.map((box, idx) => {
        const status = box === 1 ? "visible" : "hidden";
        // ["1","2","3"]
        // ["1"].has(1) => false
        const isSelected = selected.has(idx.toString());

        return (
          <div
            key={idx}
            className={`box ${status} ${isSelected ? "selected" : ""}`}
            data-index={idx}
            data-status={status}
          />
        );
      })}{" "}
    </div>
  );
};

export default Shape;
