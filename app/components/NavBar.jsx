
const NavBar = ({ isAuth, setIsAuth }) => {
    return (
        <nav className='w-full nav-style text-right h-[60px] flex sticky items-center top-0 z-10  shadow backdrop-blur-lg  bg-[#ffffff94] scrolled-nav   mx-auto  
         transition-[background,color,box-shadow] duration-700  
        '  >
            <div className="container">
                <button onClick={() => setIsAuth(!isAuth)} className='backdrop-blur-lg  bg-[#736FB2] hover:opacity-80 transition-[background] duration-700 p-2 text-white rounded-md   text-sm w-[80px]'>
                    Log out
                </button>
            </div>

        </nav >
    )
}

export default NavBar