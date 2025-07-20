import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
        <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full text-gray-300">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                <div className="md:max-w-96">
       <h1 onClick={()=>navigate('/')} className=' text-neutral-300 w-32 sm:w-44 cursor-pointer text-4xl font-extrabold'>Hub<span className=' text-[#4285F4]'>.</span>ai</h1>
                    <p className="mt-6 text-sm">
                        Welcome to Hub.ai, your all-in-one creation space. 

Unify your creative process with a complete suite of AI tools. Generate articles, design stunning images, and manage your entire workflow from a single dashboard.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg" alt="google play" className="h-10 w-auto border border-white rounded" />
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg" alt="app store" className="h-10 w-auto border border-white rounded" />
                    </div>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="https://www.linkedin.com/in/dte-gecbh-com-raj-thakar">Contact us</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+91-1000000000</p>
                            <p>hub.ai@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()}<a> © Hub.ai</a>. All Right Reserved.
            </p>
        </footer>
    )
};

export default Footer;