import React, { useState } from 'react';

export default function Nav({ user }) {


    const [open, setOpen] = useState(false)
    const logout = () => {
        window.open("http://localhost:8000/auth/logout", "_self")
    }

    return (

        <div className="overflow-x-hidden bg-gray-800">
            <header className="py-4 md:py-6" x-data="{expanded: false}">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <a href="#" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                                <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg" alt="" />
                            </a>
                        </div>

                        <div className="flex lg:hidden">
                            <button type="button" className="text-gray-900" onClick={() => { setOpen(!open) }}>
                                {!open ?

                                    <span x-show="!expanded" aria-hidden="true">
                                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </span>
                                    :
                                    <span x-show="expanded" aria-hidden="true">
                                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </span>
                                }
                            </button>


                        </div>

                        <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                            <a href="#" title="" className="text-base font-medium p-2  transition-all duration-200 rounded focus:outline-none font-pj text-gray-400 hover:bg-gray-700 hover:rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> Features </a>

                            <a href="#" title="" className="text-base font-medium p-2  transition-all duration-200 rounded focus:outline-none font-pj text-gray-400 hover:bg-gray-700 hover:rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> Pricing </a>

                            <a href="#" title="" className="text-base font-medium p-2  transition-all duration-200 rounded focus:outline-none font-pj text-gray-400 hover:bg-gray-700 hover:rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> Automation </a>
                        </div>

                        <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">

                            {
                                !user ?
                                    <div>

                                        <a
                                            href="/login"
                                            title=""
                                            className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                            role="button"
                                        >
                                            Login
                                        </a>
                                    </div>
                                    :
                                    <div className='flex'>
                                          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                            <span class="relative px-6 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                               Try Now
                                            </span>
                                        </button>
                                        <button onClick={logout} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                            <span class="relative px-6 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                               Logout
                                            </span>
                                        </button>
                                       
                                        {
                                            user.provider == "discord" ?
                                                <img className='w-[50px] h-[50px] ml-4 rounded-full' src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`} />
                                                :
                                                <img className='w-[50px] h-[50px] ml-4 rounded-full' src={user.photos[0].value} />

                                        }

                                    </div>


                            }
                        </div>


                    </div>

                    {open ?


                        <nav x-show="expanded" x-collapse>
                            <div className="px-1 py-8">
                                <div className="grid gap-y-7">
                                    <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Features </a>

                                    <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Pricing </a>

                                    <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Automation </a>

                                    <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Customer Login </a>

                                    <a
                                        href="#"
                                        title=""
                                        className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                        role="button"
                                    >
                                        Sign up
                                    </a>
                                </div>
                            </div>
                        </nav>
                        : null
                    }
                </div>
            </header>

        </div>

    )
}
