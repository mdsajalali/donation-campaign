import { useEffect, useState } from "react";
import DonationCard from "../components/DonationCard";

const DonationCards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("data.json");
      const data = await res.json();
      setData(data);
      setLoading(false);
      console.log(data);
    };
    fetchData();
  }, []);

  if (loading) <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-20 gap-10 ">
      {data.map((data) => (
        <DonationCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default DonationCards;
