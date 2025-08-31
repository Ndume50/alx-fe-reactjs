import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'

function App() {
  const [count, setCount] = useState(0)

function WelcomeMessage() {
    return ( 
        <div>
            <h1>Hello everyone, I am learning React at ALX!</h1>
            <p>This is a simple JSX component.</p>
            <p>I am learning about JSX!</p>
        </div>
        
    );
} <WelcomeMessage /> 


   
    
  
}

function WelcomeMessage() {
    return (
        <div>
            <h1>Welcome to ALX React APP!</h1>
            <p>This is a simple JSX component.</p>
        </div>
    );
}

export default App
