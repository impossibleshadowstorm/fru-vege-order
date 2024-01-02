import React from "react";
import RLTRAnimatedBtn from "../common/btnComponent/rltr-animated-btn";

const CartTotal = () => {
  return (
    <div className="grid md:grid-cols-12 mt-20">
      <div className="col-span-8 "></div>
      <div className="col-span-4 w-100">
        <h4 className="mb-4 font-bold text-xl">Cart Totals</h4>

        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-black-500  bg-[#F7F8FA]">
            <thead class="text uppercase "></thead>
            <tbody>
              <tr class=" border-b ">
                <th scope="row" class="px-6 py-4  ">
                  Cart Subtotal
                </th>
                <td class="px-6 py-4">$618.00</td>
              </tr>
              <tr class=" border-b ">
                <th scope="row" class="px-6 py-4   ">
                  Shipping and Handing
                </th>
                <td class="px-6 py-4">$15.00</td>
              </tr>
              <tr class=" border-b ">
                <th scope="row" class="px-6 py-4   ">
                  Order Total
                </th>
                <td class="px-6 py-4 font-bold ">$15.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <RLTRAnimatedBtn
          handleClick={() => {
            window.location.href = "/checkout";
          }}
          name="Proceed To Checkout"
          customClass={" w-[100%] px-6 py-4 my-1"}
        />
      </div>
    </div>
  );
};

export default CartTotal;
