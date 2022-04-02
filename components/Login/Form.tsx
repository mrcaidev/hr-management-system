import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { loginHelper } from "helpers/loginHelper";
import { LoginInput } from "interfaces/form/login";
import Cookies from "js-cookie";
import Router from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const Form = () => {
  const { register, handleSubmit } = useForm<LoginInput>();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit: SubmitHandler<LoginInput> = async data => {
    const { success, message, data: token } = await loginHelper(data);
    if (!success) {
      setErrorMessage(message);
      return;
    }
    Cookies.set("token", token as string);
    Router.push("/");
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
      <TextField
        type="text"
        label="Staff ID"
        {...register("staffId")}
        required
        variant="standard"
        margin="normal"
        fullWidth
        autoComplete="id"
        autoFocus
      />
      <TextField
        type="password"
        label="Password"
        {...register("password")}
        required
        variant="standard"
        margin="normal"
        fullWidth
        autoComplete="password"
      />
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, mb: 2 }}>
        LOG IN
      </Button>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
    </Box>
  );
};
