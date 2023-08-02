import { useNavigate } from "react-router-dom";
import "./Subcribe.css";

function Subcribe() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <aside>
      <div>
        <img src="./icon-success-svg.jpg" />
        <section>
          <h2>Thanks for subscribing!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            enim doloribus vel!
          </p>
        </section>
        <button onClick={handleNavigate}>Dimiss message</button>
      </div>
    </aside>
  );
}

export default Subcribe;
