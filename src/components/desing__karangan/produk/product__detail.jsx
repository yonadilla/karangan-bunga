import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import EmblaCarousel from "../../corousel/emblaCarousel";
import { AnimatePresence, motion } from "motion/react";
import Carousel from "../../corousel/sweperCarousel";
import { div } from "motion/react-client";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function ProductDetail({ products }) {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);
  if (!product) {
    return <div>Produk tidak ditemukan.</div>;
  }

  const nomor = "6285695597999";
  const pesan = encodeURIComponent(
    `Halo, saya tertarik dengan produk ini ${product.id}`
  );
  const waLink = `https://wa.me/${nomor}?text=${pesan}`;

  const filter = products.filter((p) => p.category === product.category);
  console.log(filter);

  return (
    <>
      <div className="product__container">
        <Carousel products={products} />
        <div className="product__detail-container">
          <motion.h1
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 1, type: "spring" }}
            className="product__name"
          >
            {product.id}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 1, type: "spring", delay: 0.5 }}
          >
            {product.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 1, type: "spring", delay: 0.8 }}
            className="product__order"
          >
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              Chat via WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
      <div className="related__container">
        <div className="related__title">
          <p>Related Product</p>
        </div>
        <div className="related__product">
          {filter.map((p) => {
            return (
              <div key={p.id}>
                <Link to={`/${p.id}`}>
                  <img src={p.img[0]} className="item" alt={p.id} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
