import classes from './BtnBox.module.css';
import Modal from './AddVehicleModal'
import {useState} from 'react';
import Backdrop from './Backdrop';







function BtnBox (props) {

    const [modalIsOpen, setModalOpen] = useState(false);

    function addHandler() {
        setModalOpen(true);
        console.log('The modal will open');
    }

    function closeModalHandler() {
        setModalOpen(false);
    }


    return (
        


        <div className={classes.content}>

            <div className = {classes.content}>
                <button className={classes.btn} onClick = {addHandler}>Add Vehicle</button>
                <button className={classes.btn}>Test</button>
                <button className={classes.btn}>Test</button>
                <button className={classes.btn}>Test</button>
                <button className={classes.btn}>Test</button>
            </div>
        {modalIsOpen && <Modal onCancel = {closeModalHandler} onConfirm = {closeModalHandler} />}
        {modalIsOpen && <Backdrop/>}


        </div>
    );

}
export default BtnBox;


