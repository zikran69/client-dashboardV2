export default function ServiceCard({icon, title, subTitle}){
    const masukBoss = ()=>{
        document.getElementById('icon').classList.remove('text-primary-orange');
        document.getElementById('icon').classList.add('text-primary-white');
    }
    const balikBoss = ()=>{
        document.getElementById('icon').classList.add('text-primary-orange');
        document.getElementById('icon').classList.remove('text-primary-white');
    }

    return(
        <div onMouseEnter={masukBoss} onMouseLeave={balikBoss} className="font-roboto w-[350px] h-[350px] border lg:drop-shadow-2xl drop-shadow-xl bg-white m-4 px-8 grid gap-3 content-center text-center hover:bg-primary-orange duration-500 hover:text-white">
            <div className="flex justify-center">
                <div className="border border-solid border-zinc-200 w-fit h-fit p-1 rounded-sm">
                    <div className="border border-so w-fit h-fit p-2 rounded-sm"><i id="icon" className={icon}></i></div> 
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-between items-center capitalize font-semibold text-lg w-[160px]">
                    <span className="tracking-widest">{title}</span>
                    <span className="tracking-widest">&</span>
                    <span className="tracking-widest">{subTitle}</span>
                </div>
            </div>
                <p className="font-raleway">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
        </div>
    )
}