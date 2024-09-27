
import './index.css'
import Csharp from './icons/c-sharp-c.svg';
import Dotnet from './icons/dotnet.svg';
import Css from './icons/file-type-css.svg';
import HTML from './icons/html-5.svg';
import JavaScript from './icons/javascript-original.svg';
import Node from './icons/node-js.svg';
import React from './icons/react-original-wordmark.svg';


function MinhasSkills () {
    return (
        <>
            <h1 className='skill_titulo'>Essas são as tecnologias que domino</h1>
            <div className='tech__container'>
                <img className='icons__img' src={React} alt="" />
                <img className='icons__img' src={JavaScript} alt="" />
                <img className='icons__img' src={HTML} alt="" />
                <img className='icons__img' src={Css} alt="" />
                <img className='icons__img' src={Node} alt="" />
                <img className='icons__img' src={Csharp} alt="" />
                <img className='icons__img-net' src={Dotnet} alt="" />
            </div>
        </>
    )
}

export default MinhasSkills;