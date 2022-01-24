import { useState } from 'react';
import './todo.css';
import BackDrop from '../backdrop/BackDrop';
import Modal from '../modal/Modal'


export default function Todo(props) {
  const [modalIsOpen, setModalIsOPen] = useState(false)

  const handleDelete = () => {
    setModalIsOPen(true)
  }

  const handleClose = () => {
    setModalIsOPen(false);
  };

    return (
      <div>
        <div className="card">
          <h2>{props.text}</h2>
        </div>
        <div className="actions">
          <button className="btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
        {modalIsOpen && (
          <Modal onCancel={handleClose} onConfirm={handleClose} />
        )}
        {modalIsOpen && <BackDrop onClick={handleClose} />}
      </div>
    );
}
