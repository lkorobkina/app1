import './Card.css';
import {useState} from "react";

export function Card(props){

    const [checked, setChecked] = useState(true);

    function changeCheckbox() {
        setChecked(!checked);
        if (checked) {
            document.getElementById('caption').style.font = "italic small-caps bold 16px/2 cursive";
        }
        else {
            document.getElementById('caption').style.font = "caption";
        }
    }


    return <div className='bolder'>
            <div className='text'>

                <div className='row'>
                    <input type="checkbox" id="chetyre" onChange={changeCheckbox}/>
                    <p id="caption">{props.caption}</p>
                </div>
                    <hr/>
                    <p>{props.text}</p>

            </div>
    </div>
}
