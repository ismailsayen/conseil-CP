import "./chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart() {
    const data = [
        {
            name: "Jan",
            "Active User": 4000,
        },
        {
            name: "Feb",
            "Active User": 3000,
        },
        {
            name: "Mar",
            "Active User": 2000,
        },
        {
            name: "Apr",
            "Active User": 2780,
        },
        {
            name: "May",
            "Active User": 1890,
        },
        {
            name: "Jun",
            "Active User": 2390,
        },
        {
            name: "Jul",
            "Active User": 3490,
        },
        {
            name: "Agu",
            "Active User": 2000,
        },
        {
            name: "Sep",
            "Active User": 4500,
        },
        {
            name: "Oct",
            "Active User": 4200,
        },
        {
            name: "Nov",
            "Active User": 3490,
        },
        {
            name: "Dec",
            "Active User": 3490,
        },
    ];
    return (
        <>
            <div className="chart bg-white rounded-md my-5 w-full">
                <h3 className="chartTitle">L'analyse des commandes</h3>
                <ResponsiveContainer width="100%" aspect={3.5 / 1}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" stroke="#5550bd" />
                        <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
                        <Tooltip />
                        <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
                    </LineChart>
                </ResponsiveContainer>
                {/* <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>*/}
            </div>
        </>
    );
}
