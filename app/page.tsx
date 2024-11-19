import Image from "next/image";

export default function Home() {
  return (
    <div  className="bg-black max-h-screen-2xl max-w-screen-2xl">
      <div className=" absolute top-1/3  space-y-5 text-white  ml-4" >
      <h2 className="text-white ">web developer</h2>
      <h1 className="font-extrabold  text-6xl  "> Hi! I am Ramiz  </h1>
      <p className="font-bold  text-xl ">   
         a passionate frontend developer with  expertise in HTML<br></br>{","} CSS {","}
        JavaScipt {","} TypeScript {","} Next.js {","} react.js {","} Tailwind css {","}<br></br> Python {","}Git.I specialize in   
        creating responsive modern and user-friendly websites. </p>
      </div>
      <div className="flex justify-center items-center h-screen " >
      <img src="abc.jpg" className="w-64 h-70 object-cover absolute right-20 mb-20  rounded-full"></img>
      </div>
     
    </div>
  );
};