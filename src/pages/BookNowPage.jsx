import { useNavigate, useParams } from "react-router-dom";

const BookNowPage = () => {
  const Navigate = useNavigate();
  const param = useParams()["*"];
  const prevPage = window.location.pathname;
  const goBack = () => {
    if (prevPage.includes("ViewDetail")) {
      Navigate(-1);
    } else {
      Navigate("/home");
    }
  };

  return (
    <>
      <div className="bg-primary-blue min-h-screen text-primary-orange p-4">
        <div>
          <button onClick={goBack} className="text-xl font-semibold">
            <i className="fa fa-arrow-left"></i>
          </button>
          <h1 className="text-4xl font-semibold">book now</h1>
        </div>
        <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              name="kategory"
              value={param}
              readOnly
              className="outline-none border p-2 rounded-md w-full"
            />
            <select
              name="lantai"
              className="outline-none border p-2 rounded-md w-full mt-4"
            >
              <option>1</option>
              <option>2</option>
            </select>
            <input
              type="text"
              placeholder="no kamar"
              name="noKamar"
              className="outline-none border p-2 rounded-md w-full mt-4"
            />
            <input
              type="text"
              placeholder="harga kamar"
              name="hargaKamar"
              className="outline-none border p-2 rounded-md w-full mt-4"
            />
            <div>
              <label
                htmlFor="tanggalCheckIn"
                className="mt-4 text-lg font-semibold"
              >
                Tanggal Check In
              </label>
              <input
                type="date"
                name="tanggalCheckIn"
                className="outline-none border p-2 rounded-md w-full"
              />
            </div>
            <input
              type="number"
              name="jmlHari"
              placeholder="Jumlah hari"
              className="outline-none border p-2 rounded-md w-full mt-4"
            />
          </div>
          <button
            onClick={() => {
              Navigate("/home");
            }}
            className="bg-primary-orange text-white p-2 rounded-md mt-4"
          >
            Book Now
          </button>
        </form>
      </div>
    </>
  );
};
export default BookNowPage;
