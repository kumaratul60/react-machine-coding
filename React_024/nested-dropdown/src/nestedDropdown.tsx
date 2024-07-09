/* eslint-disable @typescript-eslint/no-explicit-any */

interface DropdownItem {
  depth: number;
  id: string;
  title: string;
  url: string;
  name: string;
  icon: string;
  class: string;
  categories: any[];
  children: DropdownItem[];
}

interface NestedDropdownProps {
  items: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
  openItems: string[];
  toggleItem: (id: string) => void;
}

const NestedDropdown: React.FC<NestedDropdownProps> = ({
  items,
  onSelect,
  openItems,
  toggleItem,
}) => {
  const renderItems = (items: DropdownItem[], depth = 0) => {
    return items.map((item) => (
      <div key={item.id} style={{ paddingLeft: `${depth * 10}px` }}>
        <div onClick={() => (item.children.length ? toggleItem(item.id) : onSelect(item))}>
          {item.title} {item.children.length ? (openItems.includes(item.id) ? "[-] " : "[+] ") : ""}
        </div>
        {openItems.includes(item.id) && item.children.length > 0 && (
          <div>{renderItems(item.children, depth + 1)}</div>
        )}
      </div>
    ));
  };

  return <div>{renderItems(items)}</div>;
};

export default NestedDropdown;
