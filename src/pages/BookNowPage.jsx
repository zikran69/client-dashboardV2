import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import SelectPayment from "../components/select-options/SelectPayment";
// import SelectPrice from "../components/select-options/SelectPrice";

import Header from "../component/header";
import Footer from "../component/footer";
import SelectRoom from "../component/select-options/SelectRoom";
import SelectCategory from "../component/select-options/SelectCategory";

const BookNowPage = () => {
  const [roomId, setRoomid] = useState("");
  const [idCategory, setCategory] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [day, setDay] = useState(0);
  // const [people, setPeople] = useState("");
  // const [statusPayment, setStatusPayment] = useState("");
  const [totalPayment, setTotalPayment] = useState(0);
  const [nikCustomer, setnikCustomer] = useState("");
  const [nameCustomer, setNamecustomer] = useState("");
  const [emailCustomer, setemailCustomer] = useState("");
  const [tlpnCustomer, settlpnCustomer] = useState("");
  const [addressCustomer, setaddressCustomer] = useState("");
  // const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      roomId,
      checkIn,
      checkOut,
      day,
      // people,
      // statusPayment,
      totalPayment,
      nikCustomer,
      nameCustomer,
      emailCustomer,
      tlpnCustomer,
      addressCustomer,
    };

    fetch("http://localhost:2000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => {
        if (res.ok) {
          alert("Saved successfully.");
          navigate("/home");
        } else {
          throw new Error("Failed to save.");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // useEffect(() => {
  //   setTotalPayment(day * price);
  // }, [price, day]);

  console.log(totalPayment);
  console.log(day);
  // console.log(price);

  // const param = useParams()["*"];
  const prevPage = window.location.pathname;
  const goBack = () => {
    if (prevPage.includes("ViewDetail")) {
      navigate(-1);
    } else {
      navigate("/home");
    }
  };

  return (
    <>
      <Header />
      <div className="lg:pt-[20px] lg:w-[700px] lg:h-[550px] lg:pb-[10px] lg:mb-5 justify-center items-center lg:pl-[450px]">
        <div className="bg-primary-blue w-[670px] lg:h-[530px] text-primary-orange pb-1 p-4  rounded-2xl">
          <div>
            <button onClick={goBack} className="text-xl font-semibold">
              <i className="fa fa-arrow-left"></i>
            </button>
            <h1 className="text-[25px] font-semibold">book now</h1>
          </div>
          <form className="mt-2" onSubmit={handlesubmit}>
            <div className="flex lg:flex-row gap-2">
              <select
                onChange={(e) => setCategory(e.target.value)}
                name="idCategory"
                id="category"
                required
                className="focus:outline-secondary-gray outline-secondary-gray p-2.5 rounded-full border border-gray-300 text-secondary-gray"
              >
                <option value="">--select category--</option>
                <SelectCategory />
              </select>
              <select
                type="text"
                placeholder="no kamar"
                onChange={(e) => setRoomid(e.target.value)}
                name="noKamar"
                className="outline-none border p-2 rounded-md w-[300px] "
              >
                <SelectRoom category={idCategory} floor={0} />
              </select>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="harga kamar"
                name="hargaKamar"
                className="outline-none border p-2 rounded-md w-[300px] mt-4"
              />
            </div>
            <div className="pt-4 ">
              <label
                htmlFor="tanggalCheckIn"
                className=" text-lg font-semibold pr-[200px]"
              >
                Tanggal Check In
              </label>
              <label
                htmlFor="tanggalCheckIn"
                className=" text-lg font-semibold"
              >
                Tanggal Check Out
              </label>
              <div className="flex lg:flex-row gap-2 pt-2 pb-2">
                <input
                  type="date"
                  name="tanggalCheckIn"
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="outline-none border p-2 rounded-md w-[300px]"
                />
                <input
                  onChange={(e) => setCheckOut(e.target.value)}
                  type="date"
                  name="tanggalCheckout"
                  className="outline-none border p-2 rounded-md w-[300px]"
                />
                <input
                  type="number"
                  name="jmlHari"
                  placeholder="day"
                  onChange={(e) => setDay(e.target.value)}
                  className="outline-none border p-2 rounded-md w-[100px]"
                />
              </div>
              <label
                htmlFor="Data Pemesan"
                className=" text-lg font-semibold mt-[10px]"
              >
                Data Pemesan
              </label>
              <div className="flex lg:flex-wrap gap-2 pt-2">
                <input
                  onChange={(e) => setNamecustomer(e.target.value)}
                  type="text"
                  name="Nama"
                  placeholder="Nama Anda"
                  className="outline-none border p-2 rounded-md w-[300px]"
                />
                <input
                  onChange={(e) => setnikCustomer(e.target.value)}
                  type="text"
                  name="NIK"
                  placeholder="NIK"
                  className="outline-none border p-2 rounded-md w-[300px]"
                />
                <input
                  onChange={(e) => settlpnCustomer(e.target.value)}
                  type="text"
                  name="No Telp"
                  placeholder="No Handphone"
                  className="outline-none border p-2 rounded-md w-[300px]"
                />
                <input
                  onChange={(e) => setemailCustomer(e.target.value)}
                  type="text"
                  name="Email"
                  placeholder="Email"
                  className="outline-none border p-2 rounded-md w-[300px]"
                />
                <input
                  onChange={(e) => setaddressCustomer(e.target.value)}
                  type="text"
                  name="Address"
                  placeholder="Address"
                  className="outline-none border p-2 rounded-md w-[300px]"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary-orange text-white p-2 rounded-md mt-2"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default BookNowPage;
