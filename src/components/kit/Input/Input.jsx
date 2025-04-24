import { useState } from "react";

const Input = ({name, id, placeholder = "", value, onChange, onBlur, sx, color = "rgb(41, 31, 129)"}) => {
    const [hover, setHover] = useState(false);
    const [focus, setFocus] = useState(false);

    const style = {
        borderRadius: "18px",
        minHeight: "50px",
        minWidth: "300px",
        padding: "0px 20px",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        border: hover || focus ? `2px solid ${color}` : "2px solid rgba(255, 255, 255, 0.3)",
        color: "white",
        transition: "border .2s",
        outline: "none"
    }

    const mergeStyles = {...style, ...sx};

    const onBlurHandler = (event) => {
        setFocus(false);
        onBlur(event);
    }

    return (
        <>
            <input 
                name={name}
                id={id}
                type="text" 
                style={mergeStyles} 
                placeholder={placeholder} 
                onMouseLeave={() => {setHover(false)}} 
                onMouseEnter={() => {setHover(true)}}
                onFocus={() => {setFocus(true)}}

                onBlur={onBlurHandler}
                value={value}
                onChange={(event) => {onChange(event)}}
            />
        </>
    )
}

export default Input;