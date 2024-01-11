import React from "react";

const Orders = () => {
  return (
    <div className="w-[40vw]">
      <table className="w-[45vw] h-[25vh] text-center bg-tableBg text-textColorBlack border">
        <thead className="border-b-2 border-textColorBlack">
          <tr className="">
            <th>Order</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="" >
          <tr className="border-b">
            <td>1</td>
            <td>Jun 22, 2019</td>
            <td>Pending</td>
            <td>$3000</td>
            <td className="hover:text-otherTextColor">View</td>
          </tr>
          <tr className="border-b">
            <td>2</td>
            <td>Nov 22, 2019</td>
            <td>Approved</td>
            <td>$200</td>
            <td className="hover:text-otherTextColor">View</td>
          </tr>
          <tr className="border-b">
            <td>3</td>
            <td>Jan 12, 2020</td>
            <td>On Hold</td>
            <td>$990</td>
            <td className="hover:text-otherTextColor">View</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
