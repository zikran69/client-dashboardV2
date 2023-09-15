export default function ServiceCard(){
    const hoverBoss = ()=>{

    }
    return(
        <div className="">
            <div onMouseEnter={hoverBoss} className="font-roboto w-[350px] h-[350px] border lg:drop-shadow-2xl drop-shadow-xl bg-white m-4 grid content-center">
                <div className="border border-primary-gray w-fit h-fit p-1 rounded-sm">
                    <div className="border border-primary-gray w-fit h-fit p-2 rounded-sm"><i class="fa fa-swimmer fa-2x text-primary-orange"></i></div> 
                </div>
                <div className="flex justify-between items-center capitalize font-semibold w-[140px]">
                    <span className="tracking-widest">sport</span>
                    <span className="tracking-widest">&</span>
                    <span className="tracking-widest">gaming</span>
                </div>
                <p className="font-raleway">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
            </div>
        </div>
    )
}