import { useNavigate } from "react-router-dom";
import { MdOutlineDoubleArrow } from "react-icons/md";
export const StaffsBigCard = ({ staff }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/staff-details/${id}`);
  };
  return (
    <div className="text-white">
      <div
        key={staff.id}
        className="bg-white shadow-md m-2 rounded-lg p-4 bg-gradient-to-r from-pink-500 via-amber-500 to-purple-500  animate-border hover:shadow-lg"
      >
        <div className="md:flex">
          <img
            src={staff.img}
            alt={staff.name}
            className="w-24 h-24 rounded-full mx-auto md:m-1 object-cover"
          />
          <div className="p-1 md:ml-3 text-stone-100">
            <h2 className="text-xl font-bold">{staff.name}</h2>
            <p className=" font-bold">{staff.experience}</p>
            <p className="">{staff.location}</p>
            <p className="">{staff.rate}</p>
          </div>
        </div>

        <div className="md:p-2 p-1">
          <h2 className="text-stone-200 line-clamp-3 text-left">
            {staff.description}
          </h2>
        </div>
        <div className="flex flex-wrap  items-center text-xs h-32 lg:h-20 overflow-hidden">
          {staff.service.length > 3 ? (
            <>
              {staff.service.slice(0, 3).map((srv, index) => (
                <p className="border rounded-md px-3 m-1 py-1" key={index}>
                  {srv}
                </p>
              ))}
              <p className="border rounded-md px-3 py-1">
                +{staff.service.length - 3} more
              </p>
            </>
          ) : (
            staff.service.map((srv, index) => (
              <p className="border rounded-md px-3 py-1" key={index}>
                {srv}
              </p>
            ))
          )}
        </div>
        <button
          onClick={() => handleClick(staff.id)}
          type="button"
          className="text-stone-100 mt-3 px-3 py-2 rounded-lg  bg-amber-500  hover:text-stone-50 hover:font-bold transition-colors"
        >
          see profile
          <MdOutlineDoubleArrow className="inline-block" />
        </button>
      </div>
    </div>
  );
};
