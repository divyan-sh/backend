import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const goToHomeHandler = () => {
    //code
    // API CALL
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <div className="mt-4">
      About
      <hr />
      <Button onClick={goToHomeHandler}> Go to Home</Button>
    </div>
  );
};

export default About;
