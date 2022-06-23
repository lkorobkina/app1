import React from "react";
import './Card.css';

const CardHeader = ({value, isEditMode, onChange, checked}) => {

    return (
        <div>
            {isEditMode ? (
                <div >
                        <input value={value}
                               onChange={onChange}
                        />
                </div>
            ) : (
                <div>
                        <p className={'input' + (checked ? ' active' : '')}>{value}</p>
                </div>
            )}
        </div>
    );
}

export default CardHeader;