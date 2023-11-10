import { Link } from "react-router-dom";

const Donation  = ({ data }) => {
  const { id, picture, category, category_bg, card_bg, description, price } =
    data;
  // console.log(category_bg);

  return (
    <div className={`rounded-lg shadow-lg cursor-pointer `}>
      <Link to={`/donation/${id}`}>
        <img className="w-full" src={picture} alt={category} />
        <div className="p-3">
          <h2 className="bg-slate-400 inline-block py-[2px] px-3 rounded-sm text-white text-[14px]">
            {category}
          </h2>
          <p className="  font-bold mt-2 ">$ {price}</p>
          <h1 className="text-red-500 font-semibold text-[18px]">
            {description}
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Donation;
