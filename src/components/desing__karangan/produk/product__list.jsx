import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList({ products }) {
  const [filter, setFilter] = useState("All");

  const handleFilter = (e) =>  {
    setFilter(e.target.value)
  }

  const filtered = products.filter((e) => {
    return filter === "All" ? true : e.category === filter
  })

  return (
    <div>
      <div className="product__filter">
        <select name="product__category" onChange={handleFilter} id="">
          <option value="All">All</option>
          <option value="Berduka">Berduka</option>
          <option value="Selamat">Selamat</option>
        </select>
      </div>
      <div className="grid-container">
        {filtered.map((product) => (
          <div className="" key={product.id}>
            <a href={`/${product.id}`}>
              <img src={product.img[0]} className="item" alt={product.id} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
