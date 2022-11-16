import styles from './Register.module.css'
import { useState, useEffect, FormEvent } from 'react'


export const Register = () => {

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) =>{
    e.preventDefault()

    setError("")
    const user = {
      displayName,
      email,
      password
    }
    if(password !== confirmPassword){
      setError("Passwords needs to be the same")
      return
    }
    console.log(user)
  }

  return (
    <div className={styles.register}>
      <h1>Register to post</h1>
      <p>Create your user and share your moments</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input type="text" name="displayName"
           required placeholder='Username' 
           value={displayName}
           onChange={(e)=>{setDisplayName(e.target.value)}}/>
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" 
          required placeholder='Your email' 
          value={email}
           onChange={(e)=>{setEmail(e.target.value)}}/>
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" 
          required placeholder='Password'
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}} />
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="confirmPassword"
            required placeholder='Confirm your password'
            value={confirmPassword}
            onChange={(e)=>{setConfirmPassword(e.target.value)}} />
        </label>
        <button className='btn'>Register</button>
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}
