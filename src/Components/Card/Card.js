import './Card.css';
import './Input.css';
import {useState} from "react";

export function Card(props){

    const [checked, setChecked] = useState(true);
    const checkboxHandler = () => setChecked(!checked);

    function changeCheckbox() {
        checkboxHandler();
    }


    return <div className='bolder'>
            <div className='text'>

                <div className='row'>
                    <input type="checkbox" id="chetyre" onChange={changeCheckbox}/>
                    <p className={'input' + (checked ? ' active' : '')}>{props.caption}</p>
                </div>
                    <hr/>
                    <p>{props.text}</p>

            </div>
    </div>
}
