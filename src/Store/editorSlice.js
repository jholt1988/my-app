import {createSlice} from '@reduxjs/toolkit';
import { marked } from 'marked';

const STATUS= {
     idle:'IDLE', 
    input: 'INPUT', 
    parsing:'PARSING'

}
const initialText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`

const editorSlice =  createSlice({
    name: 'editor',
    initialState: {
        html: initialText,
        status: STATUS.idle,
        parsedHTML : marked.parse(initialText)
    }, 
    reducers:{
        setIdle : state => {
          state.status =  STATUS.idle
                }, 
          setInitialState: (state) => {

            state.status = STATUS.input
          },

        startUserInput: (state, action) => {
            state.status = STATUS.input
            
        }, 
          setUserInput: (state, action) => {
            state.status = STATUS.input 
            state.html = action.payload
          }, 
          completeUserInput: (state, action) => {
            state.status = STATUS.parsing
            state.parsedHTML = document.getElementById('preview').innerHTML= marked.parse(state.html)
          }, 
          completeParsing: (state, action) => {
            state.status = STATUS.idle
          
            state.parsedHTML += action.payload
          }
           
    }

})

export const {setIdle, setInitialState, startUserInput, setUserInput, completeUserInput, completeParsing} =  editorSlice.actions

export default editorSlice.reducer
