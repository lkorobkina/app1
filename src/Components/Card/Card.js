import './Card.css';

export function Card(props){
    return <div className='bolder'>
        <div className='row'>
            <div className='text'>
                <p>{props.caption}</p>
                <hr/>
                <p>{props.text}</p>
            </div>
        </div>
    </div>
}
