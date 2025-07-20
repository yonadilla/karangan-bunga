import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ProductDetail from "./components/desing__karangan/produk/product__detail";

const data = [
  {
    id: "SN-320",
    img: ["/SS-007.jpg", "/SS-006.jpg" ],
    description:
      "Karangan bunga duka cita dari NB Florist Ngawi dirancang sebagai ungkapan belasungkawa yang mendalam. Setiap rangkaian mencerminkan rasa hormat dan simpati, memberikan penghormatan terakhir yang penuh makna untuk momen-momen yang penuh khidmat.",
    category: "Selamat",
  },
  {
    id: "SS-006",
    img: ["/SS-006.jpg", "/SS-007.jpg" ],
    description:
      "Karangan bunga duka cita dari NB Florist Ngawi dirancang sebagai ungkapan belasungkawa yang mendalam. Setiap rangkaian mencerminkan rasa hormat dan simpati, memberikan penghormatan terakhir yang penuh makna untuk momen-momen yang penuh khidmat.",
    category: "Berduka",
  },
  {
    id: "SS-007",
    img: ["/SS-006.jpg", "/SS-007.jpg" ],
    description:
      "Karangan bunga duka cita dari NB Florist Ngawi dirancang sebagai ungkapan belasungkawa yang mendalam. Setiap rangkaian mencerminkan rasa hormat dan simpati, memberikan penghormatan terakhir yang penuh makna untuk momen-momen yang penuh khidmat.",
    category: "Berduka",
  },
  {
    id: "SS-008",
    img: ["/SS-006.jpg", "/SS-007.jpg" ],
    description:
      "Karangan bunga duka cita dari NB Florist Ngawi dirancang sebagai ungkapan belasungkawa yang mendalam. Setiap rangkaian mencerminkan rasa hormat dan simpati, memberikan penghormatan terakhir yang penuh makna untuk momen-momen yang penuh khidmat.",
    category: "Berduka",
  }
  ,
  {
    id: "SS-009",
    img: ["/SS-006.jpg", "/SS-007.jpg" ],
    description:
      "Karangan bunga duka cita dari NB Florist Ngawi dirancang sebagai ungkapan belasungkawa yang mendalam. Setiap rangkaian mencerminkan rasa hormat dan simpati, memberikan penghormatan terakhir yang penuh makna untuk momen-momen yang penuh khidmat.",
    category: "Berduka",
  },
];

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App products={data} />} />
        <Route path="/:id" element={<ProductDetail products={data} />} />
      </Routes>
    </BrowserRouter>
  );
}
