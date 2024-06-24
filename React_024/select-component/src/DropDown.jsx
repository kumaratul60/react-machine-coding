import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Dropdown = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption ? selectedOption.label : 'Select an option'}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                     {/* eslint-disable-next-line react/prop-types */}
                    {options.map((option) => (
                        <li key={option.value} onClick={() => handleSelect(option)}>
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};




const DrpDownApp = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    const handleSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <div>
            <h1>Dropdown Component Example</h1>
            <Dropdown options={options} onSelect={handleSelect} />
            <p>Selected option: {selectedOption ? selectedOption.label : 'None'}</p>
        </div>
    );
};

export default DrpDownApp;
