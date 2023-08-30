import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      repassword: data.get("repassword"),
      nameAndsurname: data.get("nameAndsurname"),
      province: data.get("province"),
      district: data.get("district"),
    });
  };

  /* continaer form */
  return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 18,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1>ລົງທະບຽນ</h1>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 5 }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    required
                    fullWidth
                    id="email"
                    label="ອີີເມວ"
                    autoFocus
                    autoComplete="email-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="password"
                    label="ລະຫັດ"
                    name="password"
                    autoComplete="password-pass"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="repassword"
                    label="ຢືນຢັັນລະຫັດ"
                    name="re-password"
                    autoComplete="password-repass"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="nameAndsurname"
                    label="ຊື່ ແລະ ນາມສະກຸນ"
                    type="nameAndsurname"
                    id="nameAndsurname"
                    autoComplete="nameAndsurname-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="province"
                    label="ແຂວງ"
                    name="province"
                    autoComplete="province-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="district"
                    label="ເມືອງ"
                    name="district"
                    autoComplete="district-name"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                ລົງທະບຽນ
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
  );
}
