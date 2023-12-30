import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Footer from "../../../components/common/footer/footer";

const Register = () => {
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
        <div className="container section-title mb-12  text-center  ">
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

        <div className="center flex items-center justify-center">
          <div className=" w-3/6   ">
            <form onSubmit={handleSubmit(onSubmit)} className="p-10  ">
              <input
                type="text"
                placeholder="First name"
                {...register("First Name", { required: true, maxLength: 80 })}
                className="px-5 h-14 w-full border-solid border-2 mb-8"
              />
              <br />
              <input
                type="text"
                placeholder="Last name"
                {...register("Last name", { required: true, maxLength: 100 })}
                className="px-5 h-14 w-full border-solid border-2 mb-8"
              />
              <input
                type="text"
                placeholder="Email"
                {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className="px-5 h-14 w-full border-solid border-2 mb-8 border-textColor"
              />
              <input
                type="tel"
                placeholder="Mobile number"
                {...register("Mobile number", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
                className="px-5 h-14 w-full border-solid border-2 mb-8"
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
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("ConfirmPassword", {
                  required: true,
                  pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
                })}
                className="px-5 h-14 w-full border-solid border-2 mb-8"
              />

              <div className="radio-one w-full">
                <input
                  {...register("Developer", { required: true })}
                  type="radio"
                  value="yes."
                  className=" border-2 mb-8 text-black leading-none "
                />
                <label>
                  I consent to Herboil processing my personal data in order to
                  send personalized marketing material in accordance with the
                  consent form and the privacy policy
                </label>
              </div>
              <div className="radio-one w-full mb-5">
                <input
                  {...register("Developer", { required: true })}
                  type="radio"
                  value="No"
                />
                <label>
                  By clicking "create account", I consent to the privacy policy.
                </label>
              </div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, backgroundColor: "" }}
                animate={{ y: 0.5, opacity: 1 }}
                transition={{
                  scale: { type: "spring", stiffness: 300 },
                  duration: 1.5,
                }}
                className={`relative bg-black border py-2.5 px-3 font-medium text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-headerCtaButtonBg before:transition-transform before:duration-300 before:content-[''] hover:text-white hover:border hover:border-transparent before:hover:scale-x-100  w-full`}
              >
                CREATE ACCOUNT
              </motion.button>
            </form>
            <div className="text-center">
              <p className="mb-5">By creating an account, you agree to our:</p>
              <p>
                <a href="/" className="hover:text-[blue] mb-5">
                  TERMS OF CONDITIONS | PRIVACY POLICY
                </a>
              </p>
              <p>
                <a href="/" className="hover:text-[blue] mt-50">
                  ALREADY HAVE AN ACCOUNT ?
                </a>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Footer />
    </>
  );
};

export default Register;
