import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { addPlaceHelper } from "helpers/addPlaceHelper";
import { AddPlaceInput } from "interfaces/form/addPlace";
import Router from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const AddPlaceAction = () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  const { register, handleSubmit } = useForm<AddPlaceInput>();
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit: SubmitHandler<AddPlaceInput> = async data => {
    const updated = await addPlaceHelper(data);
    if (!updated) {
      setErrorMessage("Try again later");
      return;
    }
    closeDialog();
    Router.reload();
  };

  return (
    <>
      <Button variant="contained" onClick={openDialog}>
        Add Working Place
      </Button>
      {open && (
        <Dialog open={open} onClose={closeDialog}>
          <DialogTitle>New working place information</DialogTitle>
          <DialogContent>
            <TextField
              type="text"
              label="Section ID"
              {...register("placeId")}
              required
              variant="standard"
              margin="normal"
              fullWidth
              autoComplete="section-id"
              autoFocus
            />
            <TextField
              type="text"
              label="Street"
              {...register("street")}
              required
              variant="standard"
              margin="normal"
              fullWidth
              autoComplete="street"
            />
            <TextField
              type="text"
              label="Postal code"
              {...register("postalCode")}
              required
              variant="standard"
              margin="normal"
              fullWidth
              autoComplete="postal-code"
            />
            <TextField
              type="text"
              label="city"
              {...register("city")}
              required
              variant="standard"
              margin="normal"
              fullWidth
              autoComplete="city"
            />
            <TextField
              type="text"
              label="Province"
              {...register("province")}
              required
              variant="standard"
              margin="normal"
              fullWidth
              autoComplete="province"
            />
            <TextField
              type="text"
              label="State ID"
              {...register("stateId")}
              required
              variant="standard"
              margin="normal"
              fullWidth
              autoComplete="state-id"
            />
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog}>Cancel</Button>
            <Button onClick={handleSubmit(onSubmit)}>OK</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};
