/* There are four main ways I can define props types. I prefer number 4
type selectPropsType = {
    label: string
    value: string
}
1. const componentName = (props: {label:string
    value: string
})=>{
    return <></>
}
2. const ComponentName = (props:selectPropsType) const 
Destructured props
3. const ComponentName = ({label,value}:{label:string
    value:string})
4. const ComponentName: React.FC<selectPropsType>
*/

import React from "react";
type option = {
  label: string;
  value: string;
};
type options = option[];
interface selectProps {
  label: string;
  value: string;
  options: options;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const customSelect: React.FC<selectProps> = ({
  label,
  value,
  options,
  onChange,
}) => {
  return (
    <label>
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default customSelect;
