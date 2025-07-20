import React from "react";
import "./chat.css";
export default function Chat() {
  const nomor = "6285695597999";
  const pesan = encodeURIComponent(`Halo, saya tertarik dengan`);
  const waLink = `https://wa.me/${nomor}?text=${pesan}`;

  return (
    <div className="chat__container">
      <a href={waLink} target="_blank">Chat</a>
    </div>
  );
}
