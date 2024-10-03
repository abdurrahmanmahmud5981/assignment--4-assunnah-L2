/* eslint-disable react/prop-types */
const Navber = ({search,handleSearch,sortA_to_Z}) => {
  console.log(sortA_to_Z());
  return (
    <>
      <div className=" shadow-lg bg-secondary max-w-screen-xl mx-auto ">
        <div className=" navbar  py-3 shadow-lg fixed w-full z-20 top-0 start-0 backdrop-filter backdrop-blur-3xl ">
          <div className="flex-1">
            <a className="text-xl font-bold text-primary">Globle Gallery </a>
          </div>
          <div className=" gap-2">
            <div className="form-control">
              <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search"
                className="input input-bordered w-24 sm:w-auto bg-transparent text-primary placeholder:text-primary"
              />
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="">
                <button className="btn bg-primary text-secondary hover:bg-secondary hover:text-primary">
                  Sort By :
                </button>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2 font-semibold"
              >
                <li className="border rounded-lg">
                  <a  className="justify-between">
                    Country A to Z<span className="badge">New</span>
                  </a>
                </li>
                <li className="border rounded-lg">
                  <a>Country Z to A</a>
                </li>
                <li className="border rounded-lg">
                  <a>Country 0 to 9</a>
                </li>
                <li className="border rounded-lg">
                  <a>Country 9 to 0</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navber;
