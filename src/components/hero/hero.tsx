import React from "react";
import "./hero.css";
import { motion } from "motion/react";
export default function Hero() {
  return (
    <div className="hero__container">
      <p className="hero__title">KARANGAN BUNGA JEPON</p>
      <div className="hero__number">Wa : 0882299220000</div>

      <section className="hero">
        <div className="hero__content">
          <motion.p
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 1, type: "spring" }}
          >
            <b>NB Florist Ngawi</b> menyediakan layanan karangan bunga dan bunga
            papan untuk berbagai keperluan. Mulai dari{" "}
            <a href="https://floristngawi.com/order/duka-cita/">duka cita</a>,{" "}
            <a href="https://floristngawi.com/order/papan-bunga-pernikahan/">
              wedding
            </a>
            , ucapan selamat, hingga{" "}
            <a href="https://floristngawi.com/order/buket-bunga/">
              buket bunga
            </a>{" "}
            bisa kami buatkan. FREE pengantaran dan layanan{" "}
            <strong>24 jam nonstop</strong>.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 1, type: "spring", delay: 0.5 }}
          >
            Screenshot desain karangan bunga yang Anda inginkan, lalu kirimkan
            ke CS kami via WhatsApp. Lengkapi detail pesanan, dan karangan bunga
            duka segera kami kirim.
          </motion.p>{" "}
        </div>
      </section>
    </div>
  );
}
