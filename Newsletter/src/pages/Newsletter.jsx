import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Newsletter() {
  const [error, setError] = useState("");
  const [boolen, setBoolen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.customEmail.value;
    try {
      if (email.includes("@") && email.includes(".")) {
        setBoolen(false);
        setError("");
        navigate("/subcribe");
      } else {
        setBoolen(true);
        setError("Valid email required");
      }
    } catch {
      setError("Valid email required");
    }
  };

  return (
    <div className="content">
      <img className="portada" src="./portada.jpg" alt="Portada" />
      <main>
        <header>
          <h2>Stay update!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error
            exercitationem:
          </p>
          <ul>
            <li>
              <img src="./icon-success-svg.jpg" />
              Product
            </li>
            <li>
              <img src="./icon-success-svg.jpg" />
              Measure
            </li>
            <li>
              <img src="./icon-success-svg.jpg" />
              And much more!
            </li>
          </ul>
        </header>
        <form onSubmit={handleSubmit} noValidate>
          <label>
            <p>Email address</p>
            <p className="rojo">{error}</p>
          </label>
          <input
            className={boolen ? "error" : ""}
            type="text"
            name="customEmail"
            placeholder="   email@company.com"
          />
          <button type="submit">Subscribe</button>
        </form>
      </main>
    </div>
  );
}

export default Newsletter;
