import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./index.css";

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

const PieChartSection = ({ pieChartData = [] }) => {
  return (
    <div className="chart-box">

      <h2 className="chart-title">📊 Difficulty Distribution</h2>

      {pieChartData.length === 0 ? (
        <p className="no-data">No chart data available</p>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>

            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}

    </div>
  );
};

export default PieChartSection;