import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/Firebase.config";


const Login = () => {

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider

    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const [Error, setError] = useState('')

    const handleGoogle = () =>{
        signInWithPopup(auth, provider)
        .then( result => {
            console.log(result.user)})
        .catch(error => {
            console.error(error.message)})
    }

    const handleLogin = e => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(form)
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)

                toast.error('Please enter correct info')
            })
    }

    return (
        <div className="mt-12 mx-auto  w-3/4">

            <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto ">
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
                    <button className="w-full py-3 px-4 rounded-lg bg-pink-400 text-white">Login</button>
                </div>

                
            </form>

            <button onClick={ handleGoogle} className="py-2 px-4 bg-pink-300 rounded-full text-center items-center mx-auto ml-72 text-white">Google</button>

            {
                Error && <p className='text-red-500 text-center'>{Error}</p>
            }
            <p className="text-center mt-4">Do not have an account? Please <Link className="text-pink-400 font-bold" to={'/register'}>Register</Link></p>

           

            <ToastContainer />
        </div>
    );
};

export default Login;