export default function Header() {
  return (
    <div className="">
      <div className="shadow-sm navbar bg-base-100">
        <div className=" navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex=""
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
            >
              <li className="font-bold">
                <a>Home</a>
              </li>
              <li className="font-bold">
                <a>FAQ</a>
              </li>
              <li className="font-bold">
                <a>Changelog</a>
              </li>
              <li className="font-bold">
                <a>Blog</a>
              </li>
              <li className="font-bold">
                <a>Download</a>
              </li>
              <li className="font-bold">
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="text-xl font-bold btn btn-ghost">
            CS <span className="mb-5">____</span>Ticket System
          </a>
        </div>
        {/* TODO */}
        <div className="hidden ml-32 navbar-end lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li className="font-bold">
              <a>Home</a>
            </li>
            <li className="font-bold">
              <a>FAQ</a>
            </li>
            <li className="font-bold">
              <a>Changelog</a>
            </li>
            <li className="font-bold">
              <a>Blog</a>
            </li>
            <li className="font-bold">
              <a>Download</a>
            </li>
            <li className="font-bold">
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="font-bold navbar-end">
          <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">+ New Ticket</a>
        </div>
      </div>
    </div>
  );
}
