import { useEffect, useState } from "react";
import { IMAGE_DATA } from "./constant";

const Carausel = () => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const handleNextClick = () => {
    // if (activeImgIndex === IMAGE_DATA.length - 1) {
    //   setActiveImgIndex(0);
    // } else {
    //   setActiveImgIndex(activeImgIndex + 1);
    // }
    setActiveImgIndex((activeImgIndex + 1) % IMAGE_DATA.length);
  };
  const handlePrevClick = () => {
    setActiveImgIndex((prev) =>
      prev === 0 ? IMAGE_DATA.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImgIndex]);

  const renderImage = (index) => {
    const imageUrl = IMAGE_DATA[index];
    const isActive = activeImgIndex === index;
    return (
      <img
        key={imageUrl}
        src={imageUrl}
        alt="image-wallpaper"
        className={`w-[500px] h-[400px] object-contain rounded-sm ${
          isActive ? "block" : "hidden"
        }`}
      />
    );
  };

  // eslint-disable-next-line no-unused-vars
  const generateImage = (url, index) => (
    <img
      key={url}
      src={url}
      alt="image-wallpaper"
      className={`w-[500px] h-[400px] object-contain rounded-sm ${
        activeImgIndex === index ? "block" : "hidden"
      }`}
    />
  );
  return (
    <div className=" flex justify-center">
      <button
        className="m-4 p-4 font-bold text-xl hover:text-blue-500"
        onClick={handlePrevClick}
      >
        Previous
      </button>
      {/* <img
        src={IMAGE_DATA[activeImgIndex]}
        alt="image"
        className="w-[500px] h-[400px] object-cover rounded-sm"
      /> */}

      {/* {IMAGE_DATA.map((url, index) => (
        <img
          key={url}
          src={url}
          alt="image-wallpaper"
          className={`w-[500px] h-[400px] object-contain rounded-sm ${
            activeImgIndex === index ? "block" : "hidden"
          }`}
        />
      ))} */}

      {IMAGE_DATA.map((url, index) => renderImage(index))}

      {/* {IMAGE_DATA.map((url, index) => generateImage(url, index))} */}
      <button
        className="m-4 p-4 font-bold text-xl hover:text-blue-500"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};
export default Carausel;
