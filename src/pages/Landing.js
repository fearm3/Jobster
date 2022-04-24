import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span>app
          </h1>
          <p>
            Kickstarter blog wolf, roof party fixie tumeric +1. Tattooed
            gluten-free pour-over palo santo pabst everyday carry franzen
            whatever jianbing prism pitchfork. Pok pok distillery fanny pack,
            seitan iPhone helvetica twee asymmetrical.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
