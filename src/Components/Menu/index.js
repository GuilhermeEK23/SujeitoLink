import './menu.css'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div className='container-menu'>
            <a className='social' href="https://youtube.com.br/@uilhrm2473" target='_blank'>
                <BsYoutube size={24} color='#FFF'/>
            </a>
            <a className='social' href="https://www.instagram.com/guilherme.e.k.23/" target='_blank'>
                <BsInstagram size={24} color='#FFF'/>
            </a>
            <Link to={'/Links'} className='menu-item'>
                Meus Links
            </Link>
        </div>
    )
}