import React from "react";

const TopSection = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[50vh]"
        style={{ backgroundImage: "url('/images/thirdsection-img.jpg')" }}
      >
        {/* <div className="flex justify-center items-center relative top-[6rem]"> */}
          <p className="text-[white] text-center text-6xl font-bold pt-14">Top Categories</p>
        {/* </div> */}
        <div className="flex flex-row justify-center gap-4 mt-7">
          <div className="w-[18vw] h-[39vh] bg-[white]">
            <div className="flex flex-col justify-center items-center">
                <img src="/images/3rd-sec-category-1.png" alt="" className="w-[7vw] h-[13vh]" />
                <p>Browse all</p>
                <p>[235 item]</p>
            </div>
          </div>
          <div className="w-[18vw] h-[39vh] bg-[white]">
            <div className="flex flex-col justify-center items-center">
                <img src="/images/3rdsec-category-2.png" alt="" className="w-[7vw] h-[13vh]" />
                <p>Vegetables</p>
                <p>[78 item]</p>
            </div>
          </div>
          <div className="w-[18vw] h-[39vh] bg-[white]">
            <div className="flex flex-col justify-center items-center">
                <img src="/images/3rdsec-category-3.png" alt="" className="w-[7vw] h-[13vh]" />
                <p>Fruits</p>
                <p>[45 item]</p>
            </div>
          </div>
          <div className="w-[18vw] h-[39vh] bg-[white]">
            <div className="flex flex-col justify-center items-center">
                <img src="/images/3rdsec-category-4.png" alt="" className="w-[7vw] h-[13vh]" />
                <p>Meat</p>
                <p>[15 item]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
