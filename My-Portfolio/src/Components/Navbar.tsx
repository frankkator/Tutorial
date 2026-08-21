import MyLogo from '../assets/MyLogo.svg';


export default function navbar() {
       return (
       
              <nav className="flex justify-center p-3 pt-6 mx-auto mt-6 Items-center bg-black/30 rounded-full">
                     <ul className='flex mx-auto bg-white border border-bg-white/60 rounded-full'>
                     <a href='#' className='flex pt-3 justify-center cursor-pointer'>
                            Charts
                     </a>
                     </ul>
                     <ul className='flex mx-auto  bg-white border border-bg-white/60 rounded-full'>
                            <a href='#' className='flex pt-3 justify-center cursor-pointer'>
                                   Projects
                            </a>
                     </ul>
                    <ul className=' md:sticky flex mx-auto border border-transparent rounded-bg-black'>
                     <a href="#" className='flex pt-3 justify-center  cursor-pointer'>
                            {/*Logo image*/}
                            <img
                            src={MyLogo}
                            alt='Logo'
                            width={40}
                            height={20}
                            />
                     </a>
                     </ul>
                     <ul className=' mx-auto bg-white border border-bg-white/60 rounded-full '>
                            <a href='#' className='flex pt-3 justify-center cursor-pointer '>
                                   About me
                            </a>
                     </ul>
                     <ul className='flex mx-auto bg-white border border-bg-white/60 rounded-full'>
                            <a href='#' className='flex pt-3 justify-center cursor-pointer'>
                                   Expereince
                            </a>
                     </ul>
              </nav>
       )
}