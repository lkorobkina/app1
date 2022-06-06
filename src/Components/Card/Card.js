import './Card.css';
import pencil from './pencil.png';
import save from './save.png';
import back from './back.png';
import {useState} from "react";

export function Card(props){

    const [checked, setChecked] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
    const [value1, setValue1] = useState(props.caption);
    const [value2, setValue2] = useState(props.text);
    const [showResults, setShowResults] = useState(true);

    let elem1, elem2;
    if (!isEdit) {
        elem1 = <span>{value1}</span>;
        elem2 = <span>{value2}</span>;
    } else {

        elem1 = <input value={value1}
                       onChange={event => setValue1(event.target.value)}
                       onBlur={() => setIsEdit(isEdit)}/>;
        elem2 = <textarea
            className='textarea'
            value={value2}
            onChange={event => setValue2(event.target.value)}
            onBlur={() => setIsEdit(isEdit)} />;
    }

    const checkboxHandler = () => setChecked(!checked);

    const onClick = () => {
        setShowResults(!showResults);
        setIsEdit(!isEdit);
        setChecked(true);
    }

    const backEdit = () =>{
        setShowResults(true);
        setIsEdit(false);
    }


    return <div className='bolder'>
        <div className='text'>
            <div className='row'>
                <div className='checks'>
                    { showResults ? <img src={pencil} alt={"pencil"} onClick={onClick}/> : null }
                    { showResults ? <input id='cb' type="checkbox" onChange={checkboxHandler}/> : null }
                    { showResults ? null : <img src={back} alt={"back"} onClick={backEdit}/> }
                    { showResults ? null : <img src={save} alt={"save"} onClick={onClick}/> }
                </div>
                <p className={'input' + (checked ? ' active' : '')}>{elem1}</p>
            </div>
            <hr/>
            <p>{elem2}</p>
        </div>
    </div>
}
