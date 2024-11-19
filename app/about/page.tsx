import { Github } from "lucide-react";
import Image from "next/image"
export default function About(){
    return(
        <div className="bg-black h-screen">
          <div className="text-white ">
           <h1 className=" font-bold text-5xl p-8 "> About  </h1 ></div>
          <div className="flex justify-between "><p className="text-xl  ml-10 text-white ">I am  passionate and skilled Front-End Developer
              with a strong foundation in HTML <br className="space-y-2"></br>{","} CSS
          Javascript {","} Typescript and modern frameworks like  React and Next.js.<br/> 
          With experience using Bootstrap and
          Tailwind CSS .I build responsive  <br/>user-friendly web interfaces that
           deliver great user experiences.Currently <br/>I am focused on expending my
            expertise in interactive{","} accessible design and <br/>
          continually refining my skills and continually refining my skills in Javascript frameworks.</p>
             <img src="./profile.jpg" alt="Ramiz shamis" className="w-40 mr-20  rounded-full"/>             
          </div> 
          <div>
            <h1 className="text-white font-extrabold text-5xl ml-6 ">Skills</h1></div>
              <div className="flex  gap-5 ml-6  ">
           <img src="./html.png" alt="Html log" className="h-20 w-20 rounded-50 "/>
           <img src="./css.png" alt="css log"  className="h-20 w-20 "/>
           <img src="./j.png" alt="js logo" className="h-20 w-20 "/>
           <img src="./js.png" alt="ts logo" className="h-20 w-20 "/>
           <img src="./boot.png" alt="bootstap logo" className="h-20 w-20 "/></div>
           <div className="flex  gap-5 ml-6 "><img src="./react.png" alt="react logo" className="h-20 w-20 "/>
           <img src="./next.png" alt="next logo" className="h-20 w-20 "/>
           <img src="python.png" alt="python logo" className="h-20 w-20 "/>
           <img src="tailwind.png" alt="tailwind logo" className="h-20 w-20 "/>
           <img src="git.png" alt="git logo" className="h-20 w-20 "/>
           </div>
           
        </div>
    );
};