import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationCategory = ({ data }) => {
  const { id, picture, category, description, price } =
    data;
  let bgColor = {
    backgroundColor: data.category_bg,
    color: data.card_bg,
  };

  return (
    <div style={bgColor} className={`rounded-lg shadow-lg cursor-pointer   `}>
      <Link to={`/donation/${id}`}>
        <img className="w-full" src={picture} alt={category} />
        <div className="p-3">
          <h2
            className=" inline-block py-[2px] px-3 rounded-sm text-white text-[14px]"
            style={bgColor}
          >
            {category}
          </h2>
          <p className="text-black  font-bold mt-2 ">$ {price}</p>
          <h1 className="  font-semibold text-[18px]">{description}</h1>
        </div>
      </Link>
    </div>
  );
};

DonationCategory.propTypes = {
  data: PropTypes.object,
};

export default DonationCategory;
