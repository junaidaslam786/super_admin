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
  Box
} from "@mui/material";

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
    <Container
      component="main"
      sx={{
        margin: "5rem",
        padding: "2rem",
        backgroundColor: "#171B2A",
        width: "40vw",
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
          borderBottom: "3px solid #00C800",
        },
        "& label": {
          color: "white",
        },
        "@media (max-width:786px)": {
          maxWidth: "100vw",
          width: "95vw",
        },
      }}
    >
      <Typography
        component="h2"
        variant="p"
        sx={{
          fontFamily: "Helvetica",
          letterSpacing: "1px",
          fontSize: "2.5rem",
          fontWeight: 700,
          marginTop: 0,
        }}
      >
        Welcome
      </Typography>
      <Typography
        component="h3"
        variant="p"
        sx={{
          marginTop: "-1rem",
          letterSpacing: "1px",
          color: "#00C800",
          fontSize: "2rem",
          fontWeight: 600,
          marginTop: "1vmin",
        }}
      >
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
          InputLabelProps={{
            sx: {
              fontSize: "1.5rem",
              color:'#00C800'
            },
          }}
          inputProps={{
            sx: {
              marginTop: "1vmin",
            },
          }}
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email && "Error message for email"}
          sx={{
            position: "relative",
            width: "100%",
            marginTop: "1vmin",
            marginBottom: "1rem",
          }}
        />
        <TextField
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          variant="standard"
          InputLabelProps={{
            sx: {
              fontSize: "1.5rem",
              color:'#00C800'
            },
          }}
          inputProps={{
            sx: {
              marginTop: "1vmin",
            },
          }}
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password && "Error message for password"}
          sx={{
            position: "relative",
            width: "100%",
            marginTop: "1vmin",
            marginBottom: "1rem",
          }}
        />
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                name="remember"
                color="primary"
                sx={{
                  color: "#00C800",
                  "&.Mui-checked": {
                    color: "#00C800",
                  },
                }}
              />
            }
            label="Remember me"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          />
          <Link
            href="/forgot-password"
            sx={{
              marginLeft: "1rem",
              color: "#00C800",
              "&:hover": {
                color: "#00C800",
              },
              "&:focus": {
                color: "#00C800",
              },
              "&:visited": {
                color: "#00C800",
              },
              fontSize: "1rem",
              textDecoration: "none",
            }}
          >
            Forgot Password?
          </Link>
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          sx={{
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
          }}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
