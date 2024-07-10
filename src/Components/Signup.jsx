import { useState } from 'react'

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const register = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3100/api/authRoute/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password: pass
      })
    })
    const data = await response.json();
    if (response.ok) {
      console.log('User registered successfully:', data);
    } else {
      console.error('Error registering user:', data);
    }
  }
  return (
    <div className='auth-form'>
      <form onSubmit={register}>
        <input placeholder='username' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input placeholder='email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder='password' type="text" value={pass} onChange={(e) => setPass(e.target.value)} />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login