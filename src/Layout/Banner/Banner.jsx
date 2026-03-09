export default function Banner({progress}) {
  return (
    <div className="justify-center lg:flex">
      <div className="flex bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-2xl m-10">
        <img src="/public/vector1.png" alt="" className="" />
        <div className="mt-20 text-center text-white">
          <h1 className="font-bold ">In-Progress</h1>
          <h1>{progress?.length}</h1>
        </div>
        <img
          src="/public/vector1.png"
          alt=""
          className=" transform scale-x-[-1] "
        />
      </div>
      <div className="bg-gradient-to-r from-[#54CF68] to-[#00827A] flex rounded-2xl m-10">
        <img src="/public/vector1.png" alt="" className="" />
        <div className="mt-20 text-center text-white">
          <h1 className="font-bold">Resolved</h1>
          <h1>0</h1>
        </div>
        <img
          src="/public/vector1.png"
          alt=""
          className=" transform scale-x-[-1]"
        />
      </div>
    </div>
  );
}
