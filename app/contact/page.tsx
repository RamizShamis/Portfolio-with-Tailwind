  
import { Linkedin, Mail, Phone ,Github } from "lucide-react";

export default function Contact(){
    return(
        <div className="bg-black min-h-screen full max-w-screen-2xl">
            <div className="bg-blue-500 p-4 rounded-full item-center ">
            <h1 className="text-center text-black font-extrabold text-2xl" >Contact me</h1>
            </div>
            <div className="flex justify-center items-center h-60 mt-20 space-x-20  ">
            <div>
            <Phone className=" rounded-[30px]  p-4 m-4 bg-green-500 text-" size={100}/> 
            <h1 className="text-2xl text-blue-500">+92334-0531264</h1></div>
            <div className=""> 
            <Mail className="rounded-[30px] p-4 m-4 bg-green-500 " size={100}  />
            <h1 className="text-xl text-blue-500 ">
                ramizshamis455@gmail.com</h1>
                </div>
               
                <div>
                <Linkedin color="#2c21c4"   strokeWidth={1.75}
                 className="rounded-[30px] p-4 m-4 bg-green-500" size={100}/>
                <h1 className="text-2xl text-blue-500"> Ramiz Shamis</h1>  </div>
                <div className="" >
            <a href="https://github.com/RamizShamis  " className="rounded-[30px] p-4 m-4 " > <Github color="#5e288a" className=" h-20 w-20  "  /> </a>
            <h1 className="text-2xl text-blue-500"> Ramiz Shamis</h1> 
                </div>
            </div>
        </div>
    )
}