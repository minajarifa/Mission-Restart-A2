export default function Banner({progress,resolved}) {
  return (
    <div className="justify-center lg:flex">
      <div className="flex bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-2xl m-10">
        <img src="/vector1.png" alt="" className="" />
        <div className="mt-20 text-center text-white">
          <h1 className="font-bold ">In-Progress</h1>
          <h1 className="text-3xl">{progress?.length}</h1>
        </div>
        <img
          src="/vector1.png"
          alt=""
          className=" transform scale-x-[-1] "
        />
      </div>
      <div className="bg-gradient-to-r from-[#54CF68] to-[#00827A] flex rounded-2xl m-10">
        <img src="/vector1.png" alt="" className="" />
        <div className="mt-20 text-center text-white">
          <h1 className="font-bold">Resolved</h1>
          <h1 className="text-3xl">{resolved?.length}</h1>
        </div>
        <img
          src="/vector1.png"
          alt=""
          className=" transform scale-x-[-1]"
        />
      </div>
    </div>
  );
}
