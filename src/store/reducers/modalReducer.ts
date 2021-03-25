import {ModalState, OPEN_MODAL, CLOSE_MODAL, ModalDispatchTypes} from "../types";

const initialState: ModalState ={
    isOpen: false,
    type:""
};

const modalReducer =(
    state = initialState,
    action:ModalDispatchTypes
): ModalState => {
switch (action.type) {
    case OPEN_MODAL:
        return{
            ...state,
            isOpen: true,
            type: action.payload?.type,
        };
        case CLOSE_MODAL:
        return{
            ...state,
            isOpen: false,
            type: "",
        };
        default:
            return state;
}

}

export default modalReducer;
