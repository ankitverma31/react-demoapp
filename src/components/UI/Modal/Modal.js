import './Modal.css';

const Modal = props => {

    const closeModal = ()=> {
        props.onConfirm();
    };


    return (
        <div id="myModal" className={`modal ${props.message ?'show':''}`}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <p>{props.message}</p>
            </div>
        </div>
    );
};

export default Modal;