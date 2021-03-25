import {OPEN_MODAL, CLOSE_MODAL, ModalDispatchTypes} from "../types";
import {Dispatch} from "react";


export const toggleModalActions = (toggled: boolean, type: string ="") => async (
dispatch: Dispatch<ModalDispatchTypes>
) => {
    if(toggled === true){
        dispatch({
            type: OPEN_MODAL,
            payload: {isOpen: toggled, type}
        })
    } else{
        dispatch({
            type: CLOSE_MODAL,
            payload: {isOpen: toggled, type}
        })
    }
}