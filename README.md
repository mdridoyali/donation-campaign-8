# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell, renderCustomizedLabel } from "recharts";

const Statistics = () => {
  const [donateItems, setDonateItems] = useState([]);

  useEffect(() => {
    const storedDonations = JSON.parse(localStorage.getItem("donation"));
    if (storedDonations) {
      setDonateItems(storedDonations);
    }
  }, []);

  const calDonationPercentage = () => {
    if (donateItems.length === 0) {
      return 0;
    }
    const percentage = (donateItems.length / 12) * 100;
    return percentage;
  };

  const remainingPercentage = 100 - calDonationPercentage();
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-xl font-bold ">Donation Chart</h2>
     <div>
     <PieChart width={600} height={400}>
        {/* <Pie
          dataKey="value"
          isAnimationActive={false}
          data={[
            { name: "Donations", value: calDonationPercentage() },
            { name: "Remaining", value: remainingPercentage },
          ]}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        /> */}
        <Pie
            data={[
            { name: "Donations", value: calDonationPercentage() },
            { name: "Remaining", value: remainingPercentage },
          ]}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
          </Pie>
        <Cell key="Donations" fill="#008000" />
        <Cell key="Remaining" fill="#FF0000" />
        <Tooltip />
      </PieChart>
     </div>
      <div className="flex gap-x-5">
        <div className="flex gap-2 items-center"><p className="font-semibold ">Your Donation</p> <div className="h-2 w-12 bg-red-600"></div> </div>
        <div className="flex gap-2 items-center"><p className="font-semibold ">Total Donation</p> <div className="h-2 w-12 bg-green-600"></div> </div>
      </div>
    </div>
  );
};

export default Statistics;
