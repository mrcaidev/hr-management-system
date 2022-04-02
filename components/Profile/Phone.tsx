import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StaffContext } from "contexts/StaffContext";
import { updateInfoHelper } from "helpers/updateInfoHelper";
import { UpdatePhoneInput } from "interfaces/form/updatePhone";
import Router from "next/router";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const Phone = () => {
  const {
    staff: { phone },
  } = useContext(StaffContext);
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit } = useForm<UpdatePhoneInput>();

  const onSubmit: SubmitHandler<UpdatePhoneInput> = async data => {
    setIsEditing(false);
    const { success, message } = await updateInfoHelper(data);
    if (!success) {
      console.error(message);
      return;
    }
    Router.reload();
  };
  return (
    <Box
      component="section"
      sx={{
        py: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderRadius: "20px",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Typography
        component="h3"
        sx={{ fontSize: "35px", fontWeight: "bolder" }}
      >
        Phone
      </Typography>
      {!isEditing && (
        <>
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
          <Typography component="p" sx={{ fontSize: "25px" }}>
            {phone}
          </Typography>
        </>
      )}
      {isEditing && (
        <>
          <Box sx={{ display: "flex" }}>
            <Button onClick={() => setIsEditing(false)}>Cancel</Button>
            <Button onClick={handleSubmit(onSubmit)}>Save</Button>
          </Box>
          <Box component="form">
            <TextField
              type="tel"
              {...register("phone")}
              required
              variant="standard"
              fullWidth
              autoComplete="phone"
              inputProps={{ style: { textAlign: "center" } }}
              placeholder={phone}
            />
          </Box>
        </>
      )}
    </Box>
  );
};
