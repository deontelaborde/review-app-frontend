import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginUser } from '../services/Authorize'
import { Link } from 'react-router-dom'

const Login = (props) => {
  const [formValues, setFormValues] = useState({ username: '', password: '' })
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await LoginUser(formValues)
    setFormValues({ username: '', password: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    navigate('/')
  }

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="username"
          value={formValues.username}
          required
        ></input>
        <label htmlFor="password"></label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="password"
          value={formValues.password}
          required
        ></input>

        <button
          className="login-button"
          disabled={!formValues.username || !formValues.password}
        >
          Login
        </button>
      </form>
      <h2>
        Don't have an account?
        <Link to="/register" className="link">
          <button className="signup-button"> Sign Up </button>
        </Link>
      </h2>
    </div>
  )
}

export default Login
