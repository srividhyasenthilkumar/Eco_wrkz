import {
  Cctv,
  FingerprintPattern,
  ParkingMeter,
  Printer,
  Wifi,
} from "lucide-react";

export function OurServices() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h3 className="text-center text-4xl md:text-5xl font-bold mb-14">
        What do we offer?
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Service Card */}
        <div className="text-center">
          <div className="flex justify-center">
            <Cctv size={100} className="btn-primary rounded-full p-6 text-white" />
          </div>
          <p className="text-xl font-bold pt-6">24/7 CCTV CAMERA</p>
          <p className="py-3 text-gray-600">
            Ecowrkz provides high-end security and uninterrupted connectivity for
            protecting your business needs.
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center">
            <FingerprintPattern
              size={100}
              className="btn-primary rounded-full p-6 text-white"
            />
          </div>
          <p className="text-xl font-bold pt-6">BIOMETRIC</p>
          <p className="py-3 text-gray-600">
            Ecowrkz provides biometric entry for you to have a seamless entry into
            our space.
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center">
            <ParkingMeter
              size={100}
              className="btn-primary rounded-full p-6 text-white"
            />
          </div>
          <p className="text-xl font-bold pt-6">FREE PARKING</p>
          <p className="py-3 text-gray-600">
            Parking a vehicle in a safe place is such a hassle, well we offer a
            free parking space for your vehicle.
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center">
            <Wifi size={100} className="btn-primary rounded-full p-6 text-white" />
          </div>
          <p className="text-xl font-bold pt-6">HIGH-SPEED INTERNET</p>
          <p className="py-3 text-gray-600">
            Ecowrkz offers ultra-fast connectivity for all of your business needs.
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center">
            <Printer
              size={100}
              className="btn-primary rounded-full p-6 text-white"
            />
          </div>
          <p className="text-xl font-bold pt-6">PRINTER</p>
          <p className="py-3 text-gray-600">
            Ecowrkz offers the best amenities. Increase your productivity with us.
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center">
            <ParkingMeter
              size={100}
              className="btn-primary rounded-full p-6 text-white"
            />
          </div>
          <p className="text-xl font-bold pt-6">MEETING ROOM</p>
          <p className="py-3 text-gray-600">
            Book your meeting/conference room with us and experience the great
            ambience in Ecowrkz.
          </p>
        </div>
      </div>
    </section>
  );
}
