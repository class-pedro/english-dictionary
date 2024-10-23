import { useState } from "react";
import { DropdownOption } from "../../types/types";

type Props = {
  containerClassName?: string
  options: DropdownOption[];
  placeholder?: string;
  onSelect: (value: string) => void;
  initialValue: string;
}

export function InputDropDown({
  containerClassName,
  options,
  placeholder,
  onSelect,
  initialValue
}: Props) {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>(initialValue);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div
      className={`relative w-full ${containerClassName}`}
    >
      <button
        onClick={toggleDropdown}
        className="w-full py-2 px-4 border border-gray-300 rounded-md bg-white text-left focus:outline-none focus:ring focus:ring-blue-500"
      >
        {selectedValue ? selectedValue : placeholder}
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map(option => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className="py-2 px-4 hover:bg-blue-100 cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}