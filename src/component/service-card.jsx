import { useEffect, useState } from "react";

export default function ServiceCard({icon, title, subTitle}){
    // const masukBoss = ()=>{
    //     document.getElementById('icon').classList.remove('text-primary-orange');
    //     document.getElementById('icon').classList.add('text-white');
    // }
    // const balikBoss = ()=>{
        const [i, setI] = useState()
        useEffect(()=>{
            setI(document.getElementsByClassName('font-roboto max-w-[350px] h-[350px] border lg:drop-shadow-2xl drop-shadow-xl bg-white m-4 px-8 grid gap-3 content-center text-center hover:bg-primary-orange duration-500 hover:text-white'));
        }, [])
        
        const hover = (el)=>{
            el.addEventLister('mouseenter', (e)=>{
                e.classList.add('text-primary-orange');
                e.classList.remove('text-white');
            })
        }
        i.forEach(hover);
        console.log(i)

        // document.getElementById('title').classList.add('text-primary-orange');
        // document.getElementById('title').classList.remove('text-white');
    // }

    return(
        <div className="font-roboto max-w-[350px] h-[350px] border lg:drop-shadow-2xl drop-shadow-xl bg-white m-4 px-8 grid gap-3 content-center text-center hover:bg-primary-orange duration-500 hover:text-white">
            <div className="flex justify-center">
                <div className="border border-solid border-zinc-200 w-fit h-fit p-1 rounded-sm">
                    <div className="border border-so w-fit h-fit p-2 rounded-sm"><i className={icon}></i></div> 
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-between items-center capitalize font-semibold text-lg w-[180px]">
                    <span className="tracking-widest">{title}</span>
                    <span className="tracking-widest">&</span>
                    <span className="tracking-widest">{subTitle}</span>
                </div>
            </div>
                <p className="font-raleway">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
        </div>
    )
}