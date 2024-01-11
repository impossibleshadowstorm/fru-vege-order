import React from "react";

const Downloads = () => {
  return (
    <div>
      <table className="w-[45vw] h-[25vh] text-center bg-tableBg text-textColorBlack border">
        <thead className="border-b-2 border-textColorBlack">
          <tr className="">
            <th>Product</th>
            <th>Date</th>
            <th>Expire</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="border-b">
            <td>Carsafe - Car Service PSD Template</td>
            <td>Jun 22, 2019</td>
            <td>yes</td>
            <td className="hover:text-otherTextColor">Download File</td>
          </tr>
          <tr className="border-b">
            <td>Carsafe - Car Service HTML Template</td>
            <td>Nov 22, 2019</td>
            <td>yes</td>
            <td className="hover:text-otherTextColor">Download File</td>
          </tr>
          <tr className="border-b">
            <td>Carsafe - Car Service WordPress Theme</td>
            <td>Jan 12, 2020</td>
            <td>yes</td>
            <td className="hover:text-otherTextColor">Download File</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Downloads;
