'use client';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const darkMode = localStorage.getItem('color-theme') === 'dark' ||
            (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        setIsDarkMode(darkMode);
    }, []);

    return (
        <div>
            <Header />
            <div className="container mx-auto">
                <section className="relative py-24 overflow-hidden">
                    <div className="container px-4 mx-auto mb-16 md:mb-0">
                        <div className="md:w-1/2 pl-4">
                            <span className="inline-block py-1 px-3 mb-4 text-xs leading-5 bg-blue-500 text-white font-medium rounded-full shadow-sm">(BSX) BasicSwap v - (GUI) v.3.0.0</span>
                            <h3 className="mb-6 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter dark:text-white">Welcome to BasicSwap DEX</h3>
                            <p className="mb-12 text-lg md:text-xl text-coolGray-500 dark:text-gray-300 font-medium">The World's Most Secure and Decentralized DEX, Safely swap cryptocurrencies without central points of failure. It’s free, completely trustless, and highly secure.</p>
                            <div className="flex flex-wrap mb-10 text-center md:text-left">
                                <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-6">
                                    <a href="/wallets">
                                        <div className="inline-flex h-14 w-14 mx-auto items-center justify-center text-white bg-blue-500 rounded-lg">
                                            {/* <span dangerouslySetInnerHTML={{ __html: '{{ index_wallet_svg | safe }}' }} /> */}
                                            <svg class="text-gray-500 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 24 24">
                                                <g stroke-linecap="round" stroke-width="2" fill="none" stroke="#6b7280" stroke-linejoin="round">
                                                    <path d="M6,3H3C1.895,3,1,3.895,1,5 v0c0,1.105,0.895,2,2,2"></path>
                                                    <polyline points=" 6,7 6,1 20,1 20,7 " stroke="#6b7280"></polyline>
                                                    <path d="M23,7H3 C1.895,7,1,6.105,1,5v15c0,1.657,1.343,3,3,3h19V7z"></path>
                                                    <circle cx="17" cy="15" r="2"></circle>
                                                </g>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div className="w-full md:flex-1 md:pt-3">
                                    <div className="md:max-w-sm">
                                        <h3 className="mb-4 text-xl md:text-2xl leading-tight text-coolGray-900 dark:text-white font-bold">Your Wallet</h3>
                                        <p className="text-coolGray-500 dark:text-gray-300 font-medium">Manage your cryptocurrency wallets.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-10 text-center md:text-left">
                                <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-6">
                                    <a href="/offers">
                                        <div className="inline-flex h-14 w-14 mx-auto items-center justify-center text-white bg-blue-500 rounded-lg">
                                            {/* <span dangerouslySetInnerHTML={{ __html: '{{ index_trading_svg | safe }}' }} /> */}
                                            <svg class="text-gray-500 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24">
                                                <g fill="#ffffff" class="nc-icon-wrapper">
                                                    <path fill="#ffffff" d="M12,3c1.989,0,3.873,0.65,5.43,1.833l-3.604,3.393l9.167,0.983L22.562,0l-3.655,3.442C16.957,1.862,14.545,1,12,1C5.935,1,1,5.935,1,12h2C3,7.037,7.037,3,12,3z"></path>
                                                    <path data-color="color-2" d="M12,21c-1.989,0-3.873-0.65-5.43-1.833l3.604-3.393l-9.167-0.983L1.438,24l3.655-3.442C7.043,22.138,9.455,23,12,23c6.065,0,11-4.935,11-11h-2C21,16.963,16.963,21,12,21z"></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div className="w-full md:flex-1 md:pt-3">
                                    <div className="md:max-w-sm">
                                        <h3 className="mb-4 text-xl md:text-2xl leading-tight text-coolGray-900 dark:text-white font-bold">Start Trading</h3>
                                        <p className="text-coolGray-500 dark:text-gray-300 font-medium">Browse available swap offers placed by others.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap text-center md:text-left">
                                <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-6">
                                    <a href="https://academy.particl.io/en/latest/faq/get_support.html" target="_blank" rel="noopener noreferrer">
                                        <div className="inline-flex h-14 w-14 mx-auto items-center justify-center text-white bg-blue-500 rounded-lg">
                                            {/* <span dangerouslySetInnerHTML={{ __html: '{{ index_support_svg | safe }}' }} /> */}
                                            <svg class="text-gray-500 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24">
                                                <g stroke-linecap="square" stroke-width="2" fill="none" stroke="#ffffff" stroke-linejoin="miter" class="nc-icon-wrapper" stroke-miterlimit="10">
                                                    <line x1="12" y1="7" x2="12" y2="17" stroke="#ffffff"></line>
                                                    <line x1="17" y1="12" x2="7" y2="12" stroke="#ffffff"></line>
                                                    <circle cx="12" cy="12" r="11"></circle>
                                                </g>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div className="w-full md:flex-1 md:pt-3">
                                    <div className="md:max-w-sm">
                                        <h3 className="mb-4 text-xl md:text-2xl leading-tight text-coolGray-900 dark:text-white font-bold">Help / Tutorials</h3>
                                        <p className="text-coolGray-500 dark:text-gray-300 font-medium">Learn how to use BasicSwap with the Particl Academy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:absolute md:top-28 lg:top-1/2 md:-right-96 xl:-right-80 md:-mr-56 lg:-mr-20 xl:-mr-0 md:transform lg:-translate-y-1/2 px-4 mb-16 md:mb-0">
                        <div className="relative max-w-max">
                            <img className="absolute p-7 -mt-1 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 z-20 imageshow light-image" src="/static/images/gfx/dashboard.jpg" alt="" style={{}} />
                            <img className="absolute p-7 -mt-1 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 z-20 imageshow dark-image" src="/static/images/gfx/dashboard2.jpg" alt="" style={{}} />
                            <img className="relative z-10 imageshow light-image" src="/static/images/gfx/macbook.png" alt="" style={{}} />
                            <img className="relative z-10 imageshow dark-image" src="/static/images/gfx/macbook2.png" alt="" style={{}} />
                            <img className="absolute -top-24 right-0 md:mt-px md:right-96 md:mr-52 lg:mr-16 xl:-mr-20 w-28 md:w-auto text-blue-500" src="/static/images/elements/dots2-red.svg" alt="" />
                            <img className="absolute -bottom-24 left-0 md:left-auto md:mt-px md:right-96 md:mr-52 lg:mr-16 xl:-mr-20 w-28 md:w-auto text-red-500" src="/static/images/elements/dots2-red.svg" alt="" />
                            <img className="absolute left-0 top-1/2 transform -translate-y-1/2 w-28 md:w-auto text-yellow-400" src="/static/images/elements/circle2-violet.svg" alt="" />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default App;