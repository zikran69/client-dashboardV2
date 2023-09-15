export default function ServiceCard({icon, title}){
    const hoverBoss = ()=>{

    }
    return(
        <div onMouseEnter={hoverBoss} className="font-roboto w-[350px] h-[350px] border lg:drop-shadow-2xl drop-shadow-xl bg-white m-4 px-8 grid gap-3 content-center text-center">
            <div className="flex justify-center">
                <div className="border border-solid border-zinc-200 w-fit h-fit p-1 rounded-sm">
                    <div className="border border-so w-fit h-fit p-2 rounded-sm"><i class="fa fa-swimmer fa-2x text-primary-orange"></i></div> 
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-between items-center capitalize font-semibold text-lg w-[160px]">
                    <span className="tracking-widest">sport</span>
                    <span className="tracking-widest">&</span>
                    <span className="tracking-widest">gaming</span>
                </div>
            </div>
                <p className="font-raleway">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
        </div>
    )
}