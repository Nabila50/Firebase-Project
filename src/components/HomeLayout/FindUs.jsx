import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find us on </h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 justify-start join-item"><FaFacebook></FaFacebook> facebook</button>
          <button className="btn bg-base-100 justify-start join-item"><FaTwitter></FaTwitter> Twitter</button>
          <button className="btn bg-base-100 justify-start join-item"><FaInstagram></FaInstagram> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
