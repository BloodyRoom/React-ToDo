import { useState } from "react";

const Input = ({placeholder = "", value, onChange, sx}) => {
    const [hover, setHover] = useState(false);
    const [focus, setFocus] = useState(false);

    const style = {
        borderRadius: "18px",
        minHeight: "50px",
        minWidth: "300px",
        padding: "0px 20px",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        border: hover || focus ? "2px solid rgb(41, 31, 129)" : "2px solid rgba(255, 255, 255, 0.3)",
        color: "white",
        transition: "border .2s",
        outline: "none"
    }

    const mergeStyles = {...style, ...sx};

    return (
        <>
            <input 
                type="text" 
                style={mergeStyles} 
                placeholder={placeholder} 
                onMouseLeave={() => {setHover(false)}} 
                onMouseEnter={() => {setHover(true)}}
                onFocus={() => {setFocus(true)}}
                onBlur={() => {setFocus(false)}}

                value={value}
                onChange={onChange}
            />
        </>
    )
}

export default Input;