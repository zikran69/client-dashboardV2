import { Link } from "react-router-dom";
import kategori from '../assets/kategori.json'
import Header from "../component/header";
import Card from "../component/card";

export default function Home(){
    const kamar = kategori;
    return(
        <div className="font-roboto h-screen">
            <Header />
            <div className="m-4 p-4 flex justify-around flex-wrap">
                {
                    kamar.map(({id, kategori, harga, gambar, status})=>{
                        return(
                            <div key={id}>
                                <Card kategori={kategori} harga={harga} gambar={gambar} status={status} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}