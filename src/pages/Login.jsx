import React, { useState }  from "react";

import Header from '../components/Header.jsx';



const Login = () => {

    const[isSignInForm, setSignInForm] = useState(true);

    const toggleSignInForm = () => {
        // Logic to handle sign-in can be added here
        setSignInForm(!isSignInForm);
    }

    return(
        <div>
            <Header/>
            <div className="absolute">
                 <img src="https://assets.nflxext.com/ffe/siteui/vlv3/1d8a9cc6-dbed-4bcc-9e40-d71d8cc8340b/web/IN-en-20251006-TRIFECTA-perspective_a6194aef-34d2-4b3a-b93f-d9cb871bdcd0_medium.jpg" alt="backgroud-image"/>
            </div>

            <div className="absolute top-0 left-0 right-0 z-50 flex justify-center items-center">
                <form className="w-4/14 p-12 bg-black/70 my-26 mx-auto right-0 left-0 text-white ">
                    <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                    {isSignInForm ? null : 
                        <input type="text" placeholder=" Full Name"
                        className="p-4 my-2.5 w-full border border-gray-300 rounded-md bg-black/75 text-white">
                        </input>
                    }
                    
                    <input 
                        type="text" 
                        placeholder=" Email Address" 
                        className="p-4 my-2.5 w-full border border-gray-300 rounded-md bg-black/75 text-white"
                    />
                    <input 
                        type="password" 
                        placeholder=" Password" 
                        className="p-4 my-2.5 w-full border border-gray-300 rounded-md bg-black/75 text-white"
                    />
                    <button 
                        className="p-3 my-5 bg-red-600 w-full rounded-md cursor-pointer"
                        >    
                            Sign In
                    </button>
                    <p className="text-center cursor-pointer">Forgot password?</p>
                    <input type="checkbox" name="remember-me" id="" className="my-4" /> Remember me

                    <p>
                        <span className="text-gray-400"> {isSignInForm ? "New to Netflix?" : "Already an user?"} </span>
                        <span className="font-bold text-shadow-white cursor-pointer" onClick={toggleSignInForm}>
                            {isSignInForm ? "Sign up now." : "Sign In now."}</span>
                    </p>
                    <p className="my-4 text-xs text-gray-500"> This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                    <p className="text-xs">Learn more.</p>
                </form> 
            </div>
            
        </div>
    )
}

export default Login;