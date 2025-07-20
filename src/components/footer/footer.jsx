import React from "react";
import "./footer.css";
import Logo from "../nav/components/logo";

export default function Footer() {
  return (
    <>
      <div className="footer__container">
        <div className="footer__container-detail">
          <div className="logo__footer">
            <Logo />
            <div className="footer__text-container">
              <p className="footer__text">
                Tempat beli bunga papan dan karangan bunga 24 jam di Ngawi.
                <br />
                <strong>
                  Karangan bunga | bunga papan | buket | ucapan selamat |
                  standing flower | dll.
                </strong>
              </p>
            </div>
          </div>
          <div className="footer__detail">
            <div className="footer__detail-title">Produk kami</div>
            <div className="footer__detail-product">
              <p>Karangan bunga</p>
              <p>Duka cita</p>
              <p>Happy Wedding</p>
              <p>Buket Bunga</p>
              <p>Ucapan Selamat</p>
              <p>Standing Flower</p>
            </div>
          </div>
        </div>

        <div>
          <div className="footer__line" />
          <p
            className="footer__copyright"
            style={{ textAlign: "left", color: "white" }}
          >
            <span>
              Copyright ©2025 <b>NB Florist Ngawi</b>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
