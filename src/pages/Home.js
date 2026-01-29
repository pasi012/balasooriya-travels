import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";
import hero4 from "../assets/hero4.jpeg";
import hero5 from "../assets/hero5.jpeg";
import hero6 from "../assets/hero6.jpeg";
import hero7 from "../assets/hero7.jpeg";
import hero8 from "../assets/hero8.jpeg";
import hero9 from "../assets/hero9.jpeg";
import hero10 from "../assets/hero10.jpeg";

import bus from "../assets/bus.png";

import aboutTaxi from "../assets/hero2.jpeg";

import place1 from "../assets/place20.jpg";
import place2 from "../assets/place11.jpg";
import place3 from "../assets/place13.jpg";
import place4 from "../assets/place17.jpg";
import place5 from "../assets/place23.jpg";
import place6 from "../assets/place24.jpg";

import service1 from "../assets/travel-anywhere.jpg";
import service2 from "../assets/luxury-wedding-car.jpg";
import service3 from "../assets/airport-transfer.jpg";
import service4 from "../assets/sri-lanka-tour.jpg";
import service5 from "../assets/custom-tour.jpg";
import service6 from "../assets/rent-a-car.jpg";
import service7 from "../assets/vehicle-recovery.jpg";

function Home() {
  const navigate = useNavigate();

  const heroSlides = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9, hero10];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // 5s per slide

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full overflow-hidden h-[500px] sm:h-[600px] md:h-[700px] lg:min-h-screen"
      >
        {/* Slider Background */}
        <div className="absolute inset-0">
          {heroSlides.map((img, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 1.05,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div
          data-aos="fade-up"
          className="relative z-10 flex min-h-full flex-col items-center justify-center px-4 text-center text-white"
        >
          <h1 className="text-[30px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-normal md:leading-relaxed ">
            Sri Lanka Taxi Service <br />
            <span className="text-red-500 text-[30px] sm:text-4xl md:text-5xl lg:text-6xl leading-normal md:leading-relaxed lg:leading-loose">
              & In-Bound Tours
            </span>
          </h1>

          <p className="mb-6 max-w-[90%] text-[15px] sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-normal md:leading-relaxed lg:leading-loose">
            Ride with Convenience and Comfort through Balasooriya Travels
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/94767349312"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-black transition hover:bg-yellow-500"
            >
              📲 Book Now Whatsapp
            </a>

            <a
              href="tel:+94767349312"
              className="flex items-center justify-center gap-2 rounded-lg border border-yellow-400 px-5 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT US SECTION ================= */}
      <section className="w-full bg-white py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

            <div
              data-aos="fade-right"
              className="relative h-[450px] w-full overflow-hidden rounded-xl md:h-[500px]"
            >
              <img
                src={aboutTaxi}
                alt="Taxi Service"
                className="h-full w-full object-fill"
              />

              {/* Experience Badge */}
              <div className="absolute bottom-0 left-0 w-full bg-yellow-400 py-0 text-center">
                <h3 className="text-1xl font-extrabold text-black sm:text-2xl">
                  More Than 10 Years <br /> of Experience
                </h3>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div data-aos="fade-left">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-yellow-500">
                About Us
              </p>

              <h2 className="mb-6 text-3xl font-extrabold text-black sm:text-4xl">
                Driving Trust and <br /> Excellence
              </h2>

              <p className="mb-6 text-gray-700 leading-relaxed">
                Balasooriya Travels is one of the most popular, reliable, safe, and
                comfortable tourist taxi service companies in Sri Lanka. We offer
                high-quality, on-time taxi services and tours using a wide range of
                vehicles with professional, experienced drivers.
              </p>

              {/* FEATURES */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500">✔</span>
                  <span className="text-gray-700">
                    Reliable and punctual tour transport services
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-yellow-500">✔</span>
                  <span className="text-gray-700">
                    Airport transfers, city tours, day trips & tour packages
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-yellow-500">✔</span>
                  <span className="text-gray-700">
                    Logistics and freight transport services
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-yellow-500">✔</span>
                  <span className="text-gray-700">
                    Hassle-free hotel booking with competitive rates
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-yellow-500">✔</span>
                  <span className="text-gray-700">
                    24/7 professional customer support
                  </span>
                </li>
              </ul>

              {/* BUTTON */}
              <button
                onClick={() => navigate("/about")}
                className="mt-8 rounded-lg bg-black px-8 py-3 text-sm font-semibold text-red-500 transition hover:bg-gray-900"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WELCOME SERVICES SECTION ================= */}
      <section className="relative w-full bg-black py-20">
        <div className="absolute inset-0 bg-black/90" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-white">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-4">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-3">
              <p className="mb-3 text-sm uppercase tracking-widest text-gray-400">
                Welcome To
              </p>

              <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
                Balasooriya Travels
              </h2>

              <p className="mb-14 max-w-3xl text-gray-300">
                We are the leaders in providing an excellent service for travels &
                tours all around Sri Lanka.
              </p>

              <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

                <div data-aos="fade-up" className="text-center">
                  <img
                    src={service1}
                    className="mx-auto mb-6 h-44 w-44 rounded-full object-cover"
                    alt=""
                  />
                  <h3 className="mb-3 text-lg font-bold">
                    Travel Around in Sri Lanka
                  </h3>
                  <p className=" text-gray-400">
                    Although Sri Lanka is small in size travelling around the island
                    can be frustrating and time consuming.
                  </p>
                </div>

                <div data-aos="fade-up" data-aos-delay="150" className="text-center">
                  <img
                    src={service2}
                    className="mx-auto mb-6 h-44 w-44 rounded-full object-cover"
                    alt=""
                  />
                  <h3 className="mb-3 text-lg font-bold">
                    Luxury Wedding Cars
                  </h3>
                  <p className=" text-gray-400">
                    Luxury cars for weddings and special occasions ensuring smooth
                    and punctual transport.
                  </p>
                </div>

                <div data-aos="fade-up" data-aos-delay="300" className="text-center">
                  <img
                    src={service3}
                    className="mx-auto mb-6 h-44 w-44 rounded-full object-cover"
                    alt=""
                  />
                  <h3 className="mb-3 text-lg font-bold">
                    Airport Transfers
                  </h3>
                  <p className="text-gray-400">
                    Convenient airport pickup and drop services with best rates.
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT CONTACT CARD */}
            <div
              data-aos="fade-left"
              className="
                mx-auto flex h-[300px] w-[310px] max-w-sm
                flex-col justify-center
                rounded-xl bg-[#1a1a1a]
                p-8 text-m
                shadow-lg border border-white/10
                lg:mx-0
              "
            >
              <h3 className="mb-6 text-lg font-bold text-white">
                QUICK CONTACT (24/7)
              </h3>

              <ul className="space-y-4 text-gray-300">
                <li>📱 Mobile: +94 76 734 9312</li>
                <li>✉️ balasooriyatravels@gmail.com</li>
                <li>🌐 www.balasooriyatravels.com</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES SECTION ================= */}
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">

          {/* Heading */}
          <div className="mb-14">
            <p
              data-aos="fade-up"
              className="mb-2 text-sm font-semibold uppercase tracking-widest text-gray-500"
            >
              We give you the best from
            </p>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-3xl font-extrabold text-black sm:text-4xl"
            >
              Our Services
            </h2>

            <div className="mt-4 h-1 w-20 bg-black" />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

            {/* Service 1 */}
            <div data-aos="fade-up"
              onClick={() => navigate("/tour-packages")}>
              <img
                src={service4}
                alt="Tour Packages"
                className="mb-5 h-56 w-full object-cover"
              />
              <h3 className="mb-3 text-lg font-bold uppercase">
                Sri Lanka Tour Packages
              </h3>
              <p className="mb-3 text-gray-600">
                We have arranged several tour packages for you to choose if you need to
                travel in a day.
              </p>
              <span
                onClick={() => navigate("/tour-packages")}
                className="cursor-pointer font-semibold underline hover:text-yellow-500"
              >
                Read more..
              </span>

            </div>

            {/* Service 2 */}
            <div data-aos="fade-up" data-aos-delay="100"
              onClick={() => navigate("/custom-tour-packages")}>
              <img
                src={service5}
                alt="Custom Tours"
                className="mb-5 h-56 w-full object-cover"
              />
              <h3 className="mb-3 text-lg font-bold uppercase">
                Custom Tour Packages
              </h3>
              <p className="mb-3 text-gray-600">
                There are custom tour packages which will support you to customize any
                tour as per your requirements.
              </p>
              <span
                onClick={() => navigate("/custom-tour-packages")}
                className="cursor-pointer font-semibold underline hover:text-yellow-500"
              >
                Read more..
              </span>

            </div>

            {/* Service 3 */}
            <div data-aos="fade-up" data-aos-delay="200"
              onClick={() => navigate("/rent-a-car")}>
              <img
                src={service6}
                alt="Rent a Car"
                className="mb-5 h-56 w-full object-cover"
              />
              <h3 className="mb-3 text-lg font-bold uppercase">
                Rent a Car Service
              </h3>
              <p className="mb-3 text-gray-600">
                If you are looking to rent a vehicle for a journey, we provide a wide
                range of vehicles for a low-cost budget.
              </p>
              <span
                onClick={() => navigate("/rent-a-car")}
                className="cursor-pointer font-semibold underline hover:text-yellow-500"
              >
                Read more..
              </span>

            </div>

            {/* Service 4 */}
            <div data-aos="fade-up" data-aos-delay="300"
              onClick={() => navigate("/vehicle-recovery-service")}>
              <img
                src={service7}
                alt="Vehicle Recovery"
                className="mb-5 h-56 w-full object-cover"
              />
              <h3 className="mb-3 text-lg font-bold uppercase">
                24/7 Vehicle Recovery Service
              </h3>
              <p className="mb-3 text-gray-600">
                There is nothing to worry about vehicle breakdowns anymore. Our company
                will be there with one of our representatives nearby.
              </p>
              <span
                onClick={() => navigate("/vehicle-recovery-service")}
                className="cursor-pointer font-semibold underline hover:text-yellow-500"
              >
                Read more..
              </span>

            </div>

          </div>
        </div>
      </section>

      {/* ================= PLACES SECTION ================= */}
      <section className="w-full bg-white py-10">
        <div className="mx-auto max-w-7xl px-4">

          {/* Heading */}
          <div className="mb-14 text-center">
            <h2
              data-aos="fade-up"
              className="text-3xl font-extrabold text-black sm:text-4xl md:text-5xl"
            >
              Popular Places in Sri Lanka
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-yellow-400" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                id: "galle",
                img: place1,
                title: "Galle",
                desc: "The city of Galle is about a two-hour drive from Colombo via one of the country’s first modern superhighways. This...",
              },
              {
                id: "jaffna",
                img: place2,
                title: "Jaffna",
                desc: "Jaffna is a city located on the northern tip of Sri Lanka. It opened its doors to tourism in 2009....",
              },
              {
                id: "trincomalee",
                img: place3,
                title: "Trincomalee",
                desc: "Trincomalee is a great little town on the east coast of Sri Lanka. Trincomalee offers beautiful white sand and has...",
              },
              {
                id: "anuradhapura",
                img: place4,
                title: "Anuradhapura",
                desc: "A visit to Anuradhapura, one of the country’s ancient capitals, rewards visitors with a glimpse into the past. The area...",
              },
              {
                id: "polonnaruwa",
                img: place5,
                title: "Polonnaruwa",
                desc: "Polonnaruwa is an ancient city in north-central Sri Lanka, famous for its well-preserved ruins, sacred temples, and impressive stone sculptures...",
              },
              {
                id: "katharagama",
                img: place6,
                title: "Katharagama",
                desc: "Kataragama is a popular spiritual and cultural destination in southeastern Sri Lanka, known for its sacred temples and vibrant religious atmosphere...",
              },
            ].map((place, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="overflow-hidden rounded-xl border border-gray-200 shadow-sm transition hover:shadow-lg"
              >
                {/* Image */}
                <img
                  src={place.img}
                  alt={place.title}
                  className="h-56 w-full object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-black">
                    {place.title}
                  </h3>

                  <p className="mb-4 text-sm text-gray-600">
                    {place.desc}
                  </p>

                  <button
                    onClick={() => navigate(`/places/${place.id}`)}
                    className="rounded bg-yellow-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-yellow-500"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button */}
          <div className="mt-16 text-center">
            <button
              onClick={() => navigate("/places")}
              className="rounded-lg bg-black px-8 py-3 text-sm font-semibold text-red-500 transition hover:bg-gray-900"
            >
              See More Places
            </button>
          </div>

        </div>
      </section>

      {/* ================= TAXI CTA SECTION ================= */}
      <section className="w-full bg-[#f7f7f7] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">

            {/* LEFT CONTENT */}
            <div
              data-aos="fade-right"
              className="flex flex-col items-center text-center"
            >
              <h2 className="mb-4 text-3xl font-extrabold text-black sm:text-4xl">
                Book your Taxi Today!
              </h2>

              <p className="mb-6 max-w-xl text-gray-700">
                Balasooriya Travels is the best and no.1 Taxi & Tour service provider in Sri
                Lanka. We always offer you the best Taxi deals covering all islands.
              </p>

              <p className="mb-6 text-2xl font-bold text-black">
                +94 76 734 9312
              </p>

              <a
                href="tel:+94743205692"
                className="inline-block rounded bg-black px-8 py-3 text-sm font-semibold text-red-500 transition hover:bg-gray-900"
              >
                Contact Us
              </a>
            </div>


            {/* RIGHT IMAGE */}
            <div
              data-aos="fade-left"
              className="flex justify-center md:justify-end"
            >
              <img
                src={bus}
                alt="Taxi Service"
                className="max-w-full object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHATSAPP BUTTON ================= */}
      <a
        href="https://wa.me/94767349312"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
          alt="WhatsApp"
          className="h-12 w-12 rounded-full shadow-lg transition hover:scale-110 sm:h-14 sm:w-14"
        />
      </a>

    </div>
  );
}

export default Home;
