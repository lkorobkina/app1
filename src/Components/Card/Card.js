import './Card.css';

export function Card(props){

    return <div className='bolder'>
            <div className='text'>

                <div className='row'>
                    <input type="checkbox" id="chetyre"/>
                    <p>{props.caption}</p>
                </div>
                    <hr/>
                    <p>{props.text}</p>

            </div>
    </div>
}
