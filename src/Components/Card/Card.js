import './Card.css';
import React, {useEffect, useState} from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

const Card = ({id, isDisableMode, isActive, cardCaption, cardText, changeActiveHandler}) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [caption, setCaption] = useState(cardCaption);
    const [text, setText] = useState(cardText);
    const [captionNotChange, setCaptionNGh] = useState(caption);
    const [textNotChange, setTextNGh] = useState(text);

    const checkboxHandler = () => {
        changeActiveHandler(id, !isActive);
    }

    const submitHandler = () => {
        setIsEditMode(false);
        setCaptionNGh(caption);
        setTextNGh(text);
    }

    const editHandler = () => {
        setIsEditMode(true);
        changeActiveHandler(id, false);
    }

    const cancelHandler = () => {
        setIsEditMode(false);
        setCaption(captionNotChange);
        setText(textNotChange);
    }

    useEffect(() => {
        cancelHandler()
    }, [isDisableMode]);

    return (
        <div className="main">
            <div className='text'>
                    <CardHeader value={caption} isEditMode={isEditMode} isActive={isActive}
                                onChange={event => setCaption(event.target.value)}
                                cancelHandler={cancelHandler} submitHandler={submitHandler}
                                checkboxHandler={checkboxHandler} isDisableMode={isDisableMode} editHandler={editHandler}/>
                    <CardBody value={text} isEditMode={isEditMode}
                              onChange={event => setText(event.target.value)}/>
            </div>
        </div>
    );

}

export default Card;
