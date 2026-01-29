import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutHero from "../assets/hero9.jpeg";
import bus from "../assets/bus.png";

import prius from "../assets/prius.jpg";
import KDH from "../assets/kdh.jpg";

import Caravan1 from "../assets/Nissan Caravan front.jpeg";
import Caravan2 from "../assets/Nissan Caravan inside.jpeg";

import Dolphin1 from "../assets/Toyota Dolphin 1.jpeg";
import Dolphin2 from "../assets/Toyota Dolphin 2.jpeg";

import Highroof1 from "../assets/Toyota KDH Highroof 1.jpeg";
import Highroof2 from "../assets/Toyota KDH Highroof 2.jpeg";

import KingLong1 from "../assets/King Long 1.jpeg";
import KingLong2 from "../assets/King Long 2.jpeg";

import AshokLeyland1 from "../assets/Ashok Leyland 1.jpeg";
import AshokLeyland2 from "../assets/Ashok Leyland 2.jpeg";

import MitsubishiRosa1 from "../assets/Mitsubishi Fuso Rosa 1.jpeg";
import MitsubishiRosa2 from "../assets/Mitsubishi Fuso Rosa 2.jpeg";

import whyChoose from "../assets/rent-a-car-large.jpg";

function RentCar() {

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
                        Car Rent
                    </h1>
                    <p className="max-w-2xl text-sm text-gray-200 sm:text-base">
                        Reliable Taxi & Tour Services Across Sri Lanka
                    </p>
                </div>
            </section>

            {/* ================= RENT A CAR SECTION ================= */}
            <section className="w-full bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-10">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-2" data-aos="fade-up">
                        <h2 className="mb-4 text-3xl font-extrabold">
                            Rent a Car Service
                        </h2>

                        <p className="mb-6 text-gray-700 max-w-3xl">
                            We offer a self-drive car rental service with comfortable vehicles in excellent running condition.
                            Our prices are affordable, providing you with a convenient and reliable transportation option.
                        </p>

                        <h3 className="mb-4 text-xl font-semibold">
                            TOYOTA PRIUS CAR
                        </h3>

                        {/* SINGLE CAR IMAGE */}
                        <div className="mb-6">
                            <img
                                src={prius}
                                alt="Toyota Prius"
                                className="w-full max-w-3xl rounded-lg shadow"
                            />
                        </div>

                        {/* PRICE TABLE */}
                        <div className="mb-10 overflow-hidden rounded-lg border max-w-3xl">
                            <table className="w-full text-left text-sm">
                                <tbody>
                                    <tr className="border-b">
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Price
                                        </th>
                                        <td className="px-4 py-3 font-semibold">
                                            LKR 8,500 (USD 25) Per Day
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Mileage
                                        </th>
                                        <td className="px-4 py-3">
                                            Free 100 kms Per Day <br />
                                            LKR 65 (USD 0.2) for each additional km
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Seating Capacity
                                        </th>
                                        <td className="px-4 py-3">
                                            5 Pax
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="mb-4 text-xl font-semibold">
                            Toyota KDH Flatroof
                        </h3>

                        {/* SINGLE CAR IMAGE */}
                        <div className="mb-6">
                            <img
                                src={KDH}
                                alt="Toyota Prius"
                                className="w-full max-w-3xl rounded-lg shadow"
                            />
                        </div>

                        {/* PRICE TABLE */}
                        <div className=" mb-10 overflow-hidden rounded-lg border max-w-3xl">
                            <table className="w-full text-left text-sm">
                                <tbody>
                                    <tr className="border-b">
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Price
                                        </th>
                                        <td className="px-4 py-3 font-semibold">
                                            Free LKR 10,000 (USD 30) Per Day
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Mileage
                                        </th>
                                        <td className="px-4 py-3">
                                            100 kms Per Day
                                            LKR 70 (USD 0.2) for each additional km
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Seating Capacity
                                        </th>
                                        <td className="px-4 py-3">
                                            8 Pax
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="mb-4 text-xl font-semibold">
                            Nissan Caravan
                        </h3>

                        {/* CAR IMAGES */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                            <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-lg shadow">
                                <img
                                    src={Caravan1}
                                    alt="Toyota Prius Front"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-lg shadow">
                                <img
                                    src={Caravan2}
                                    alt="Toyota Prius Back"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* PRICE TABLE */}
                        <div className="mb-10 overflow-hidden rounded-lg border max-w-3xl">
                            <table className="w-full text-left text-sm">
                                <tbody>
                                    <tr className="border-b">
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Price
                                        </th>
                                        <td className="px-4 py-3 font-semibold">
                                            LKR 8,500 (USD 25) Per Day
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Mileage
                                        </th>
                                        <td className="px-4 py-3">
                                            Free 100 kms Per Day <br />
                                            LKR 65 (USD 0.2) for each additional km
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Seating Capacity
                                        </th>
                                        <td className="px-4 py-3">
                                            14 Pax
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="mb-4 text-xl font-semibold">
                            Toyota Dolphin
                        </h3>

                        {/* CAR IMAGES */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                            <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-lg shadow">
                                <img
                                    src={Dolphin1}
                                    alt="Toyota Prius Front"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-lg shadow">
                                <img
                                    src={Dolphin2}
                                    alt="Toyota Prius Back"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* PRICE TABLE */}
                        <div className="mb-10 overflow-hidden rounded-lg border max-w-3xl">
                            <table className="w-full text-left text-sm">
                                <tbody>
                                    <tr className="border-b">
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Price
                                        </th>
                                        <td className="px-4 py-3 font-semibold">
                                            LKR 8,500 (USD 25) Per Day
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Mileage
                                        </th>
                                        <td className="px-4 py-3">
                                            Free 100 kms Per Day <br />
                                            LKR 65 (USD 0.2) for each additional km
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Seating Capacity
                                        </th>
                                        <td className="px-4 py-3">
                                            9 Pax
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="mb-4 text-xl font-semibold">
                            Toyota KDH Highroof
                        </h3>

                        {/* CAR IMAGES */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                            <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-lg shadow">
                                <img
                                    src={Highroof1}
                                    alt="Toyota Prius Front"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-lg shadow">
                                <img
                                    src={Highroof2}
                                    alt="Toyota Prius Back"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* PRICE TABLE */}
                        <div className="mb-10 overflow-hidden rounded-lg border max-w-3xl">
                            <table className="w-full text-left text-sm">
                                <tbody>
                                    <tr className="border-b">
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Price
                                        </th>
                                        <td className="px-4 py-3 font-semibold">
                                            LKR 8,500 (USD 25) Per Day
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Mileage
                                        </th>
                                        <td className="px-4 py-3">
                                            Free 100 kms Per Day <br />
                                            LKR 65 (USD 0.2) for each additional km
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Seating Capacity
                                        </th>
                                        <td className="px-4 py-3">
                                            14 Pax
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="mb-4 text-xl font-semibold">
                            King Long
                        </h3>

                        {/* CAR IMAGES */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                            <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-lg shadow">
                                <img
                                    src={KingLong1}
                                    alt="Toyota Prius Front"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-lg shadow">
                                <img
                                    src={KingLong2}
                                    alt="Toyota Prius Back"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* PRICE TABLE */}
                        <div className="mb-10 overflow-hidden rounded-lg border max-w-3xl">
                            <table className="w-full text-left text-sm">
                                <tbody>
                                    <tr className="border-b">
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Price
                                        </th>
                                        <td className="px-4 py-3 font-semibold">
                                            LKR 8,500 (USD 25) Per Day
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Mileage
                                        </th>
                                        <td className="px-4 py-3">
                                            Free 100 kms Per Day <br />
                                            LKR 65 (USD 0.2) for each additional km
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Seating Capacity
                                        </th>
                                        <td className="px-4 py-3">
                                            45 Pax
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="mb-4 text-xl font-semibold">
                            Ashok Leyland
                        </h3>

                        {/* CAR IMAGES */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                            <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-lg shadow">
                                <img
                                    src={AshokLeyland1}
                                    alt="Toyota Prius Front"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-lg shadow">
                                <img
                                    src={AshokLeyland2}
                                    alt="Toyota Prius Back"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* PRICE TABLE */}
                        <div className="mb-10 overflow-hidden rounded-lg border max-w-3xl">
                            <table className="w-full text-left text-sm">
                                <tbody>
                                    <tr className="border-b">
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Price
                                        </th>
                                        <td className="px-4 py-3 font-semibold">
                                            LKR 8,500 (USD 25) Per Day
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Mileage
                                        </th>
                                        <td className="px-4 py-3">
                                            Free 100 kms Per Day <br />
                                            LKR 65 (USD 0.2) for each additional km
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Seating Capacity
                                        </th>
                                        <td className="px-4 py-3">
                                            54 / 59 Pax
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="mb-4 text-xl font-semibold">
                            Mitsubishi Fuso Rosa
                        </h3>

                        {/* CAR IMAGES */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                            <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-lg shadow">
                                <img
                                    src={MitsubishiRosa1}
                                    alt="Toyota Prius Front"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-lg shadow">
                                <img
                                    src={MitsubishiRosa2}
                                    alt="Toyota Prius Back"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* PRICE TABLE */}
                        <div className="overflow-hidden rounded-lg border max-w-3xl">
                            <table className="w-full text-left text-sm">
                                <tbody>
                                    <tr className="border-b">
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Price
                                        </th>
                                        <td className="px-4 py-3 font-semibold">
                                            LKR 8,500 (USD 25) Per Day
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Mileage
                                        </th>
                                        <td className="px-4 py-3">
                                            Free 100 kms Per Day <br />
                                            LKR 65 (USD 0.2) for each additional km
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="bg-gray-100 px-4 py-3 font-medium">
                                            Seating Capacity
                                        </th>
                                        <td className="px-4 py-3">
                                            33 Pax
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

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

            {/* ================= WHY CHOOSE RENT A CAR ================= */}
            <section className="w-full bg-white py-10">
                <div className="mx-auto max-w-7xl px-4">

                    {/* IMAGE */}
                    <div
                        className="mb-10 flex justify-center"
                        data-aos="fade-up"
                    >
                        <img
                            src={whyChoose}
                            alt="Why Choose Our Rent A Car Services"
                            className="w-full max-w-4xl rounded-lg shadow"
                        />
                    </div>

                    {/* CONTENT */}
                    <div
                        className="mx-auto max-w-3xl"
                        data-aos="fade-up"
                    >
                        <h2 className="mb-6 text-3xl font-extrabold text-center">
                            Why Choose Our Rent A Car Services?
                        </h2>

                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-lg">✔</span>
                                <span>No additional Documents needed.</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-lg">✔</span>
                                <span>Well-maintained, clean, and reliable vehicles.</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-lg">✔</span>
                                <span>Hassle-free reservation process.</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-lg">✔</span>
                                <span>
                                    Affordable and transparent pricing
                                    <span className="font-semibold"> (No hidden fees)</span>.
                                </span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-lg">✔</span>
                                <span>
                                    Flexible rental packages
                                    <span className="font-semibold"> (daily, weekly, monthly)</span>.
                                </span>
                            </li>
                        </ul>
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

export default RentCar;