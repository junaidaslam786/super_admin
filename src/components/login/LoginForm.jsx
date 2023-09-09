import React from "react";
import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "../../redux/api/authApi";
import { setUser } from "../../redux/features/userSlice";
import { useAppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";

const useStyles = {
  loginContainer: {
    margin: "2rem",
    padding: "2rem",
    backgroundColor: "#171B2A",
    width: "80%",
    maxWidth: "600px",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "roboto",
    "& input": {
      color: "white",
      backgroundColor: "#171B2A",
      borderBottom: "3px solid #00C800",
    },
    "& label": {
      color: "white",
    },
  },
  welcomeText: {
    fontFamily: "Helvetica",
    letterSpacing: "1px",
    fontSize: "2rem",
    fontWeight: 600,
    marginTop: 0,
  },
  loginText: {
    marginTop: "-1rem",
    letterSpacing: "1px",
    color: "#00C800",
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  inputField: {
    position: "relative",
    width: "100%",
    marginBottom: "1rem",
    "& p": {
      fontSize: "1rem",
      marginTop: "1rem",
    },
  },
  rememberContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1rem",
  },
  toggleContainer: {
    display: "flex",
    alignItems: "center",
  },
  forgotLink: {
    marginLeft: "1rem",
    color: "white",
    fontSize: "1rem",
    textDecoration: "none",
  },
  loginButton: {
    height: "3rem",
    width: "100%",
    border: "1px solid white",
    borderRadius: "10px",
    fontFamily: "Helvetica",
    fontSize: "1.25rem",
    color: "#00C800",
    fontWeight: 600,
    marginTop: "1.5rem",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#00C800",
      color: "white",
    },
  },
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const onSubmit = async (data) => {
    try {
      await loginUser(data)
        .unwrap()
        .then((response) => {
          if (response.token) {
            localStorage.setItem("token", response.token);
            dispatch(setUser(response.user));
            navigate("/dashboard");
          }
        });
    } catch (err) {
      console.log("Login Error", err.message);
    }
  };

  return (
    <Container component="main" sx={useStyles.loginContainer}>
      <Typography component="h2" variant="h5" sx={useStyles.welcomeText}>
        Welcome
      </Typography>
      <Typography component="h3" variant="h6" sx={useStyles.loginText}>
        Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          id="email"
          label="Email"
          name="email"
          type="email"
          variant="standard"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email && "Error message for email"}
          sx={useStyles.inputField}
        />
        <TextField
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          variant="standard"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password && "Error message for password"}
          sx={useStyles.inputField}
        />
        <div style={useStyles.rememberContainer}>
          <FormControlLabel
            control={<Checkbox name="remember" color="primary" />}
            label="Remember me"
            sx={useStyles.toggleContainer}
          />
          <Link href="/forgot-password" sx={useStyles.forgotLink}>
            Forgot Password?
          </Link>
        </div>
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          sx={useStyles.loginButton}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
