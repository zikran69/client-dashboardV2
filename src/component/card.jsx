import { useEffect, useState } from "react"

export default function Card({kategori, harga, gambar, aktif}){
    const [popUp, setPopUp] = useState();
    useEffect(()=>{
        if(aktif){
            setPopUp("lg:h-[570px] h-[550px] w-[340px] font-raleway border drop-shadow-xl bg-white m-4");
        }
        if(!aktif)setPopUp("h-[550px] w-[340px] font-raleway border drop-shadow-xl bg-white m-4");
    }, []);
    
    return(
        <div className={popUp}>
            <img src={gambar} className="h-[250px] w-[350px]"/>
            <div className='bg-primary-orange w-fit mt-[-12px] ml-4 px-4 text-center text-lg text-white absolute'>{harga}</div>
            <div className='px-4 mt-8'>
                <div className='flex items-center justify-between'>
                    <p className='font-roboto text-xl font-semibold'>{kategori}</p>
                    <p>
                        <small className="fa fa-star text-primary-orange text-lg mr-1"></small>
                        <small className="fa fa-star text-primary-orange text-lg mr-1"></small>
                        <small className="fa fa-star text-primary-orange text-lg mr-1"></small>
                        <small className="fa fa-star text-primary-orange text-lg mr-1"></small>
                        <small className="fa fa-star text-primary-orange text-lg mr-1"></small>
                    </p>
                </div>
                <div className='flex justify-between items-center py-4 text-zinc-600'>
                    <div className='flex justify-center items-center'>
                        <i className="fa fa-bed text-primary-orange text-lg"></i>
                        <p className='ml-1'>3 Bed</p>
                    </div>
                    |
                    <div className='flex justify-between items-center'>
                        <i className="fa fa-bath text-primary-orange text-lg"></i>
                        <p className='ml-1'>2 Bath</p>
                    </div>
                    |
                    <div className='flex justify-between items-center'>
                        <i className="fa fa-wifi text-primary-orange text-lg"></i>
                        <p className='ml-1'>Wifi</p>
                    </div>
                </div>
                <p className='text-zinc-600'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                <div className='uppercase font-semibold text-xl flex justify-center items-center py-6'>
                    <button className='uppercase w-[175px] bg-primary-orange text-white text-center py-1'>
                        <p>view</p>
                        <p>detail</p>
                    </button>
                    <button className='uppercase w-[175px] bg-primary-blue text-white text-center py-1'>
                        <p>book</p>
                        <p>now</p>
                    </button>
                </div>
            </div>
        </div>
    )
}