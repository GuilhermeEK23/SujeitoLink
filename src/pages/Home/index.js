import { FiLink } from 'react-icons/fi'
import './home.css'
import Menu from '../../Components/Menu'
import LinkItem from '../../Components/LinkItem'
import { useState } from 'react'
import api from '../../Services/api'
import { saveLink } from '../../Services/storeLinks'

export default function Home(){
  const [link, setLink] = useState('')
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)

  async function handleShortLink(){
    try {
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data);
      setShowModal(true);
      saveLink('@EncurtaLink', response.data)
      setLink('')
    } catch {
      alert("Ops, parece que algo deu errado!");
      setLink('')
    }
  }

  return(
    <div className="container-home">
      
      <div className="logo">
        <img src="/logo.png" alt="Sujeito link Logo" />
        <h1>SujeitoLink</h1>
        <span>Cole o seu link para encurtar</span>
      </div>
      <div className="area-input">
        <div>
          <FiLink color='white'/>
          <input 
            placeholder='Cole seu link aqui...'
            value={link}
            onChange={ (e) => setLink(e.target.value) }
          />
        </div>
        <button onClick={handleShortLink}>Gerar</button>
      </div>
      <Menu/>
      { showModal && (
        <LinkItem
          closeModal={ () => setShowModal(false) }
          content={data}
        />
      ) }
    </div>
  )
}