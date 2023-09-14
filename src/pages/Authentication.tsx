import Header from "../components/Authentication/Header/Header";
import Container from "../components/Authentication/Container/Container";
import Form from "../components/Authentication/Form/Form";
import SignIn from "../components/Authentication/Fields/SignIn/SignIn";
import SignUp from "../components/Authentication/Fields/SignUp/SignUp";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";

const Authentication = () => {
  const { param } = useParams();
  const page = param === "signin" ? "Sign In" : "Sign Up";
  return (
    <>
      <Container>
        <Header />
        <Form page={page}>{page === "Sign In" ? <SignIn /> : <SignUp />}</Form>
      </Container>
      <Footer />
    </>
  );
};

export default Authentication;
