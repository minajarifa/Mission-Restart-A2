export default function Status({ progress ,handleAddResolved}) {
  return (
    <div>
      {progress.map((progres) => (
        <div
          key={progres?.id}
          className="my-10 bg-gray-100 shadow-sm card w-96"
        >
          <div className="text-center ">
            <h2 className="text-2xl card-title card-body">{progres?.title}</h2>
            <div className="card-actions">
              <button onClick={()=>handleAddResolved(progres)} className="w-full bg-green-700 btn btn-success">
               Complete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
