import { useState } from 'react'
import './Login.css'
import { Logo } from '../../components/Logo'


export default function Login(){

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e){
        e.preventDefault();
        console.log(email)
        console.log(password)
        alert("Teste")
    }

    return(
        <div className="login-container" onSubmit={handleLogin}>
            <Logo/>
            <form className='form'>
                <input
                    type="text"
                    placeholder='Digite seu email...'
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='*******'
                    autoComplete='on'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button type="submit">Acessar</button>
            </form>
        </div>
    )
}