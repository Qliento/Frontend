import React, {useState, useEffect} from "react";
import Header from "./header/header";
import classes from "./clientPage.module.css"
import Content from "./content/content";
import Modal from './modal/modal';
import ReactDOM from 'react-dom';
import ModalChange from './modal/modalChange';
import { clientData } from '../../redux/actions/actions';
import { useDispatch, useSelector } from "react-redux";

const ClientPage=()=>{
    const [modal, setModal] = useState(0);

    const token = localStorage.getItem("user");
    const dispatch = useDispatch();
    const data = useSelector((state) => state.clientData.data.data);
    useEffect(() => {
        dispatch(clientData(token));
    }, []);     

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
            <Header onModal={onModal} data={data} />
            <Content/>
            {modal == 1 && ReactDOM.createPortal(
                <Modal offModal={offModal} changeModal={changeModal} data={data} />,
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