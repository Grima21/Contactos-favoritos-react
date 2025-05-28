import { useState } from "react";

function ContactCard({ id, nombre, email }) {
  const [favorito, setFavorito] = useState(false);
  return (
    <div className="container">
      <img
        src={`https://i.pravatar.cc/150?img=${id}`}
        alt="Avatar"
        className="avatar"
      />
      <h3>{nombre}</h3>
      <p>{email}</p>
      <button onClick={() => setFavorito(!favorito)}>
        {favorito ? "⭐" : "❌"}
      </button>
    </div>
  );
}
export default ContactCard;
