import styles from './Register.module.css'
import { useState, useEffect } from 'react'


export const Register = () => {
  return (
    <div>
      <h1>Register to post</h1>
      <p>Create your user and share your moments</p>
      <form>
        <label>
          <span>Name</span>
          <input type="text" name="displayName" required placeholder='Username' />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" required placeholder='Your email' />
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" required placeholder='Password' />
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="confirmPassword" required placeholder='Confirm your password' />
        </label>
        <button className='btn'>Register</button>
      </form>
    </div>
  )
}
