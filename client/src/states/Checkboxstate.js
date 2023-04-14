import { useState } from "react";
import context from "./CheckBoxContext";

const CheckboxState=(props)=>{
    const [checkedValues, setCheckedValues] = useState({
        overview: false,
        mainThesis: false,
        questions: false,
      });
    return (
    <context.Provider value={{checkedValues,setCheckedValues}}>
        {props.children}
    </context.Provider>
    )
}
export default CheckboxState;
