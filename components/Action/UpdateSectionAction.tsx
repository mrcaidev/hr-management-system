import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { updateSectionHelper } from "helpers/updateSectionHelper";
import { UpdateSectionInput } from "interfaces/form/updateSection";
import Router from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const UpdateSectionAction = () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  const { register, handleSubmit } = useForm<UpdateSectionInput>();
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit: SubmitHandler<UpdateSectionInput> = async data => {
    const updated = await updateSectionHelper(data);
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
        Alter section name
      </Button>
      {open && (
        <Dialog open={open} onClose={closeDialog}>
          <DialogTitle>Alter section name</DialogTitle>
          <DialogContent>
            <TextField
              type="text"
              label="Section ID"
              {...register("sectionId")}
              required
              variant="standard"
              margin="normal"
              fullWidth
              autoComplete="section-id"
              autoFocus
            />
            <TextField
              type="text"
              label="Section Name"
              {...register("sectionName")}
              required
              variant="standard"
              margin="normal"
              fullWidth
              autoComplete="section-name"
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
