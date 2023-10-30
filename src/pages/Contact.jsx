import map from "../images/map.png";
import Form from "../components/Form";
import Message from "../components/Message";

const Contact = () => {
  return (
    <>
      <Message />
      <Form />
      <img src={map} alt="" />
    </>
  );
};

export default Contact;
