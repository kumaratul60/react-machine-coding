type AccordionItemProps = {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
  checked: boolean;
  onCheckboxChange: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
  checked,
  onCheckboxChange,
}) => {
  return (
    <div>
      <div
        // onClick={onClick}
        style={{ cursor: "pointer", background: "#eee", padding: "10px", margin: "5px 0" }}
      >
        <input
          type="checkbox"
          checked={checked}
          //   onChange={onCheckboxChange}
          onChange={(e) => {
            e.stopPropagation();
            onCheckboxChange();
          }}
        />
        {/* {title} */}
        <span onClick={onClick}>{title}</span>
      </div>
      {isOpen && <div style={{ padding: "10px", border: "1px solid #eee" }}>{content}</div>}
    </div>
  );
};

export default AccordionItem;
