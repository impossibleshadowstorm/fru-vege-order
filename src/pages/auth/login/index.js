import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Footer from "../../../components/common/footer/footer";
import DeliveryMode from "../../../components/home/deliverymode/deliverymode";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  console.log(register().pattern);

  return (
    <>
      <div className=" w-[100%] container mx-auto my-20">
        <div className="container section-title mb-12 text-textColorBlack text-center  ">
          <h1 className=" text-5xl mb-5 font-bold">
            Sign In
            <br />
            To Your Account
          </h1>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Sit aliquid, Non distinctio vel iste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-textColorBlack">
          <div className=" w-100% ">
            <form onSubmit={handleSubmit(onSubmit)} className="p-10  ">
              <input
                type="text"
                placeholder="Email"
                {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className="px-5 h-14 w-full border-solid border mb-8 outline-1 outline-greenBorder"
              />

              <input
                type="password"
                placeholder="password"
                {...register("Password", {
                  required: true,
                  pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
                })}
                className="px-5 h-14 w-full border-solid border-2 mb-8"
              />

              <motion.button
                type="submit"
                initial={{ opacity: 0, backgroundColor: "" }}
                animate={{ y: 0.5, opacity: 1 }}
                transition={{
                  scale: { type: "spring", stiffness: 300 },
                  duration: 1.5,
                }}
                className={`relative bg-otherHeaderBg border py-2.5 px-3 font-medium text-textColorWhite transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-headerCtaButtonBg before:transition-transform before:duration-300 before:content-[''] hover:text-white hover:border hover:border-transparent before:hover:scale-x-100  w-full`}
              >
                SIGN IN
              </motion.button>
            </form>
            <div className="text-center">
              <p>
                <a href="/" className="hover:text-[blue] mb-5">
                  FORGOTTEN YOUR PASSWORD?
                </a>
              </p>
            </div>
          </div>

          <div className=" text-center pt-12">
            <h1 className="font-bold mb-3 text-xl">DON'T HAVE AN ACCOUNT?</h1>
            <p className="mb-8">
              Add items to your wishlistget personalised recommendations
              <br />
              check out more quickly track your orders register
            </p>
            <motion.button
              type="submit"
              initial={{ opacity: 0, backgroundColor: "" }}
              animate={{ y: 0.5, opacity: 1 }}
              transition={{
                scale: { type: "spring", stiffness: 300 },
                duration: 1.5,
              }}
              className={`relative bg-otherHeaderBg border py-2.5 px-3 font-medium text-textColorWhite transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-headerCtaButtonBg before:transition-transform before:duration-300 before:content-[''] hover:text-white hover:border hover:border-transparent before:hover:scale-x-100 w-3/6 `}
            >
              SIGN IN
            </motion.button>
          </div>
        </div>
      </div>
      <DeliveryMode />
      <Footer />
    </>
  );
};

export default Login;
