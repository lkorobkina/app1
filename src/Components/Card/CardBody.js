import './Card.css';
import React, {useContext, useEffect, useState} from "react";

const CardBody = props => {
    const [text, setText] = useState(props.text);
    const [textNotChange,setTextNGh] = useState(text);

    const cancelHandler = () => {
        setText(textNotChange);
    }

    useEffect(() => {
        cancelHandler()
    }, [props.isDisableMode]);

    return (
        <div className="main">
            {props.isEditMode ? (
                <div >
                    <hr/>
                    <textarea
                        className='textarea'
                        value={text}
                        onChange={event => setText(event.target.value)}
                    />
                </div>
            ) : (
                <div>
                    <hr/>
                    <p>{text}</p>
                </div>
            )}
        </div>
    );

}

export default CardBody;
