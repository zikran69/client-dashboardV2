import dataJs from '../test.json'

export default function Api(){
    const data = dataJs;

    return(
        <div>
            {
                data.map(({id, image, title})=>{
                    return(
                        <div key={id}>
                            <div>{title}</div>
                            <img src={image} className="h-40 w-80" />
                        </div>
                    )
                })
            }
        </div>
    )
}