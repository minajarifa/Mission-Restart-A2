export default function Resolved({ resolved }) {
  console.log(resolved);
  return (
    <div>
      {resolved.map((resolve) => (
        <h2 key={resolve.id} className="text-2xl card-title card-body">
          {resolve?.title}
        </h2>
      ))}
    </div>
  );
}
