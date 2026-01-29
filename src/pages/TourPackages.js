import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutHero from "../assets/hero9.jpeg";
import bus from "../assets/bus.png";

import tour1 from "../assets/colombo-city-tour.jpg";
import tour2 from "../assets/kandy-tour.jpg";
import tour3 from "../assets/galle-tour.jpg";
import tour4 from "../assets/exploring-sri-lanka.jpg";

function TourPackages() {
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
                        Tour Packages
                    </h1>
                    <p className="max-w-2xl text-sm text-gray-200 sm:text-base">
                        Reliable Taxi & Tour Services Across Sri Lanka
                    </p>
                </div>
            </section>

            {/* ================= OUR TOUR PACKAGES ================= */}
            <section className="w-full bg-white py-16">
                <div className="mx-auto max-w-7xl px-4">

                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">OUR TOUR PACKAGES</h2>
                        <div className="mx-auto mt-4 h-1 w-16 bg-black" />
                        <p className="mt-2 text-gray-700">
                            Several Tour Packages to Travel Around the Most Famous City Locations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">

                        {/* LEFT CONTENT */}
                        <div className="lg:col-span-3 text-base leading-relaxed text-gray-800">

                            <h3 className="mb-4 font-bold uppercase text-2xl">
                                1. Colombo City Tour in One Day
                            </h3>

                            <p className="mb-4">
                                Colombo is the commercial capital and largest city of Sri Lanka by population.
                                There is no dearth of tourist places in Colombo. In fact, you will feel short of
                                time during your visit here and therefore, the best way to have the maximum fun
                                is by planning your day well.
                            </p>

                            <p className="mb-6">
                                Galle face Green is currently a 5 hectare ribbon strip of land between Galle Road
                                and the Indian Ocean which is now the largest open space in Colombo and has become
                                a popular destination for children, vendors, teenagers, lovers, kite flyers,
                                merrymakers and all those who want to indulge in their favorite pastimes next to
                                the sea under the open sky.
                            </p>

                            <p className="mb-4 font-semibold">
                                We suggest you some of the perfect places that you should definitely explore on your trip to Colombo,
                            </p>

                            <ol className="list-decimal space-y-1 pl-5">
                                <li>Galle Face Green - A beautiful stretch of open space</li>
                                <li>Gangarama Temple – Buddhist temple with massive architecture</li>
                                <li>Colombo Museum – Walk in to the history of Sri Lanka</li>
                                <li>Colombo Lotus Tower – Beauty from the highest place in Colombo</li>
                                <li>Independence Square – Historical Landmark in Colombo</li>
                                <li>Beira Lake – End the day with sunset</li>
                                <li>Pettah Floating Market – Shop on a floating platform</li>
                                <li>Old Parliament Building – Reminiscent of the New-baroque architectural style</li>
                                <li>Vihara Mahadevi Park -Perfect place with recreational activities</li>
                                <li>Diyatha Uyana – Explore the beauty of nature</li>
                                <li>Gem & Jewelry Shops – Native Sri Lankan Gem & Jewelries</li>
                            </ol>

                            {/* IMAGES (Exact Layout) */}
                            <div className="mt-8">
                                <img
                                    src={tour1}
                                    alt="Colombo City Tour"
                                    className="w-full rounded object-cover"
                                />
                            </div>

                            {/* PRICE */}
                            <div className="mb-8 mt-4 bg-gray-100 px-4 py-2 font-semibold">
                                Package Price &nbsp;&nbsp; LKR 5,500/= &nbsp;&nbsp; USD 30
                            </div>

                            <h3 className="mb-4 font-bold uppercase text-2xl">
                                2. City Tour to Kandy in One Day
                            </h3>

                            <p className="mb-4">
                                Kandy is known as Sri Lanka’s spiritual capital and is famous for its peaceful
                                atmosphere and cultural heritage. This beautiful hill city is a major attraction
                                for Buddhist pilgrims and travelers who love nature, history, and spirituality.
                            </p>

                            <p className="mb-4">
                                Kandy offers a perfect blend of sacred temples, lush greenery, scenic trails,
                                and historical landmarks. With plenty of attractions to explore, it is one of
                                the most visited destinations in Sri Lanka.
                            </p>

                            <p className="mb-4">
                                Pinnawala Elephant Orphanage is one of the top attractions near Kandy and the
                                best place to experience wildlife up close. Abandoned, injured, and orphaned
                                elephants are cared for here. Activities such as milk feeding, fruit feeding,
                                and elephant bathing attract visitors from all over the world.
                            </p>

                            <p className="mb-4 font-semibold">
                                Besides, you can enjoy seeing,
                            </p>

                            <ol className="list-decimal space-y-1 pl-5">
                                <li>Elephant Safari – A moment with wild life</li>
                                <li>Peradeniya Botanical Garden – Enjoy the hidden charm of nature</li>
                                <li>Temple of Tooth Relic – Most remarkable place to visit</li>
                                <li>Degaldoruwa Temple – Cave Temple</li>
                                <li>Bahirawakanda Temple – A place with spiritual background</li>
                                <li>Hulu River Waterfall – A sightseeing of waterfall</li>
                            </ol>

                            {/* IMAGES GRID */}
                            <div className="mt-8">
                                <img
                                    src={tour2}
                                    alt="Kandy City Tour"
                                    className="w-full rounded object-cover"
                                />
                            </div>

                            {/* PRICE */}
                            <div className="mb-8 mt-4 bg-gray-100 px-4 py-2 font-semibold">
                                Package Price &nbsp;&nbsp; LKR 9,000/= &nbsp;&nbsp; USD 50
                            </div>

                            <h3 className="mb-4 font-bold uppercase text-2xl">
                                3. A Day Around the Ancient City of Galle
                            </h3>

                            <p className="mb-4">
                                If you looking to experience a city with a historical background, Galle is the perfect destination for you to choose. With a stunning fort, Dutch colonial architecture and beaches, there is no shortage of places to visit in Galle and around.
                            </p>

                            <p className="mb-4">
                                Galle fort is one of the top destinations in Galle for being an extraordinary historical and archaeological site for both local and international visitors. Galle Lighthouse and Mansion Museum has highly rated places to enjoy in Galle Fort.
                            </p>

                            <p className="mb-4 font-semibold">
                                In addition, you can see,
                            </p>

                            <ol className="list-decimal space-y-1 pl-5">
                                <li>Hikkaduwa Beach</li>
                                <li>Unawatuna</li>
                                <li>National Museum of Galle</li>
                                <li>Whale Watching in Mirissa</li>
                            </ol>

                            {/* IMAGES GRID */}
                            <div className="mt-8">
                                <img
                                    src={tour3}
                                    alt="Galle City Tour"
                                    className="w-full rounded object-cover"
                                />
                            </div>

                            {/* PRICE */}
                            <div className="mb-8 mt-4 bg-gray-100 px-4 py-2 font-semibold">
                                Package Price &nbsp;&nbsp; LKR 9,000/= &nbsp;&nbsp; USD 40
                            </div>

                            <h3 className="mb-4 font-bold uppercase text-2xl">
                                4. Travel Sri Lanka in a Single Day
                            </h3>

                            <p className="mb-4">
                                We know it is hard to go all the places in a single day and it is important to manage your time when planning a day tour. However, you do not need to worry too much about it. Customers can select their destinations according to their preferences and we are here to support you anytime.
                            </p>

                            {/* IMAGES GRID */}
                            <div className="mt-8">
                                <img
                                    src={tour4}
                                    alt="Galle City Tour"
                                    className="w-full rounded object-cover"
                                />
                            </div>

                            {/* PRICE */}
                            <div className="mt-4 bg-gray-100 px-4 py-2 font-semibold">
                                Package Price &nbsp;&nbsp; LKR 7,500/= &nbsp;&nbsp; USD 45
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

export default TourPackages;