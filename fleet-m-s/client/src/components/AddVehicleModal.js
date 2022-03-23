import classes from './AddVehicleModal.module.css'

function Modal (props){

    function cancelHandler (){
        props.onCancel();
    }

    function confirmHandler() {
        props.onConfirm();
    }


    return (
        <div className= {classes.modal}>
            <p>Test</p>
            <button onClick={cancelHandler}>Close Modal</button>
        </div>
    );
}

export default Modal;


