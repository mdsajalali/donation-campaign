import { useEffect, useState } from "react";
import Donation from "../components/Donation";

const Donations = () => {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div className="lg:container mx-auto p-5">
      <div className="grid grid-cols-1    place-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-2 gap-10 my-10 px-5">
        {data.slice(0, showData).map((data) => (
          <Donation key={data.id} data={data} />
        ))}
      </div>
      <div
        style={{ textAlign: "center" }}
        className={showData === data.length && "hidden"}
      >
        <button
          onClick={() => setShowData(data.length)}
          className="bg-[#009444]   py-2 px-4 rounded-lg text-white font-semibold mx-auto"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default Donations;
