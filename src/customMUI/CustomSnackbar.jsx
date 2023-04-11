import { Snackbar, Alert } from "@mui/material";

export default ({ open, handleClose, successMessage, errorMessage }) => {
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={errorMessage !== "" ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {errorMessage !== "" ? errorMessage : successMessage}
        </Alert>
      </Snackbar>
    </>
  );
};
