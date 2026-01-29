import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutHero from "../assets/hero9.jpeg";
import bus from "../assets/bus.png";

import img from "../assets/exploring-sri-lanka.jpg";

function CustomTourPackages() {
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
                        Custom Tour Packages
                    </h1>
                    <p className="max-w-2xl text-sm text-gray-200 sm:text-base">
                        Reliable Taxi & Tour Services Across Sri Lanka
                    </p>
                </div>
            </section>

            {/* ================= CUSTOM TOUR PACKAGES ================= */}
            <section className="w-full bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-10">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-2" data-aos="fade-up">
                        <h2 className="mb-2 text-3xl font-extrabold">
                            Custom Tour Packages
                        </h2>
                        <p className="mb-6 text-sm text-gray-500">
                            Customizing Your Travel is Up to You
                        </p>

                        <p className="mb-6 text-gray-700 leading-relaxed">
                            Sri Lanka is an amazing travel destination offering a wide range of places to visit.
                            Besides cities like Colombo, Kandy and Galle, there are incredible outdoor landscapes
                            and safari experiences in large elephant-filled national parks like Yala and Udawalawa.
                            Sri Lanka is also a beach-lover’s paradise, ringed by some of the world’s most beautiful beaches.
                        </p>

                        {/* SINGLE FEATURE IMAGE */}
                        <div className="mb-8" data-aos="zoom-in">
                            <img
                                src={img}
                                alt="Sri Lanka Custom Tour Packages"
                                className="w-full h-full object-fill rounded-xl shadow-md"
                            />
                        </div>

                        {/* DESTINATION LIST */}
                        <p className="mb-4 text-gray-700 font-semibold">
                            Must-visit destinations in Sri Lanka:
                        </p>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700 list-disc list-inside">
                            <li>Ella</li>
                            <li>Nine Arch Bridge</li>
                            <li>Sigiriya</li>
                            <li>Temple of the Tooth Relic</li>
                            <li>Pinnawala Elephant Orphanage</li>
                            <li>Trincomalee</li>
                            <li>Yala National Park</li>
                            <li>Arugam Bay</li>
                            <li>Jaffna</li>
                            <li>Adam’s Peak</li>
                            <li>Nuwara Eliya</li>
                            <li>Sinharaja Forest</li>
                            <li>Udawalawa National Park</li>
                            <li>Mirissa</li>
                            <li>Anuradhapura</li>
                            <li>Horton Plains</li>
                            <li>Kandalama</li>
                        </ul>

                        <p className="mt-6 text-gray-700">
                            You can choose destinations wherever and whenever you want in Sri Lanka.
                            We provide modern vehicles including passenger cars, luxury vans and experienced,
                            licensed drivers to ensure a safe and comfortable journey.
                        </p>
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

export default CustomTourPackages;