
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const { CreateUser } = useContext(AuthContext)


  const [registerError, setRegisterError] = useState('')
  const [success, setSuccess] = useState('')


  const handleRegister = e => {
    e.preventDefault()
    console.log(e.currentTarget)
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')
    console.log(name, email, password)

    setRegisterError('')
    setSuccess('')

    if (password.length < 6) {
      setRegisterError('Password should be at least 6 character or longer')
    }
    else if (!/[A-Z]/.test(password)) {
      setRegisterError('your password should be uppercase')
      return
    }
    else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-/]/.test(password)) {
      setRegisterError('Your password should contain at least one special character');
    }


    CreateUser(email, password)
      .then(result => {
        console.log(result.user)
        toast.success('User Created Successfully')
      })
      .catch(error => {
        console.error(error)
        toast.error('Email alreaday existed')
      })

  }

  return (
    <div className='mx-auto  w-3/4 mt-12'>
      <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="w-full py-3 px-4 rounded-lg bg-pink-400 text-white">Register</button>
        </div>
      </form>
      {
        registerError && <p className='text-red-500 text-center'>{registerError}</p>
      }
      {
        success && <p className="text-lime-600 text-center">{success}</p>
      }

      <p className="text-center mt-4">Already have an account? Please <Link className="text-pink-400 font-bold" to={'/login'}>Login</Link></p>

      <ToastContainer />
    </div>
  );
};

export default Register;