import { Box, TextField, Button, Typography } from "@mui/material";

function LoginForm() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        border: "1px solid",
        borderColor: "grey.300",
        p: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5">Login</Typography>
      <TextField
        required
        id="email"
        name="email"
        label="Email Address"
        autoComplete="email"
      />
      <TextField
        required
        id="password"
        name="password"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <Button type="submit" variant="contained">
        Sign In
      </Button>
    </Box>
  );
}

export default LoginForm;
