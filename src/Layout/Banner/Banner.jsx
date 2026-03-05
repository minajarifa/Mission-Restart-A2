// export default function Banner() {
//   return (
//     <div>
//       <div
//         className="min-h-screen hero"
//         style={{
//           backgroundImage:
//             "url(https://i.ibb.co.com/qQ5Gcrw/vector1.png)",
//         }}
//       >
//         <div className="hero-overlay"></div>
//         <div className="text-center hero-content text-neutral-content">
//           <div className="max-w-md">
//             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//             <p className="mb-5">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//               excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//               et a id nisi.
//             </p>
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Banner() {
  return (
    <div className="md:flex ">
      <div>
        {/* <img src="/public/vector1.png" alt="" className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] "/> */}
       <div  className="flex bg-gradient-to-r from-[#632EE3] to-[#9F62F2] gap-5">
         <img src="/public/vector1.png" alt="" className="" />
        <img
          src="/public/vector1.png"
          alt=""
          className=" transform scale-x-[-1]"
        />
       </div>
        <h1 className="absolute font-bold -top-0 ">
        {/* <h1 className="absolute font-bold left-5 top-10"> */}
          Hello World
        </h1>
      </div>
      <div className="bg-gradient-to-r from-[#54CF68] to-[#00827A] flex">
        <img src="/public/vector1.png" alt="" className="" />
        <img
          src="/public/vector1.png"
          alt=""
          className=" transform scale-x-[-1]"
        />
      </div>
    </div>
  );
}
