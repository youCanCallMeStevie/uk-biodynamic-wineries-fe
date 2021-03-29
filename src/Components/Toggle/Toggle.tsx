import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {CheckBoxWrapper, CheckBox, CheckBoxLabel} from "./Toggle.elements";
import {setDarkMode} from "../../store/actions/nightModeActions"
function Toggle() {
    const dispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.nightMode)
    const toggleMode = () => {
        dispatch(setDarkMode(!mode.on))
    }
    return (
        <>
             <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" onClick={()=>toggleMode()} />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
        </>
    )
}

export default Toggle
