import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f1eb] text-[#4b3f35] font-sans">
      <header className="p-6 shadow-md bg-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Sejwal Spaces</h1>
          <div className="space-x-4">
            <a href="#properties" className="hover:underline">Properties</a>
            <a href="#rent" className="hover:underline">Rent/Lease</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <section className="text-center py-10">
          <h2 className="text-3xl font-semibold">Find Your Space in Delhi NCR</h2>
          <p className="mt-2">30+ years of trusted real estate and construction expertise.</p>
        </section>

        <section id="properties" className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Premium Properties</h3>
            <p>Starting ₹1.5 Cr+ — Luxury Villas, Builder Floors, Penthouses</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Mid-Range Properties</h3>
            <p>₹60L – ₹1.5 Cr — 2BHK / 3BHK Flats, Floors, Plots</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Budget Homes</h3>
            <p>Below ₹60L — 1BHK Flats, Builder Floors, Affordable Plots</p>
          </div>
        </section>

        <section id="rent" className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Rent & Lease (Small Budget)</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow">
              <p>1BHK, Shared Flats, Small Shops in areas like Uttam Nagar, Laxmi Nagar, Rohini</p>
              <p className="mt-2">Rent Range: ₹5,000 – ₹25,000/month</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-12 bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p>📞 +91 9910843000 | +91 9312339747</p>
          <p>📧 info@sejwalspaces.in</p>
          <form className="mt-4 grid gap-3">
            <input type="text" placeholder="Your Name" className="p-2 border rounded" />
            <input type="email" placeholder="Your Email" className="p-2 border rounded" />
            <textarea placeholder="Your Message" className="p-2 border rounded"></textarea>
            <button className="bg-[#bfa58a] text-white py-2 rounded">Book Appointment</button>
          </form>
        </section>
      </main>

      <footer className="text-center p-4 text-sm text-[#7c6a58] mt-10">
        &copy; 2025 Sejwal Spaces. All rights reserved.
      </footer>
    </div>
  );
}
