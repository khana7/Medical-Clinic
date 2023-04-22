import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = ({ setIsShow }) => {
    return (
        <div className="flex flex-col   fixed top-28 right-0 w-full">

            <div className='modal__form ' onClick={() => setIsShow(false)}>

            </div>
            <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg relative z-20">

                    <button className=" w-8 h-8 absolute top-0 right-0 " onClick={() => setIsShow(false)}>
                        X
                    </button>
                    <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                        Login
                    </h2>

                    <label for="email" className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                    <input id="email" type="email" name="login" placeholder="e-mail address" autocomplete="email"
                        className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" required />

                    <label for="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                    <input id="password" type="password" name="password" placeholder="password" autocomplete="current-password"
                        className="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" required />

                    <button type="submit"
                        className="w-full py-3 mt-10 bg-blue-500 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-blue-300 hover:shadow-none">
                        Login
                    </button>

                    <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                        <a href="#" className="flex-2 m-10 underline">
                            Forgot password?
                        </a>

                        <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                            or
                        </p>

                        <p className="flex-2  m-10 underline" onClick={() => setIsShow(false)}>
                            Create an Account
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Login