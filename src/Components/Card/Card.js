import './Card.css';
import { HiOutlineCheck, HiOutlinePencil, HiOutlineX } from 'react-icons/hi';
import React, {useState} from "react";

const Card = props => {

    const [checked, setChecked] = useState(false);
    const [isEditMode,setIsEditMode] = useState(false);
    const [caption, setCaption] = useState(props.caption);
    const [text, setText] = useState(props.text);
    const [captionNotChange, setCaptionNGh] = useState(caption);
    const [textNotChange, setTextNGh] = useState(text);
    const [watchOnly, setWatchOnly] = useState(false);

    const checkboxHandler = () => setChecked(!checked);

    const checkboxWatchOnly = () => {
        setWatchOnly(!watchOnly);
        setIsEditMode(false);
        setCaption(captionNotChange);
        setText(textNotChange);
    }

    const submitHandler = () => {
        setIsEditMode(false);
        setCaptionNGh(caption);
        setTextNGh(text);
    }

    const editHandler = () => {
        setIsEditMode(true);
        setChecked(false);
    }

    const cancelHandler = () =>{
        setIsEditMode(false);
        setCaption(captionNotChange);
        setText(textNotChange);
    }

    return (
        <div className="main">
            <input id='cb' type="checkbox" onChange={checkboxWatchOnly}/>Только просмотр
            { isEditMode ? (
                <div className='text'>
                    <div className='row'>
                        <div className='checks'>
                                <HiOutlineCheck onClick={submitHandler}/>
                                <HiOutlineX onClick={cancelHandler}/>
                        </div>
                        <input value={caption}
                               onChange={event => setCaption(event.target.value)}
                        />
                    </div>
                    <hr/>
                    <textarea
                        className='textarea'
                        value={text}
                        onChange={event => setText(event.target.value)}
                    />
                </div>
            ) : (
                <div className='text'>
                    <div className='row'>
                        <div className='checks'>
                            <input id='cb' type="checkbox" onChange={checkboxHandler}/>
                            <HiOutlinePencil className={'watchOnly' + (watchOnly ? ' true' : '')} onClick={editHandler}/>
                        </div>
                        <p className={'input' + (checked ? ' active' : '')}>{caption}</p>
                    </div>
                    <hr/>
                    <p>{text}</p>
                </div>
            ) }
        </div>
    );
}

export default Card;
