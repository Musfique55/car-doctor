import hero from '../../assets/images/login/login.svg';
import facebook from '../../assets/icons/bx_bxl-facebook.svg';
import linkedin from '../../assets/icons/bx_bxl-linkedin.svg';
import google from '../../assets/icons/google 1.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Components/AuthProvider';
import { useContext } from 'react';
const Signup = () => {
    const {createUser} = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(user);
        createUser(email,password)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className='mx-5 md:mx-12 lg:mx-14'>
            <div className=" min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 lg:text-left">
                       <img src={hero} alt="" className='h-[420px]'/>
                    </div>
                    <div className=" w-1/2 border p-20 rounded-xl">
                    <h2 className='text-center text-[#444444] font-semibold text-4xl'>Sign Up</h2>
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="bg-[#FF3811] text-white text-xl font-semibold rounded-xl py-4">Sign Up</button>
                        </div>
                        <p className='mt-7 font-medium text-lg text-center'>Or Sign Up with</p>
                    </form>
                    <div className=''>
                        <div className="flex justify-center gap-4">
                        <button className='bg-[#F5F5F8] p-3 rounded-full'><img src={facebook} alt="" /></button>
                        <button className='bg-[#F5F5F8] p-4 rounded-full'><img src={linkedin} alt="" /></button>
                        <button className='bg-[#F5F5F8] p-4 rounded-full'><img src={google} alt="" /></button>
                        </div>
                        <p className='text-[#737373] font-normal font-lg text-center mt-12'>Already have an account? <Link to="/signin" className='text-[#FF3811] font-semibold text-lg'>Login</Link></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;