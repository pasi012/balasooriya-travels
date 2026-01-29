import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// HERO IMAGE
import heroImg from "../../assets/hero9.jpeg";

// GALLERY IMAGES
import img1 from "../../assets/katharagama-1.jpg";
import img2 from "../../assets/katharagama-2.jpg";
import img3 from "../../assets/katharagama-3.jpg";

function Katharagama() {
    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    return (
        <div className="w-full bg-white">

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[35vh] sm:h-[45vh] lg:h-[55vh] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImg})` }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 text-white">
                    <h1
                        data-aos="fade-up"
                        className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight"
                    >
                        Katharagama
                    </h1>
                </div>
            </section>

            {/* ================= MAIN CONTENT ================= */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

                {/* IMAGE GRID */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
                    data-aos="fade-up"
                >
                    <img
                        src={img1}
                        alt="katharagama"
                        className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover rounded-lg"
                    />
                    <img
                        src={img2}
                        alt="katharagama"
                        className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover rounded-lg"
                    />
                </div>

                {/* LARGE IMAGE */}
                <div data-aos="fade-up" data-aos-delay="150">
                    <img
                        src={img3}
                        alt="katharagama"
                        className="w-full h-[260px] sm:h-[400px] md:h-[550px] lg:h-[700px] xl:h-[800px] object-cover rounded-xl mb-8"
                    />
                </div>

                {/* DESCRIPTION */}
                <div
                    className="mx-auto text-gray-700 text-sm sm:text-base leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay="250"
                >
                    <p>
                        Kataragama is a popular spiritual and cultural destination in southeastern Sri Lanka, known for its sacred temples and vibrant religious atmosphere. Surrounded by nature and close to Yala National Park, it attracts visitors seeking spirituality, tradition, and a unique local experience.
                    </p>
                </div>

                {/* SOCIAL ICONS */}
                <div
                    className="flex flex-wrap justify-center sm:justify-start gap-4 mt-10"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <a className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center bg-blue-600 text-white rounded">f</a>
                    <a className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center bg-sky-500 text-white rounded">t</a>
                    <a className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center bg-blue-700 text-white rounded">in</a>
                    <a className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center bg-red-600 text-white rounded">p</a>
                </div>

            </section>

        </div>
    );
}

export default Katharagama;
