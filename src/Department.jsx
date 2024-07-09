import { useState, useEffect } from "react";

const Department = ({dept,options}) => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelect = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        // onSelect(selectedValue);
      };
  return (<>
    <h1>heading</h1>
    <div>department</div>
    <div>{dept.firstName}</div>
    <div>{dept.position}</div>
    <select value={selectedOption} onChange={handleSelect}>
      <option value="">Select a department</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>


  </>
  )
}

export default Department