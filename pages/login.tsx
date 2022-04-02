import Container from "@mui/material/Container";
import Login from "components/Login";
import { useAuth } from "hooks/useAuth";

const LoginPage = () => {
  const { isLoading } = useAuth({ redirectOnAuth: "/" });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 10 }}>
      <Login />
    </Container>
  );
};

export default LoginPage;
