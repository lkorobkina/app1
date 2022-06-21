import React, {useEffect, useState} from "react";
import './Card.css';

const CardHeader = props => {
    const [caption, setCaption] = useState(props.caption);
    const [captionNotChange, setCaptionNGh] = useState(caption);

    const cancelHandler = () => {
        setCaption(captionNotChange);
    }

    useEffect(() => {
        cancelHandler()
    }, [props.isDisableMode]);

    return (
        <div className="main">
            {props.isEditMode ? (
                <div >
                        <input value={caption}
                               onChange={event => setCaption(event.target.value)}
                        />
                </div>
            ) : (
                <div>
                        <p className={'input' + (props.checked ? ' active' : '')}>{caption}</p>
                </div>
            )}
        </div>
    );
}

export default CardHeader;