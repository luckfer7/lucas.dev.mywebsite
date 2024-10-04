import { useEffect, useRef } from "react";
import './index.css';

function ModalZoom ({image, closeModal}) {

    const dialogRef = useRef(null);

    useEffect (() => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    }, []);

    const handleClose = () => {
        if (dialogRef.current) {
            dialogRef.current.close();    
        }

        closeModal();
    }

    return (  

        <dialog ref={dialogRef} onClose={handleClose}>
            <div>
                <button onClick={handleClose} style={{ float: 'right' }}>X</button>
                <img src={image} alt="Zoomed" style={{ width: '100%', height: 'auto' }} />
            </div>
        </dialog>
    );
}

export default ModalZoom;