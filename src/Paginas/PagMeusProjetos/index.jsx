
import './index.css';
import cinetag from './imgs-portifolio/imgs-portifolio/img-cinetag.png';
import OlaMundo from './imgs-portifolio/imgs-portifolio/img-ola-mundo.png';
import Organo from './imgs-portifolio/imgs-portifolio/img-organo.png';
import AluraGeek from './imgs-portifolio/imgs-portifolio/img-AluraGeek.png';
import CadastroAluraBooks from './imgs-portifolio/imgs-portifolio/img-cadastro-alurabooks.png';
import AluraMidi from './imgs-portifolio/imgs-portifolio/img-alura-midi.png';
import AluraPlay from './imgs-portifolio/imgs-portifolio/img-aluraplay.png';
import Monibank from './imgs-portifolio/imgs-portifolio/img-monibank.png';
import AluraBooks from './imgs-portifolio/imgs-portifolio/img-Alura-books.png';
import ProjetoFokus from './imgs-portifolio/imgs-portifolio/img-projeto-Fokus.png';
import Decodificador from './imgs-portifolio/imgs-portifolio/decodificador_img.png';
import NumeroSecreto from './imgs-portifolio/imgs-portifolio/JSGame_img.png';
import OutroAluraPlay from './imgs-portifolio/imgs-portifolio/alura_play_img.png';
import WebPage from './imgs-portifolio/imgs-portifolio/webpage_img.png';
import ProfileCard from './imgs-portifolio/imgs-portifolio/profileCard_img.png';
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
                <div className='projetos'>
                    <img src={cinetag} alt="" />
                    <h4 className='projetos__titulo'>Cinetag</h4>
                    <div className='ContainerBtns'>
                        <button onClick={() => openModal(cinetag)} >Ver mais</button>
                        <a className='ancoras' href="https://github.com/luckfer7/cinetag" target="_blank" rel="noopener noreferrer">Ver no Github</a>
                        <a className='ancoras' href="https://cinetag-roan-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">Ver deploy</a>
                    </div>
                </div>

                <div className='projetos'>
                    <img src={OlaMundo} alt="" />
                    <h4 className='projetos__titulo'>Olá, mundo!</h4>
                    <div className='ContainerBtns'>
                        <button onClick={() => openModal(OlaMundo)} >Ver mais</button>
                        <a className='ancoras' href="https://github.com/luckfer7/ola-mundo" target="_blank" rel="noopener noreferrer">Ver no Github</a>
                        <a className='ancoras' href="https://ola-mundo-self-three.vercel.app/" target="_blank" rel="noopener noreferrer">Ver deploy</a>
                    </div>
                </div>

                <div className='projetos'>
                    <img src={Organo} alt="" />
                    <h4 className='projetos__titulo'>Organo</h4>
                    <div className='ContainerBtns'>
                        <button onClick={() => openModal(Organo)} >Ver mais</button>
                        <a className='ancoras' href="https://github.com/luckfer7/organo" target="_blank" rel="noopener noreferrer">Ver no Github</a>
                        <a className='ancoras' href="https://organo-chi-cyan.vercel.app/" target="_blank" rel="noopener noreferrer">Ver deploy</a>
                    </div>
                    

                </div>

                <div className='projetos'>
                    <img src={AluraGeek} alt="" />
                    <h4 className='projetos__titulo'>Alura Geek</h4>
                    <div className='ContainerBtns'>
                        <button onClick={() => openModal(AluraGeek)} >Ver mais</button>
                        <a className='ancoras' href="https://github.com/luckfer7/alura-geek" target="_blank" rel="noopener noreferrer">Ver no Github</a>
                        <a className='ancoras' href="https://alura-geek-blush.vercel.app/" target="_blank" rel="noopener noreferrer">Ver deploy</a>
                    </div>
                    

                </div>

                <div className='projetos'>
                    <img src={CadastroAluraBooks} alt="" />
                    <h4 className='projetos__titulo'>Tela de Cadastro no Alura books</h4>
                    <div className='ContainerBtns'>
                        <button onClick={() => openModal(CadastroAluraBooks)} >Ver mais</button>
                        <a className='ancoras' href="https://github.com/luckfer7/cadastro-alurabooks" target="_blank" rel="noopener noreferrer">Ver no Github</a>
                        <a className='ancoras' href="https://cadastro-alurabooks.vercel.app/" target="_blank" rel="noopener noreferrer">Ver deploy</a>
                    </div>

                </div>

                <div className='projetos'>
                    <img src={AluraMidi} alt="" />
                    <h4 className='projetos__titulo'>Alura Midi</h4>
                    <div className='ContainerBtns'>
                        <button onClick={() => openModal(AluraMidi)} >Ver mais</button>
                        <a className='ancoras' href="https://github.com/luckfer7/alura-midi" target="_blank" rel="noopener noreferrer">Ver no Github</a>
                        <a className='ancoras' href="https://alura-midi-eight-rouge.vercel.app/" target="_blank" rel="noopener noreferrer">Ver deploy</a>
                    </div>
                    

                </div>

                <div className='projetos'>
                    <img src={AluraPlay} alt="" />
                    <h4 className='projetos__titulo' >Alura Play</h4>
                    <div className='ContainerBtns'>
                        <button onClick={() => openModal(AluraPlay)} >Ver mais</button>
                        <a className='ancoras' href="https://github.com/luckfer7/Alura-play-2" target="_blank" rel="noopener noreferrer">Ver no Github</a>
                        <a className='ancoras' href="https://alura-play-2.vercel.app/" target="_blank" rel="noopener noreferrer">Ver deploy</a>
                    </div>
                    

                </div>

                <div className='projetos'>
                    <img src={Monibank} alt="" />
                    <h4 className='projetos__titulo'>Monibank</h4>
                    <div className='ContainerBtns'>
                        <button onClick={() => openModal(Monibank)} >Ver mais</button>
                        <a className='ancoras' href="https://github.com/luckfer7/moni-bank" target="_blank" rel="noopener noreferrer">Ver no Github</a>
                        <a className='ancoras' href="https://moni-bank-six.vercel.app/pages/abrir-conta-form.html" target="_blank" rel="noopener noreferrer">Ver deploy</a>
                    </div>
                    

                </div>

                <div className='projetos'>
                    <img src={AluraBooks} alt="" />
                    <h4 className='projetos__titulo'>Alura Books</h4>
                    <div className='ContainerBtns'>
                        <button onClick={() => openModal(AluraBooks)} >Ver mais</button>
                        <a className='ancoras' href="https://github.com/luckfer7/alura-books" target="_blank" rel="noopener noreferrer">Ver no Github</a>
                        <a className='ancoras' href="https://alura-books-beta-lemon.vercel.app/" target="_blank" rel="noopener noreferrer">Ver deploy</a>
                    </div>
                    

                </div>

                <div className='projetos'>
                    <img src={ProjetoFokus} alt="" />
                    <h4 className='projetos__titulo'>Projeto Fokus</h4>
                    <div className='ContainerBtns'>
                        <button onClick={() => openModal(ProjetoFokus)} >Ver mais</button>
                        <a className='ancoras' href="https://github.com/luckfer7/projeto-fokus" target="_blank" rel="noopener noreferrer">Ver no Github</a>
                        <a className='ancoras' href="https://projeto-fokus-blond.vercel.app/" target="_blank" rel="noopener noreferrer">Ver deploy</a>
                    </div>
                </div>

                <div className='projetos'>
                    <img src={Decodificador} alt="" />
                    <h4 className='projetos__titulo'>Decodificador</h4>
                    <div className='ContainerBtns'>
                        <button onClick={() => openModal(Decodificador)}>Ver mais</button>
                        <a className='ancoras' href="https://github.com/luckfer7/Decodificador" target="_blank" rel="noopener noreferrer">Ver no Github</a>
                        <a className='ancoras' href="https://decodificador-pink.vercel.app/" target="_blank" rel="noopener noreferrer">Ver deploy</a>
                    </div>
                    

                </div>

                <div className='projetos'>
                    <img src={NumeroSecreto} alt="" />
                    <h4 className='projetos__titulo'>Número Secreto</h4>
                    <div className='ContainerBtns'>
                        <button  onClick={() => openModal(NumeroSecreto)}>Ver mais</button>
                        <a className='ancoras' href="https://github.com/luckfer7/jogo-do-numero-secreto" target="_blank" rel="noopener noreferrer">Ver no Github</a>
                        <a className='ancoras' href="https://jogo-five-beryl.vercel.app/" target="_blank" rel="noopener noreferrer">Ver deploy</a>
                    </div>
                    

                </div>

                <div className='projetos'>
                    <img src={OutroAluraPlay} alt="" />
                    <h4 className='projetos__titulo'>Alura Play</h4>
                    <div className='ContainerBtns'>
                        <button onClick={() => openModal(OutroAluraPlay)} >Ver mais</button>
                        <a className='ancoras' href="https://github.com/luckfer7/alura-play" target="_blank" rel="noopener noreferrer">Ver no Github</a>
                        <a className='ancoras' href="https://alura-play-henna.vercel.app/" target="_blank" rel="noopener noreferrer">Ver deploy</a>
                    </div>
                    
                </div>

                <div className='projetos'>
                    <img src={WebPage} alt="" />
                    <h4 className='projetos__titulo'>Web Page</h4>
                    <div className='ContainerBtns'>
                        <button onClick={() => openModal(WebPage)} >Ver mais</button>
                        <a className='ancoras' href="https://github.com/luckfer7/one-page-website" target="_blank" rel="noopener noreferrer">Ver no Github</a>
                        <a className='ancoras' href="https://one-page-website-steel.vercel.app/" target="_blank" rel="noopener noreferrer">Ver deploy</a>
                    </div>
                    

                </div>

                <div className='projetos'>
                    <img src={ProfileCard} alt="" />
                    <h4 className='projetos__titulo'>Profile Card</h4>
                    <div className='ContainerBtns'>
                        <button onClick={() => openModal(ProfileCard)} >Ver mais</button>
                        <a className='ancoras' href="https://github.com/luckfer7/profile-card" target="_blank" rel="noopener noreferrer">Ver no Github</a>
                        <a className='ancoras' href="https://profile-card-xi-two.vercel.app/" target="_blank" rel="noopener noreferrer">Ver deploy</a>
                    </div>
                </div>

            </div>
            
            {modalOpen && <ModalZoom image={modalImage} closeModal={closeModal} />}

        </>
    )
}

export default MeusProjetos;