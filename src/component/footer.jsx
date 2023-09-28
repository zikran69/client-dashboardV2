export default function Footer() {
  return (
    <div className="font-raleway text-white bg-primary-blue flex flex-wrap justify-start max-sm:grid">
      <div className="bg-primary-orange mx-6 w-[300px] h-fit px-4 py-6 rounded-sm mb-4 my-2 rounded-lg">
        <p className="text-4xl font-semibold mb-4">MYHOTEL</p>
        <div>
          <p>Temukan kembali, ketenangan</p>
          <p>Ini hidupmu.. Nikmati apa yang kamu mau</p>
          <p>Dunia baru, temukan itu</p>
          <p>Pertama, Anda mencintai … kemudian Anda hidup</p>
        </div>
      </div>
      <div className="mx-6 my-2">
        <div className="flex items-center mb-4">
          <p className="text-primary-orange mr-4">CONTACT</p>
          <div className="h-[1px] w-16 bg-primary-orange"></div>
        </div>
        <div className="flex items-center mb-2">
          <i className="fa fa-map-marker-alt me-3"></i>
          <p>Jl. Soekarno-Hatta 2023 Yogyakarta, Indonesia</p>
        </div>
        <div className="flex items-center mb-2">
          <i className="fa fa-phone-alt me-3"></i>
          <p>+6274 5432 9876</p>
        </div>
        <div className="flex items-center mb-2">
          <i className="fa fa-envelope me-3"></i>
          <p>info@myhotel.yogya.com</p>
        </div>
      </div>
      <div className="mx-6 my-2">
        <div className="flex items-center mb-4">
          <p className="text-primary-orange mr-4">COMPANY</p>
          <div className="h-[1px] w-16 bg-primary-orange"></div>
        </div>
        <p className="mb-2">
          <a href="#about">About Us</a>
        </p>
        <p className="mb-2">
          <a href="">Privacy Policy</a>
        </p>
        <p className="mb-2">
          <a href="#about">Terns & Condition</a>
        </p>
        <p className="mb-2">
          <a href="#about">Suport</a>
        </p>
      </div>
      <div className="mx-6 my-2">
        <div className="flex items-center mb-4">
          <p className="text-primary-orange mr-4">SERVICES</p>
          <div className="h-[1px] w-16 bg-primary-orange"></div>
        </div>
        <p className="mb-2">Food & Resttaurant</p>
        <p className="mb-2">Spa & Fitness</p>
        <p className="mb-2">Sports & Gaming</p>
        <p className="mb-2">Event & Party</p>
        <p className="mb-2">Gym & Yoga</p>
      </div>
    </div>
  );
}
