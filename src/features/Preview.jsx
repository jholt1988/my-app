import Toolbar from "../componets/Toolbar"
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { completeParsing, completeUserInput, setUserInput } from "../Store/editorSlice"
import { marked  } from "marked"
import parse from 'html-react-parser'


function Preview() {
    const dispatch = useDispatch()
    const userHtml = useSelector(state => state.editor.parsedHTML)
     
    const [HTML, setHTML] = useState(userHtml)

   

    
     const onLoad = () => {dispatch(completeUserInput())}


    
    return (
        <div>
            <Toolbar title="PREVIEWER" />
            <div id="preview" onLoad={onLoad} >
                { parse(HTML)}
            </div>
        </div>
    )
}

export default Preview