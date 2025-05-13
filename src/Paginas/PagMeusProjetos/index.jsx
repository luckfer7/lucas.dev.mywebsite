
import './index.css';
import fluentfocus from './imgs-portifolio/imgs-portifolio/fluentfocus.png';
import landingpage from './imgs-portifolio/imgs-portifolio/landing-page.png';

import ModalZoom from '../../componentes/ModalZoom';
import { useState } from 'react';

function MeusProjetos () {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    function openModal (image) {
        setModalImage(image);
        setModalOpen(true);
        console.log("Imagem setada:", image);
    }

    function closeModal () {
        setModalOpen(false);
    }

    return (
        <>
            <div className="container__projetos">

                {/* <div className='projetos'>
                    <img src={cinetag} alt="" />
                    <h4 className='projetos__titulo'>Cinetag</h4>
                    <div className='ContainerBtns'>
                        <button onClick={() => openModal(cinetag)} >Ver mais</button>
                        <a className='ancoras' href="https://github.com/luckfer7/cinetag" target="_blank" rel="noopener noreferrer">Ver no Github</a>
                        <a className='ancoras' href="https://cinetag-roan-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">Ver deploy</a>
                    </div>
                </div> */}

                <div className='projetos'>
                    <img src={fluentfocus} alt="imagem do fluentfocus" />
                    <h4 className='projetos__titulo'>Cinetag</h4>
                    <div className='ContainerBtns'>
                        <button onClick={() => openModal(fluentfocus)} >Ver mais</button>
                        <a className='ancoras' href="https://github.com/luckfer7/fluentfocus" target="_blank" rel="noopener noreferrer">Ver no Github</a>
                        <a className='ancoras' href="https://fluentfocus.vercel.app/" target="_blank" rel="noopener noreferrer">Ver deploy</a>
                    </div>
                </div>
                <div className='projetos'>
                    <img src={landingpage} alt="imagem do fluentfocus" />
                    <h4 className='projetos__titulo'>Cinetag</h4>
                    <div className='ContainerBtns'>
                        <button onClick={() => openModal(landingpage)} >Ver mais</button>
                        <a className='ancoras' href="https://github.com/luckfer7/Travel-website-landing-page" target="_blank" rel="noopener noreferrer">Ver no Github</a>
                        <a className='ancoras' href="https://travel-website-landing-page-sigma.vercel.app/" target="_blank" rel="noopener noreferrer">Ver deploy</a>
                    </div>
                </div>

            </div>
            
            {modalOpen && <ModalZoom image={modalImage} closeModal={closeModal} />}

        </>
    )
}

export default MeusProjetos;