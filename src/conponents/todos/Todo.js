import React from './todo.css';

export default function Todo(props) {
  function handleDelete(){}
    return (
          <div>
            <div className="card">
              <h2>{props.text}</h2>
            </div>
            <div className='actions'>
              <button className='btn'onClick={handleDelete()}>Delete</button>
            </div>
          </div>
    );
}
