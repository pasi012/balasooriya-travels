import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";

import aboutHero from "../assets/hero9.jpeg";
import bus from "../assets/bus.png";

import service1 from "../assets/sri-lanka-tour.jpg";
import service2 from "../assets/custom-tour.jpg";
import service3 from "../assets/rent-a-car.jpg";
import service4 from "../assets/vehicle-recovery.jpg";

function Services() {

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[40vh] w-full">
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${aboutHero})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <h1
                        data-aos="fade-up"
                        className="mb-4 text-4xl font-extrabold sm:text-5xl md:text-6xl"
                    >
                        Services
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="max-w-2xl text-sm text-gray-200 sm:text-base"
                    >
                        Reliable Taxi & Tour Services Across Sri Lanka
                    </p>
                </div>
            </section>

            {/* ================= OUR MAIN SERVICES ================= */}
            <section className="w-full bg-white py-20">
                <div className="mx-auto max-w-7xl px-4">

                    {/* Title */}
                    <div
                        data-aos="fade-up"
                        className="mb-12 text-center"
                    >
                        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
                            OUR MAIN SERVICES
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 bg-black" />

                        <p className="mx-auto mt-6 max-w-3xl text-gray-600 sm:text-base">
                            As a leading company for arranging travels & tours around Sri Lanka, we have introduced our services by placing the customer at first. We are trying our best to increase the quality of service according to the customer reviews and all these services which we give, are with no any extra hidden charges.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

                        {/* Service Card */}
                        <div
                            data-aos="fade-up"
                            className="text-center"
                            onClick={() => navigate("/tour-packages")}
                        >
                            <img
                                src={service1}
                                alt="Sri Lanka Tour Packages"
                                className="mx-auto mb-6 h-52 w-full rounded object-cover"
                            />
                            <h3 className="mb-3 font-bold uppercase">
                                Sri Lanka Tour Packages
                            </h3>
                            <p className="text-gray-600">
                                We have arranged several tour packages for you to choose if you need to travel in a day.
                            </p>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="text-center"
                            onClick={() => navigate("/custom-tour-packages")}
                        >
                            <img
                                src={service2}
                                alt="Custom Tour Packages"
                                className="mx-auto mb-6 h-52 w-full rounded object-cover"
                            />
                            <h3 className="mb-3 font-bold uppercase">
                                Custom Tour Packages
                            </h3>
                            <p className="text-gray-600">
                                Sri Lanka is an amazing travel destination offering a wide range of places to visit. If you are planning to go with a custom tour, you can choose the destination wherever and whenever you need to go in Sri Lanka.
                            </p>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="text-center"
                            onClick={() => navigate("/rent-a-car")}
                        >
                            <img
                                src={service3}
                                alt="Rent a Car Service"
                                className="mx-auto mb-6 h-52 w-full rounded object-cover"
                            />
                            <h3 className="mb-3 font-bold uppercase">
                                Rent a Car Service
                            </h3>
                            <p className="text-gray-600">
                                The car you select is up to you, and so is the way you pick your ride. We have fleet of vehicles which updated with the modern technology, are available for you for an affordable cost to make your way better.
                            </p>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="text-center"
                            onClick={() => navigate("/vehicle-recovery-service")}
                        >
                            <img
                                src={service4}
                                alt="24 Hour Recovery Service"
                                className="mx-auto mb-6 h-52 w-full rounded object-cover"
                            />
                            <h3 className="mb-3 font-bold uppercase">
                                24 Hour Recovery Service
                            </h3>
                            <p className="text-gray-600">
                                We have appointed reliable and skilled technicians as our service providers throughout Sri Lanka and will assure our members to provide comprehensive 24 x 7 road side assistance on all 365 Days.
                            </p>
                        </div>

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
                                className="inline-block rounded bg-black px-8 py-3 text-sm font-semibold text-yellow-400 transition hover:bg-gray-900"
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
                href="https://wa.me/94705152858"
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

export default Services;
