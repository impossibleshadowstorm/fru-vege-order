import React from "react";
// import motion from 'framer-motion';


// const count = useMotionValue(0)
// const rounded = useTransform(count, latest => Math.round(latest))

// useEffect(() => {
//   const controls = animate(count, 100)

//   return controls.stop
// }, [])

// return <motion.div>{rounded}</motion.div>

const CounterUpArea = () => {
  return (
    <div className="md:h-[76vh] h-[100vh] md:px-0 mt-44 md">
      <div
        className="md:bg-cover md:bg-center h-[60vh] flex justify-center items-center"
        style={{
          backgroundImage: "url('/images/home/category/thirdsection-img.jpg')",
        }}
        >
        
        <div className="flex flex-row justify-between w-[63vw] items-center ">
            <div className="flex flex-col itmes-center justify-center">
                <div className="flex justify-center"><img src="/images/home/category/5thsection/active-client.png" alt="active-client" /></div>
                <div className="text-white text-[50px] font-bold text-center">733<span className="text-[30px] pl-[-20px]">+</span></div>
                <div className="text-white text-[17px] text-center font-semibold">Active Client</div>
            </div>
            <div className="flex flex-col itmes-center justify-center">
                <div className="flex justify-center"><img src="/images/home/category/5thsection/cup-of-coffee.png" alt="active-client" /></div>
                <div className="text-white text-[50px] font-bold text-center">33K<span className="text-[30px] pl-[-20px]">+</span></div>
                <div className="text-white text-[17px] text-center font-semibold">Cup Of Coffee</div>
            </div>
            <div className="flex flex-col itmes-center justify-center">
                <div className="flex justify-center"><img src="/images/home/category/5thsection/get-rewords.png" alt="active-client" /></div>
                <div className="text-white text-[50px] font-bold text-center">100<span className="text-[30px] pl-[-20px]">+</span></div>
                <div className="text-white text-[17px] text-center font-semibold">Get Rewords</div>
            </div>
            <div className="flex flex-col itmes-center justify-center">
                <div className="flex justify-center"><img src="/images/home/category/5thsection/country-cover.png" alt="active-client" /></div>
                <div className="text-white text-[50px] font-bold text-center">21<span className="text-[30px] pl-[-20px]">+</span></div>
                <div className="text-white text-[17px] text-center font-semibold">Country Cover</div>
            </div>
        </div>

     </div>
    </div>
  );
};

export default CounterUpArea;
