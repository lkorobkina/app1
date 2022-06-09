import './Card.css';
import { HiOutlineCheck, HiOutlinePencil, HiOutlineX } from 'react-icons/hi';
import {useState} from "react";

const Card = props => {

    const [checked, setChecked] = useState(true);
    const [isEditMode,setIsEditMode] = useState(false);
    const [caption, setCaption] = useState(props.caption);
    const [text, setText] = useState(props.text);
    const [captionNotChange, setCaptionNGh] = useState(caption);
    const [textNotChange, setTextNGh] = useState(text);
    const [isBackMode, setIsBackMode] = useState(false);

    let captionValue, textValue;


    if (!isEditMode) {
            captionValue = <span>{caption}</span>;
            textValue = <span>{text}</span>;

    } else {
        captionValue = <input value={caption}
                       onChange={event => setCaption(event.target.value)}
                       onBlur={() => setIsEditMode(isEditMode)}/>;
        textValue = <textarea
            className='textarea'
            value={text}
            onChange={event => setText(event.target.value)}
            onBlur={() => setIsEditMode(isEditMode)} />;
    }

    const checkboxHandler = () => setChecked(!checked);

    const submitHandler = () => {
        setIsBackMode(!isBackMode);
        setIsEditMode(!isEditMode);
    }

    const editHandler = () => {
        setIsEditMode(!isEditMode);
        setChecked(true);
        setCaptionNGh(caption);
        setTextNGh(text);
    }

    const cancelHandler = () =>{
        setIsBackMode(true);
        setIsEditMode(!isEditMode);
        setCaption(captionNotChange);
        setText(textNotChange);
    }


    return <div className='bolder'>
        <div className='text'>
            <div className='row'>
                <div className='checks'>
                    {!isEditMode ? (
                        <div>
                            <input id='cb' type="checkbox" onChange={checkboxHandler}/>
                            <HiOutlinePencil onClick={editHandler}/>
                        </div>
                    ) : (
                        <div>
                            <HiOutlineCheck onClick={submitHandler}/>
                            <HiOutlineX onClick={cancelHandler}/>
                        </div>
                        )
                    }
                </div>
                <p className={'input' + (checked ? ' active' : '')}>{captionValue}</p>
            </div>
            <hr/>
            <p>{textValue}</p>
        </div>
    </div>
}

export {Card};
