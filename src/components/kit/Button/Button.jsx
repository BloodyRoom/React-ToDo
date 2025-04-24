import { useState } from "react";

const Button = ({ children, onChange, sx, variant = "contained", color = "rgb(41, 31, 129)" }) => {
    const [hover, setHover] = useState(false);

    const style = {
        borderRadius: "18px",
        minHeight: "50px",
        minWidth: "150px",
        padding: "0px 20px",
        backgroundColor: color,
        border: hover ? `2px solid ${color}` : "2px solid rgba(255, 255, 255, 0.15)",
        color: "white",
        transition: ".2s",
        outline: "none",
        cursor: "pointer",
        filter: hover ? "brightness(1.5)" : "brightness(1)"
    }

    const styleTransparent = {
        borderRadius: "18px",
        minHeight: "50px",
        minWidth: "150px",
        padding: "0px 20px",
        backgroundColor: "transparent",
        border: hover ? `2px solid ${color}` : "2px solid rgba(255, 255, 255, 0.15)",
        color: "white",
        transition: ".2s",
        outline: "none",
        cursor: "pointer"
    }

    const mergeStyles = variant === "contained" ? {...style, ...sx} : variant === "transparent" ? {...styleTransparent, ...sx} : {...sx};

    return (
        <>
            <button
                onMouseLeave={() => {setHover(false)}}
                onMouseEnter={() => {setHover(true)}}
                style={mergeStyles}

                onChange={onChange}
            >
                {children}
            </button>
        </>
    )
}

export default Button;