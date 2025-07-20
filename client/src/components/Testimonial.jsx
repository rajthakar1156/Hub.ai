import React from 'react'

const Testimonial = () => {
  return (
    <>
        <h1 className=' text-white text-center mb-10 text-4xl font-bold'>Loved By Creators</h1>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
            * {
                font-family: 'Poppins', sans-serif;
            }
        `}</style>
        <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="max-w-80 bg-black text-white rounded-2xl">
                <div className="relative -mt-px overflow-hidden rounded-2xl">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600" alt="" className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                    <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                </div>
                <div className="px-4 pb-4">
                    <p className="font-medium border-b border-gray-600 pb-5">“Hub.ai
gave us the power of a dozen specialized AI apps in one clean workspace.
We went from juggling tools to just getting remarkable work done.”</p>
                    <p className="mt-4">— John Doe</p>
                    <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">Content Marketing</p>
                </div>
            </div>
            <div className="max-w-80 bg-black text-white rounded-2xl">
                <div className="relative -mt-px overflow-hidden rounded-2xl">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600" alt="" className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                    <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                </div>
                <div className="px-4 pb-4">
                    <p className="font-medium border-b border-gray-600 pb-5">“ Hub.ai made consolidating our entire suite of creative and professional tools an absolute breeze.
It’s the only AI subscription our team will ever need.”</p>
                    <p className="mt-4">— David Smith</p>
                    <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">UI/UX Designer</p>
                </div>
            </div>
            <div className="max-w-80 bg-black text-white rounded-2xl">
                <div className="relative -mt-px overflow-hidden rounded-2xl">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop" alt="" className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                    <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                </div>
                <div className="px-4 pb-4">
                    <p className="font-medium border-b border-gray-600 pb-5">“Hub.ai
streamlined everything from our marketing copy to our hiring process instantly.
It's our command center for every creative and operational task.”</p>
                    <p className="mt-4">— Eily Wastson</p>
                    <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">Hiring Manager</p>
                </div>
            </div>
        </div>
        </>
    );
    
}

export default Testimonial