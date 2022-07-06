import './Card.css';
import React from "react";

const CardBody = ({value, isEditMode, onChange}) => {

    return (
        <div>
            {isEditMode ? (
                <div >
                    <hr/>
                    <textarea
                        className='textarea'
                        value={value}
                        onChange={onChange}
                    />
                </div>
            ) : (
                <div>
                    <hr/>
                    <p>{value}</p>
                </div>
            )}
        </div>
    );

}

export default CardBody;
