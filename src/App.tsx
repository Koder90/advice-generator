import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

interface Advice {
  id: number,
  advice: string
}

function App() {

  const [items, setItems] = useState<Advice[]>([])

  let myAdvice;

  let randomNum = Math.floor(Math.random() * 100) + 1

  const API_URL = `https://api.adviceslip.com/advice/${randomNum}`;

  const API = { get }

  function get(url: RequestInfo | URL) {
    return fetch(url).then(resp =>
      resp.json())
  }

  useEffect(() => {
    API.get(API_URL).then(data => setItems(data['slip']['advice']))
  }, [])

  const addQuote = () => {
    API.get(API_URL).then(data => setItems(data['slip']['advice']))

  }

  return (
    <div className='container'>
      <div className='items'>
        <p className='number'>{`advice# ${randomNum}`}</p>
        <p className='text'>{`"${items}"`}</p>
      </div>
      <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" /><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
      <div onClick={() => addQuote()} className='dice'><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" />
      </svg>
      </div>
    </div>
  )
}

export default App
