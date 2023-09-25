import { useState } from 'react';
import { toast } from 'react-toastify';

const Login = ({ setIsAuth }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

    }
    const onFinish = async (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };

        const res = await fetch('/api/login', requestOptions)
        const data = await res.json()

        if (res.status === 200) {
            setIsAuth(true)
            toast.success(data?.message)
            setFormData({
                username: "",
                password: ""
            });
        } else {
            toast.error(data?.message)
        }

    };
    return (

        <section className='bg-[#736FB2] py-24 h-[100vh]'>
            <form onSubmit={onFinish} className='mx-auto rounded-lg  h-[450px] py-20 flex  items-center flex-col justify-center max-w-[380px]   px-4   shadow backdrop-blur-lg  bg-[#ffffff] '>

                <div className='flex   mb-4 flex-col w-full '>

                    <label htmlFor='username' className='text-[#342C2C]   text-[15px] mb-[8px]'> Name</label>
                    <input onChange={changeHandler}
                        id='username' name='username' type='text' placeholder='Enter Your Username'
                        className='bg-[#F0F0F1]  text-[14px]  focus:bg-[#F0F0F1] px-4 rounded-lg outline-none border-none focus:outline-none focus:border-none   h-[48px]' />
                </div>
                <div className='flex   mb-5 flex-col w-full  '>
                    <label className='text-[#342C2C]  text-[15px] mb-[8px]' htmlFor='password'> Password</label>
                    <div className='w-full relative h-[48px]'>
                        <span className='absolute right-[16px] top-[18px] cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                            {!showPassword ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M10.8974 7.1025L7.10244 10.8975C6.61494 10.41 6.31494 9.7425 6.31494 9C6.31494 7.515 7.51494 6.315 8.99994 6.315C9.74244 6.315 10.4099 6.615 10.8974 7.1025Z" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.3649 4.3275C12.0524 3.3375 10.5524 2.7975 8.99988 2.7975C6.35238 2.7975 3.88488 4.3575 2.16738 7.0575C1.49238 8.115 1.49238 9.8925 2.16738 10.95C2.75988 11.88 3.44988 12.6825 4.19988 13.3275" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.31494 14.6475C7.16994 15.0075 8.07744 15.2025 8.99994 15.2025C11.6474 15.2025 14.1149 13.6425 15.8324 10.9425C16.5074 9.88499 16.5074 8.10749 15.8324 7.04999C15.5849 6.65999 15.3149 6.29249 15.0374 5.94749" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.6326 9.52499C11.4376 10.5825 10.5751 11.445 9.51758 11.64" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.1025 10.8975L1.5 16.5" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.5 1.5L10.8975 7.1025" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M11.6849 9C11.6849 10.485 10.4849 11.685 8.99994 11.685C7.51494 11.685 6.31494 10.485 6.31494 9C6.31494 7.515 7.51494 6.315 8.99994 6.315C10.4849 6.315 11.6849 7.515 11.6849 9Z" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.99988 15.2025C11.6474 15.2025 14.1149 13.6425 15.8324 10.9425C16.5074 9.88499 16.5074 8.10749 15.8324 7.04999C14.1149 4.34999 11.6474 2.78999 8.99988 2.78999C6.35238 2.78999 3.88488 4.34999 2.16738 7.04999C1.49238 8.10749 1.49238 9.88499 2.16738 10.9425C3.88488 13.6425 6.35238 15.2025 8.99988 15.2025Z" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                        </span>

                        <input onChange={changeHandler} id='password' type={!showPassword ? 'password' : "text"}
                            name='password' placeholder='Enter Your Password' className='w-full bg-[#F0F0F1]  px-4 rounded-lg outline-none border-none focus:outline-none focus:border-none   h-[48px]' />
                    </div>

                </div>

                <div className='flex gap-3 items-center mb-5 w-full'>

                    <button type="submit" size={'small'} className='backdrop-blur-lg w-full
                 bg-[#736FB2] hover:opacity-80 transition-[background] duration-700 p-2 text-white rounded-md   text-base h-[48px] font-semibold '>
                        Submit
                    </button>
                </div>

            </form>
        </section >

    )
};
export default Login;