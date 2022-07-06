import React from "react";
import './Card.css';
import {HiOutlineCheck, HiOutlinePencil, HiOutlineX} from "react-icons/hi";

const CardHeader = ({
                        id, value, isEditMode, onChange, isActive, submitHandler,
                        cancelHandler, changeActiveHandler, isDisableMode, editHandler
                    }) => {

    return (
        <div>
            {isEditMode ? (
                <div className='row'>
                    <input value={value}
                           onChange={onChange}
                    />
                    <div className='checks'>
                        <HiOutlineCheck onClick={submitHandler}/>
                        <HiOutlineX onClick={cancelHandler}/>
                    </div>
                </div>
            ) : (
                <div className='row'>
                    <p className={'input' + (isActive ? ' active' : '')}>{value}</p>
                    <div className='checks'>
                        <input id='cb' type="checkbox" checked={isActive} onChange={() => changeActiveHandler(id)}/>
                        {!isDisableMode ? (
                            <HiOutlinePencil onClick={editHandler}/>
                        ) : ''
                        }
                    </div>
                </div>
            )}
        </div>
    );
}

export default CardHeader;