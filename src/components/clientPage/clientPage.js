import React, {useState} from "react";
import Header from "./header/header";
import classes from "./clientPage.module.css"
import Content from "./content/content";
import Modal from './modal/modal';
import ReactDOM from 'react-dom';
import ModalChange from './modal/modalChange';

const ClientPage=()=>{
    const [modal, setModal] = useState(2);

    const onModal = () =>{
        setModal(1)
    }

    const offModal = () =>{
        setModal(0)
    }

    const changeModal = () =>{
        setModal(2)
    }


    return(
        <div className={classes.clientPage}>
            <Header onModal={onModal} />
            <Content/>
            {modal == 1 && ReactDOM.createPortal(
                <Modal offModal={offModal} changeModal={changeModal} />,
                document.getElementById('portal')
            )}
            {modal == 2 && ReactDOM.createPortal(
                <ModalChange offModal={offModal} />,
                document.getElementById('portal')
            )}
        </div>
    )
}
export default ClientPage;