import CloseButton from 'react-bootstrap/CloseButton';
import './Toolbar.css';



function Toolbar (props) {
 const {title} = props

    return(
        <span className='toolbar'>
            <h4 className='toolbar_title' title={title}>{title}</h4>
            <CloseButton className='close_button' variant='white' aria-label='Close'/>
           
        </span>
    )
}

export default Toolbar