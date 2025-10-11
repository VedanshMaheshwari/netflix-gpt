import React from "react";

import Header from '../components/Header.jsx';

const Login = () => {
    return(
        <div>
            <Header/>
            <div className="absolute">
                 <img src="https://assets.nflxext.com/ffe/siteui/vlv3/1d8a9cc6-dbed-4bcc-9e40-d71d8cc8340b/web/IN-en-20251006-TRIFECTA-perspective_a6194aef-34d2-4b3a-b93f-d9cb871bdcd0_medium.jpg" alt="backgroud-image"/>
            </div>

            <div >
                <form className="w-4/14 absolute p-12 bg-black/70 my-30 mx-auto right-0 left-0 text-white ">
                    <h1 className="font-bold text-3xl py-4">Sign In</h1>
                    <input 
                        type="text" 
                        placeholder="  Email Address" 
                        className="p-4 my-2.5 w-full border border-gray-300 rounded-md bg-black/75 text-white"
                    />
                    <input 
                        type="password" 
                        placeholder="  Password" 
                        className="p-4 my-2.5 w-full border border-gray-300 rounded-md bg-black/75 text-white"
                    />
                    <button 
                        className="p-3 my-5 bg-red-600 w-full rounded-md ">
                            Sign In
                    </button>

                </form> 
            </div>
            
        </div>
    )
}

export default Login;