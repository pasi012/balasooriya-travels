import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutHero from "../assets/hero9.jpeg";
import bus from "../assets/bus.png";

import recoveryImg from "../assets/recovery-operator.jpg";

function VehicleRecoveryService() {

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[40vh] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${aboutHero})` }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl md:text-6xl">
                        Vehicle Recovery
                    </h1>
                    <p className="max-w-2xl text-sm text-gray-200 sm:text-base">
                        Reliable Taxi & Tour Services Across Sri Lanka
                    </p>
                </div>
            </section>

            {/* ================= VEHICLE RECOVERY SERVICE ================= */}
            <section className="w-full bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-10">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-2" data-aos="fade-up">

                        <h2 className="mb-2 text-3xl font-extrabold">
                            Vehicle Recovery Service
                        </h2>

                        <h3 className="mb-4 text-lg font-semibold text-gray-700 uppercase">
                            Vehicle Breakdown Services in Sri Lanka
                        </h3>

                        <p className="mb-6 text-gray-700">
                            Balasooriya Travels Vehicle Recovery Service and Breakdown Service will assist you in continuing your journey
                            to your destination or, in the event of a significant breakdown, they will tow your vehicle to the
                            nearest garage.
                        </p>

                        <h4 className="mb-2 font-bold">
                            Still worrying about vehicle breakdowns?
                        </h4>

                        <p className="mb-6 text-gray-700">
                            If your vehicle breaks down during an urgent situation, it can be a nightmare in many ways.
                            Accessing a trustworthy garage or mechanic may almost be impossible to you.
                            Say “Okay” to those breakdowns with
                            <span className="font-semibold"> “Balasooriya Travels Vehicle Recovery Service”.</span>
                        </p>

                        {/* IMAGE */}
                        <div className="mb-6 overflow-hidden rounded-lg shadow">
                            <img
                                src={recoveryImg}
                                alt="Vehicle Recovery"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <p className="mb-4 text-gray-700">
                            We have appointed reliable and skilled technicians as our service providers throughout Sri Lanka and
                            will assure our members to provide comprehensive 24 × 7 roadside assistance on all 365 Days.
                            So that will give peace of mind and ultimate driving comfort to our valued members all around Sri Lanka
                            at an affordable cost.
                        </p>

                        <p className="mb-6 text-gray-700">
                            Our Recovery Service will enable you to proceed to your destination or, in case of a major breakdown,
                            to the nearest garage.
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Delivery of fuel/oil and wheel change due to puncture.</li>
                            <li>An island wide breakdown service.</li>
                            <li>A list of these garages is published in every issue of the “Record”.</li>
                            <li>Battery jump start service.</li>
                        </ul>
                    </div>

                    {/* RIGHT CONTACT CARD */}
                    <div
                        className="rounded-xl border p-6 shadow-sm h-fit"
                        data-aos="fade-left"
                    >
                        <h4 className="mb-4 text-lg font-bold">
                            Quick Contact (24x7)
                        </h4>

                        <p className="mb-2 font-semibold">
                            Balasooriya Travels
                        </p>

                        <ul className="space-y-2 text-sm text-gray-700">
                            <li> Mobile: +94 76 734 9312</li>
                        </ul>

                        <div className="mt-4 text-sm text-gray-700">
                            <p>📧 balasooriyatravels@gmail.com</p>
                            <p>🌐 www.balasooriyatravels.com</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= TAXI CTA ================= */}
            <section className="w-full bg-[#f7f7f7] py-16">
                <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">

                    <div className="text-center">
                        <h2 className="mb-4 text-3xl font-extrabold">Book your Taxi Today!</h2>
                        <p className="mb-6 text-gray-700">
                            Balasooriya Travels is the best and no.1 Taxi & Tour service provider in Sri Lanka.
                        </p>
                        <p className="mb-6 text-2xl font-bold">+94 76 734 9312</p>
                        <a href="tel:+94743205692" className="inline-block rounded bg-black px-8 py-3 text-yellow-400">
                            Contact Us
                        </a>
                    </div>

                    <div className="flex justify-center">
                        <img src={bus} alt="Taxi Service" />
                    </div>

                </div>
            </section>

        </div>
    );
}

export default VehicleRecoveryService;