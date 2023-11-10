import { useLoaderData, useParams } from "react-router-dom";

const DonationDetail = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation_data = useLoaderData();
  const donate = donation_data.find((data) => data.id === idInt);
  console.log(donate);
  const { picture, price, description, description_details } = donate;
  return (
    <div className="relative lg:container mx-auto p-5">
      <img
        className="w-full object-cover h-[500px] rounded-lg"
        src={picture}
        alt=""
      />

      <div className="absolute top-[450px]   left-10">
        <button className=" bg-red-700 py-3 px-5 rounded-lg text-white">
          Donate ${price}
        </button>
      </div>

      <h1 className="mt-10 mb-6 text-2xl font-bold">{description}</h1>
      <p className="text-[16px] text-[#0B0B0BB2]">{description_details}</p>
    </div>
  );
};

export default DonationDetail;
