import { useState } from "react";

function Contact() {

const [nom, setNom] = useState("");
const [telephone, setTelephone] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = (e) => {
    e.preventDefault()
console.log("Nom : " + nom);
console.log("Telephone : " + telephone);
console.log("Message : " + message);
    
}

  return (
  <form onSubmit={handleSubmit}>
    <div>
        <label>Nom : </label>
        <input 
        type="text"
        name="name"
        value={nom}
        onChange={(e) => setNom(e.target.value)} />
    </div>
    <div>
        <label>Téléphone : </label>
        <input type="tel"
        value={telephone} 
        onChange={(e) => setTelephone(e.target.value)}/>
    </div>
        <label>Message : </label>
        <textarea value={message}
        onChange={(e) =>setMessage(e.target.value)} 
        ></textarea>
        <div>
            <button type="submit"> Envoyer</button>
        </div>
  </form>
  );
}

export default Contact;