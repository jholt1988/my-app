import Toolbar from "../componets/Toolbar";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIdle, startUserInput, setInitialState, setUserInput, completeUserInput, completeParsing } from '../Store/editorSlice'

function Editor() {
    const dispatch = useDispatch()
    const html = useSelector(state =>
        state.editor.html
    )
    const [input, setInput] = useState(html)





    const userInput = e => { 
        setInput(e.target.value); 
        dispatch(setUserInput(e.target.value)); 
        dispatch(completeUserInput()) }



    return (
        <div width={3} >
            <Toolbar title='EDITOR' />
            <Form>
                <Form.Control as='textarea' type='input' id="editor" name="userInput" defaultValue={input} onChange={userInput} ></Form.Control>
            </Form>
        </div>
    )
}


export default Editor