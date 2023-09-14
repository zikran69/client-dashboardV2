import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import kategori from '../assets/kategori.json'
import Card from "../component/card";

export default function Home(){

    const navigate = useNavigate();

    const [popUp, setPopup] = useState("bg-primary-blue h-24 w-screen flex justify-between min-w-[340px] fixed top-0 lef-0 z-20");
    const [benar, setBenar] = useState(true);    
    // benar artinya popUpnya tidak muncul 
    const popUpOnOff = (e)=>{
        const menu = document.getElementById('menu');
        menu.classList.toggle('max-md:hidden');
        menu.classList.toggle('max-md:grid');
        if(benar){
            setPopup("bg-primary-blue h-64 md:h-24 w-screen flex justify-between min-w-[340px] fixed top-0 lef-0 z-20");
            setBenar(false);
        }
        if(!benar){
            setPopup("bg-primary-blue h-24 w-screen flex justify-between min-w-[340px] fixed top-0 lef-0 z-20");
            setBenar(true);
        }
    }
    const popUpOff = ()=>{
        if(!benar) popUpOnOff();
    }
    
    const kamar = kategori;
    return(
        <div className="font-roboto h-screen">
            <div className={popUp}>
                <div className="text-4xl font-semibold text-primary-orange w-[25%] min-w-[200px] max-h-24 flex items-center justify-center">MYHOTEL</div>  
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
                    <div id='menu' className="h-16 w-fit md:w-[500px] uppercase text-white text-xs flex items-center justify-start gap-3 max-md:hidden md:text-sm max-md:absolute left-5 top-20">
                        <a onClick={popUpOnOff} href='' className="mr-8 hover:text-primary-orange">home</a>
                        <a onClick={popUpOnOff} href='' className="mr-8 hover:text-primary-orange">about</a>
                        <a onClick={popUpOnOff} href='' className="mr-8 hover:text-primary-orange">service</a>
                        <a onClick={popUpOnOff} href='#rooms' className="mr-8 hover:text-primary-orange">rooms</a>
                        <a onClick={popUpOnOff} href='' className="mr-8 hover:text-primary-orange">pages</a>
                        <a onClick={popUpOnOff} href='' className="mr-8 hover:text-primary-orange">contact</a>
                    </div>
                </div>     
                <button onClick={popUpOnOff} className="md:hidden mx-12 h-fit py-8">
                    <svg className="w-6 h-6 text-white hover:text-primary-orange" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>      
            </div>
            {/* bagian content disini  */}
            <div onClick={popUpOff} className="z-10 mt-24">
                <div id="rooms" className="m-4 p-4 flex justify-around flex-wrap">
                    {
                        kamar.map(({id, kategori, harga, gambar, aktif})=>{
                            return(
                                <div key={id}>
                                    <Card kategori={kategori} harga={harga} gambar={gambar} aktif={aktif} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}