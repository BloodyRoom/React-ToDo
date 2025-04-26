import Button from "../Button/Button";
import { useAction } from "../../../hooks/useAction";

const Task = ({id, title, description}) => {
    const { deleteTask } = useAction();

    const style = {
        borderRadius: "18px",
        minHeight: "100px",
        minWidth: "300px",
        padding: "0px 20px",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        border: "2px solid rgba(255, 255, 255, 0.15)",
        color: "white",
        transition: "border .2s",
        outline: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }

    return (
        <>
            <div style={style}>
                <div>
                    <p style={{fontSize: "17px", marginBottom: "0"}}>{title}</p>
                    <p style={{fontSize: "13px", marginTop: "0", whiteSpace: "pre", wordWrap: "break-word", textWrap: "wrap", width: "200px"}}>
                        {description}
                    </p>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Button onClick={() => {deleteTask(id)}} color="rgb(147, 59, 59)" variant="transparent" sx={{width: "100px", minWidth: "0", height: "40px", minHeight: "0", marginBottom: "5px"}}>Delete</Button>
                    {/* <Button variant="transparent" sx={{width: "100px", minWidth: "0", height: "40px", minHeight: "0"}}>Edit</Button> */}
                </div>
            </div>
        </>
    )
}

export default Task;