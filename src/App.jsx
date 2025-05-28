import ContactCard from "./components/contactCard";
import "./App.css";
function App() {
  const contactos = [
    { id: 1, nombre: "Ana Pérez", email: "ana@gmail.com" },
    { id: 2, nombre: "Luis Gómez", email: "luis@example.com" },
    { id: 3, nombre: "Camila Ríos", email: "camila@correo.com" },
    { id: 4, nombre: "Camila Ríos", email: "camila@correo.com" },
    { id: 5, nombre: "Camila Ríos", email: "camila@correo.com" },
  ];

  return (
    <div className="App">
      <h1>Mis contactos</h1>
      <div className="contact-list">
        {contactos.map((contacto) => {
          return (
            <ContactCard
              key={contacto.id}
              id={contacto.id}
              nombre={contacto.nombre}
              email={contacto.email}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
