import Button from "../Button/Button";
import { useAction } from "../../../hooks/useAction";
import { useState } from "react";

const Task = ({id, title, description, complete}) => {
    const { deleteTask, completeToggle } = useAction();
    const [hover, setHover] = useState(false);

    const style = {
        borderRadius: "18px",
        minHeight: "100px",
        minWidth: "300px",
        padding: "0px 15px",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        border: complete ? "2px solid rgb(60, 147, 59)" : "2px solid rgba(255, 255, 255, 0.15)",
        color: "white",
        transition: "border .2s",
        outline: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        opacity: complete ? hover ? 1 : 0.5 : 1,
        transition: ".3s"
    }

    return (
        <>
            <div 
                style={style} 
                onMouseEnter={() => {setHover(true)}}
                onMouseLeave={() => {setHover(false)}}
            >
                <div>
                    <p style={{fontSize: "17px", marginBottom: "0"}}>{title}</p>
                    <p style={{fontSize: "13px", marginTop: "0", whiteSpace: "pre", wordWrap: "break-word", textWrap: "wrap", width: "200px"}}>
                        {description}
                    </p>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Button onClick={() => {deleteTask(id)}} color="rgb(147, 59, 59)" variant="transparent" sx={{width: "110px", minWidth: "0", height: "40px", minHeight: "0", marginBottom: "5px"}}>Delete</Button>
                    <Button onClick={() => {completeToggle(id)}} color="rgb(60, 147, 59)" variant="transparent" sx={{width: "110px", minWidth: "0", height: "40px", minHeight: "0"}}>{complete ? "Renew" : "Complete"}</Button>
                </div>
            </div>
        </>
    )
}

export default Task;