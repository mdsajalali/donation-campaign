import { Cell, Pie, PieChart } from "recharts";

const Statistics = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 700 },
  
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  return (
    <div className="lg:container flex flex-col items-center justify-center min-h-[80vh] mx-auto p-5">
      <PieChart width={350} className="mx-auto" height={350}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          fill="#8884d8"
          dataKey="value"
          label={80}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <div className="flex gap-5 flex-wrap items-center justify-center text-2xl">
        <p>
          Your Donation : <span className="font-bold">33.3%</span>
        </p>
        <p>
          Total Donation: <span className="font-bold">66.7%</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Statistics;
