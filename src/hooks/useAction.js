import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../store/actionCreator";

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};