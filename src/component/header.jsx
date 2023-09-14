import { Link } from "react-router-dom"

export default function Header(){
    const klik = (e)=>{
    }
    return(
        <div className="bg-primary-blue h-24 flex justify-between">
            <div className="text-4xl font-semibold text-primary-orange w-[25%] min-w-[200px] flex items-center justify-center">MYHOTEL</div>  
            <div className="w-[75%] flex-row justify-center items-center">
                <div className="h-8 bg-white flex items-center justify-between px-6 max-md:hidden">
                    <div className="flex justify-around text-xs">   
                        <div className="flex items-center mr-2">
                            <i className="ri-mail-line text-primary-orange"></i>     
                            <span className="text-secondary-gray px-2">info@myhotel.yogya.com</span>
                        </div>
                        <div className="flex items-center mx-4">
                            <i className="ri-phone-fill text-primary-orange"></i>
                            <span className="text-secondary-gray px-2">+6274 5432 9876</span>
                        </div>     
                    </div>
                    <div className="w-40 flex items-center justify-around">
                        <i className="ri-facebook-line text-primary-orange"></i>
                        <i className="ri-twitter-fill text-primary-orange"></i>
                        <i className="ri-linkedin-line text-primary-orange"></i>
                        <i className="ri-instagram-line text-primary-orange"></i>
                        <i className="ri-youtube-line text-primary-orange"></i>
                    </div>
                </div>
                <div className="h-16 w-[500px] uppercase text-white text-sm flex items-center justify-start max-md:hidden">
                    <Link to='' className="mr-8 hover:text-primary-orange text-primary-orange">home</Link>
                    <Link to='' className="mr-8 hover:text-primary-orange">about</Link>
                    <Link to='' className="mr-8 hover:text-primary-orange">service</Link>
                    <Link to='' className="mr-8 hover:text-primary-orange">rooms</Link>
                    <Link to='' className="mr-8 hover:text-primary-orange">pages</Link>
                    <Link to='' className="mr-8 hover:text-primary-orange">contact</Link>
                </div>
            </div>     
            <button onClick={klik} className="md:hidden px-4">
                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>      
        </div>
    )
}