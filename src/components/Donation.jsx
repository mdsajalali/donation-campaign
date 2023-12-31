import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Donation = ({ data }) => {
  const { id, picture, category, description, price } =
    data;

  let bgColor = {
    backgroundColor: data.category_bg,
    color: data.card_bg,
  };
  return (
    <div
      style={bgColor}
      className="flex flex-wrap rounded-lg juc  2xl:w-[650px]  w-[250px]  items-center gap-5  border"
    >
      <div>
        <img className="rounded-lg w-[350px]" src={picture} alt={category} />
      </div>
      <div className="px-5 mb-5">
        <h2
          className=" inline-block py-[2px] px-3 rounded-sm text-white text-[14px]"
          style={bgColor}
        >
          {category}
        </h2>
        <h1 className="text-black font-bold text-[18px] mt-2">{description}</h1>
        <p className="font-semibold">${price}</p>
        <Link to={`/donation/${id}`}>
          <button style={bgColor} className="py-2 px-3 rounded-sm mt-3">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

Donation.propTypes = {
  data: PropTypes.object,
};

export default Donation;
