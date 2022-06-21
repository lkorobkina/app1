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

    return (
        <div className="main">
            {isEditMode ? (
                <div className='text'>
                    <div className='row'>
                        <CardHeader caption={caption} isEditMode={isEditMode} isDisableMode={props.isDisableMode}/>
                        <div className='checks'>
                            <HiOutlineCheck onClick={submitHandler}/>
                            <HiOutlineX onClick={cancelHandler}/>
                        </div>
                        {/*<input value={caption}*/}
                        {/*       onChange={event => setCaption(event.target.value)}*/}
                        {/*/>*/}
                    </div>
                    {/*<hr/>*/}
                    {/*<textarea*/}
                    {/*    className='textarea'*/}
                    {/*    value={text}*/}
                    {/*    onChange={event => setText(event.target.value)}*/}
                    {/*/>*/}

                    <CardBody text={text} isEditMode={isEditMode} isDisableMode={props.isDisableMode}/>
                </div>
            ) : (
                <div className='text'>
                    <div className='row'>
                        <CardHeader caption={caption} isEditMode={isEditMode} checked={checked} isDisableMode={props.isDisableMode}/>
                        <div className='checks'>
                            <input id='cb' type="checkbox" onChange={checkboxHandler}/>
                            {!props.isDisableMode ? (
                                <HiOutlinePencil onClick={editHandler}/>
                            ) : ''
                            }
                        </div>
                        {/*<p className={'input' + (checked ? ' active' : '')}>{caption}</p>*/}
                    </div>
                    {/*<hr/>*/}
                    {/*<p>{text}</p>*/}
                    <CardBody text={text} isEditMode={isEditMode} isDisableMode={props.isDisableMode}/>
                </div>
            )}
        </div>
    );

}

export default Card;
