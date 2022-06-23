import './Card.css';
import {HiOutlineCheck, HiOutlinePencil, HiOutlineX} from 'react-icons/hi';
import React, {useEffect, useState} from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

const Card = props => {
    const [checked, setChecked] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [caption, setCaption] = useState(props.caption);
    const [text, setText] = useState(props.text);
    const [captionNotChange, setCaptionNGh] = useState(caption);
    const [textNotChange, setTextNGh] = useState(text);

    const [isDelete, setIsDelete] = useState(false);

    const checkboxHandler = () => setChecked(!checked);

    const submitHandler = () => {
        setIsEditMode(false);
        setCaptionNGh(caption);
        setTextNGh(text);

    }

    const editHandler = () => {
        setIsEditMode(true);
        setChecked(false);
    }

    const cancelHandler = () => {
        setIsEditMode(false);
        setCaption(captionNotChange);
        setText(textNotChange);
    }

    useEffect(() => {
        cancelHandler()
    }, [props.isDisableMode]);


    if (props.isDeleteMode && isDelete) {
        return null;
    } else {
        return (
            <div className="main">
                <input type="checkbox" onChange={() => setIsDelete(!isDelete)}/>
                {isEditMode ? (
                    <div className='text'>
                        <div className='row'>
                            <CardHeader value={caption} isEditMode={isEditMode}
                                        onChange={event => setCaption(event.target.value)}/>
                            <div className='checks'>
                                <HiOutlineCheck onClick={submitHandler}/>
                                <HiOutlineX onClick={cancelHandler}/>
                            </div>
                        </div>
                        <CardBody value={text} isEditMode={isEditMode} onChange={event => setText(event.target.value)}/>
                    </div>
                ) : (
                    <div className='text'>
                        <div className='row'>
                            <CardHeader value={caption} isEditMode={isEditMode} checked={checked}
                                        onChange={event => setCaption(event.target.value)}/>
                            <div className='checks'>
                                <input id='cb' type="checkbox" onChange={checkboxHandler}/>
                                {!props.isDisableMode ? (
                                    <HiOutlinePencil onClick={editHandler}/>
                                ) : ''
                                }
                            </div>
                        </div>
                        <CardBody value={text} isEditMode={isEditMode} onChange={event => setText(event.target.value)}/>
                    </div>
                )}
            </div>
        );
    }

}

export default Card;
