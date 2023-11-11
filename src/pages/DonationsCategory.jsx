import { useEffect, useState } from "react";
import Donation from "../components/DonationCategory";

const DonationsCategory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16 mt-10 gap-10 ">
      {data.map((data) => (
        <Donation key={data.id} data={data} />
      ))}
    </div>
  );
};

export default DonationsCategory;
