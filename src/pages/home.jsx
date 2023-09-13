import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="font-roboto bg-black h-screen">
            <div className="bg-primary-blue h-24 flex justify-between">
                <div className="text-4xl font-semibold text-primary-orange w-[25%] flex items-center justify-center">MYHOTEL</div>  
                <div className="w-[75%] flex-row justify-center items-center">
                    <div className="h-8 bg-white flex items-center justify-between px-6">
                        <div className="flex justify-around text-xs">   
                            <div className="flex items-center mr-2">
                                <i class="ri-mail-line text-primary-orange"></i>     
                                <span className="text-secondary-gray px-2">info@myhotel.yogya.com</span>
                            </div>
                            <div className="flex items-center mx-4">
                                <i class="ri-phone-fill text-primary-orange"></i>
                                <span className="text-secondary-gray px-2">+6274 5432 9876</span>
                            </div>     
                        </div>
                        <div className="w-40 flex items-center justify-around">
                            <i class="ri-facebook-line text-primary-orange"></i>
                            <i class="ri-twitter-fill text-primary-orange"></i>
                            <i class="ri-linkedin-line text-primary-orange"></i>
                            <i class="ri-instagram-line text-primary-orange"></i>
                            <i class="ri-youtube-line text-primary-orange"></i>
                        </div>
                    </div>
                    <div className="h-16 w-[500px] uppercase text-white text-sm flex items-center justify-start">
                        <Link to='' className="mr-8 hover:text-primary-orange text-primary-orange">home</Link>
                        <Link to='' className="mr-8 hover:text-primary-orange">about</Link>
                        <Link to='' className="mr-8 hover:text-primary-orange">service</Link>
                        <Link to='' className="mr-8 hover:text-primary-orange">rooms</Link>
                        <Link to='' className="mr-8 hover:text-primary-orange">pages</Link>
                        <Link to='' className="mr-8 hover:text-primary-orange">contact</Link>
                    </div>
                </div>            
            </div>
        </div>
    )
}