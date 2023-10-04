import React from "react";
import Header from "../file-bahe/header";
import Footer from "../component/footer";

function Userpage() {
  return (
    <>
      <Header />
      {/* main content */}
      <div className="p-2 m-2">
        <h1 className="font-bold">Welcome:</h1>
        <img
          className="w-[150px] h-[150px] rounded-full my-4 shadow-xl outline outline-offset-2"
          src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg"
        />
      </div>

      <Footer />
    </>
  );
}

export default Userpage;
