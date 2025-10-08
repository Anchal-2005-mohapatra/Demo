import React,{useState} from 'react'
import AuthModal from './AuthModal';
// import { useNavigate } from 'react-router-dom'


const Home = () => {
    // const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className='bg-pink-800 h-screen '>
            <ul className=' p-3 flex justify-between gap-10 text-white text-xl underline cursor-pointer' >
                <li onClick={()=>{
                    setIsModalOpen("true") }}>Login</li>
                    <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                {/* <li onClick={()=>{navigate("/signup")}}>Sign Up</li> */}
            </ul>
        </div>
    )
}

export default Home