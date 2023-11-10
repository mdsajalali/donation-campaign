import { Cell, Pie, PieChart } from "recharts";

const Statistics = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 500 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#FF444A", "#00C49F", "#0088FE", "#FFBB28"];

  return (
    <div className="lg:container flex items-center justify-center min-h-[80vh] mx-auto p-5">
      <PieChart width={380} className="mx-auto" height={380}>
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
    </div>
  );
};

export default Statistics;
