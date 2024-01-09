import React from "react";

const CartTotal = () => {
  return (
    <div className="grid md:grid-cols-12">
      <div className="col-span-4"></div>
      <div className="col-span-8 w-100%">
        <h4 className="mb-[30px] font-bold text-3xl">Cart Totals</h4>

        <div className="relative overflow-x-auto ">
          <table className="w-full text-md text-left rtl:text-right bg-[#F7F8FA]">
            <thead className=""></thead>
            <tbody>
              <tr className="border-b ">
                <th scope="row" className="pl-6 pr-[110px] py-5">
                  <span className="font-medium">Vegetables Juices</span> × 2
                </th>
                <td className="px-6 py-4">$298.00</td>
              </tr>
              <tr className="border-b">
                <th scope="row" className="px-6 py-4">
                  <span className="font-medium">Orange Sliced Mix</span> × 2
                </th>
                <td className="px-6 py-4">$170.00</td>
              </tr>
              <tr className="border-b">
                <th scope="row" className="px-6 py-4">
                  <span className="font-medium">Red Hot Tomato</span> × 2
                </th>
                <td class="px-6 py-4">$170.00</td>
              </tr>
              <tr className="border-b">
                <th scope="row" className="px-6 py-4">
                  <span className="font-medium">Shipping and Handing</span>
                </th>
                <td className="px-6 py-4">$15.00</td>
              </tr>
              <tr className="border-b">
                <th scope="row" className="px-6 py-4">
                  <span className="font-medium">Vat</span>
                </th>
                <td className="px-6 py-4">$00.00</td>
              </tr>
              <tr className="border-b">
                <th scope="row" className="px-6 py-4">
                  Order Total
                </th>
                <td className="px-6 py-4 font-bold ">$633.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
