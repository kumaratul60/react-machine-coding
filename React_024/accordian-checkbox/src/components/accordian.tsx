import { useState } from "react";
import AccordionItem from "./accordianItem";
import { textData } from "./data";

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [checkboxes, setCheckboxes] = useState<boolean[]>(Array(textData?.length).fill(false));

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCheckboxChange = (index: number) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };

  const allChecked = checkboxes.every(Boolean);

  return (
    <div>
      {textData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item?.title}
          content={item?.content}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
          checked={checkboxes[index]}
          onCheckboxChange={() => handleCheckboxChange(index)}
        />
      ))}
      <button disabled={!allChecked}>Submit</button>
    </div>
  );
};

export default Accordion;
