import React from "react";
import Container from "../../components/Shared/Container";

const Suport = () => {
  return (
    <Container className="my-40">
      <div className="mb-20">
        <h1 className=" text-center text-4xl font-bold tracking-widest mb-5">
          WELCOME TO PHONO SUPPORT. WE&apos;RE HERE TO HELP.
        </h1>
        <p className="text-xl text-stone-400 text-center tracking-widest">
          ALWAYS ON YOUR SIDE WHEN YOU NEED HELP
        </p>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="border-2 rounded-lg px-10 py-5 flex gap-10">
          <div>
            <img
              className="max-w-16"
              src="../../../public/phone-call.png"
              alt=""
            />
          </div>
          <div>
            <h5 className="tracking-widest">HAVE ANY DOUBTS?</h5>
            <h2 className="tracking-widest text-2xl font-semibold">
              CALL US NOW
            </h2>
            <p className="text-stone-400 text-lg">This Number is Toll Free</p>
            <p className="text-stone-400 text-lg">0000 - 123 - 456789</p>
            <div>
              <button className="mt-5 bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg transition">
                View More
              </button>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-lg px-10 py-5 flex gap-10">
          <div>
            <img className="max-w-16" src="../../../public/chat.png" alt="" />
          </div>
          <div className="">
            <h5 className="tracking-widest">HAVE ANY DOUBTS?</h5>
            <h2 className="tracking-widest text-2xl font-semibold">
              CALL US NOW
            </h2>
            <p className="text-stone-400 text-lg">
              Nullam quis ante. Etiam sit amet orci eget eros faucibus
              tincidunt. Duis leo.Lorem ipsum dolor
            </p>
            <div>
              <button className="mt-5 bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg transition">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Suport;
