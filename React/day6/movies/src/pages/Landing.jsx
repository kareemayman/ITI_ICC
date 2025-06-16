import React, { useState } from "react"
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Stack,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormGroup,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material"
import { Visibility, VisibilityOff, Email, Lock, Person, Public, Movie } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { login } from "../redux/slices/loginSlice"
import { useNavigate } from "react-router-dom"

const countries = [
  "Egypt",
  "USA",
  "UK",
  "France",
  "Germany",
  "Japan",
  "India",
  "Canada",
  "Australia",
]
const categories = [
  "Action",
  "Comedy",
  "Drama",
  "Horror",
  "Sci-Fi",
  "Romance",
  "Animation",
  "Documentary",
]

export default function Landing() {
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ email: "", password: "" })
  const [remember, setRemember] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "male",
    country: "",
    category: "",
  })
  const [signupShowPassword, setSignupShowPassword] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleShowPassword = () => setShowPassword((show) => !show)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login())
    navigate("/movies")
  }

  // Sign Up Handlers
  const handleSignupChange = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value })
  }
  const handleSignupShowPassword = () => setSignupShowPassword((show) => !show)
  const handleSignupSubmit = (e) => {
    e.preventDefault()
    // You can add validation or API call here
    dispatch(login())
    navigate("/movies")
  }

  return (
    <div
      className="container"
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!showSignUp && (
        <Paper
          elevation={8}
          sx={{
            p: 4,
            maxWidth: 400,
            width: "100%",
            borderRadius: 3,
            background: "#00000060",
          }}
        >
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <Typography variant="h4" color="#ffcc00" fontWeight="bold" gutterBottom>
              Welcome to Movie App
            </Typography>
            <Typography variant="subtitle1" color="#ffcc00">
              Sign in to continue
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: "#ffcc00" }} />
                  </InputAdornment>
                ),
                sx: { background: "#222", borderRadius: 2, color: "#ffcc00" },
              }}
              InputLabelProps={{ style: { color: "#ffcc00" } }}
            />
            <TextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: "#ffcc00" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end" sx={{ color: "#ffcc00" }}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                sx: { background: "#222", borderRadius: 2, color: "#ffcc00" },
              }}
              InputLabelProps={{ style: { color: "#ffcc00" } }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  sx={{
                    color: "#ffcc00",
                    "&.Mui-checked": { color: "#ffcc00" },
                  }}
                />
              }
              label={<span style={{ color: "#ffcc00" }}>Remember me</span>}
              sx={{ mt: 1, mb: 2 }}
            />
            <Stack direction="row" spacing={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  py: 1.5,
                  fontWeight: "bold",
                  background: "#ffcc00",
                  color: "#222",
                  "&:hover": { background: "#ffd700" },
                }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                sx={{
                  py: 1.5,
                  fontWeight: "bold",
                  borderColor: "#ffcc00",
                  color: "#ffcc00",
                  "&:hover": {
                    borderColor: "#ffd700",
                    background: "#222",
                  },
                }}
                onClick={() => setShowSignUp(true)}
              >
                Sign Up
              </Button>
            </Stack>
          </form>
        </Paper>
      )}

      {showSignUp && (
        <Paper
          elevation={8}
          sx={{
            p: 4,
            maxWidth: 500,
            width: "100%",
            borderRadius: 3,
            background: "#00000060",
          }}
        >
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <Typography variant="h4" color="#ffcc00" fontWeight="bold" gutterBottom>
              Create Account
            </Typography>
            <Typography variant="subtitle1" color="#ffcc00">
              Sign up to get started
            </Typography>
          </Box>
          <form onSubmit={handleSignupSubmit}>
            <Stack spacing={2}>
              <TextField
                label="First Name"
                name="firstName"
                value={signupForm.firstName}
                onChange={handleSignupChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person sx={{ color: "#ffcc00" }} />
                    </InputAdornment>
                  ),
                  sx: { background: "#222", borderRadius: 2, color: "#ffcc00" },
                }}
                InputLabelProps={{ style: { color: "#ffcc00" } }}
              />
              <TextField
                label="Last Name"
                name="lastName"
                value={signupForm.lastName}
                onChange={handleSignupChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person sx={{ color: "#ffcc00" }} />
                    </InputAdornment>
                  ),
                  sx: { background: "#222", borderRadius: 2, color: "#ffcc00" },
                }}
                InputLabelProps={{ style: { color: "#ffcc00" } }}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={signupForm.email}
                onChange={handleSignupChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: "#ffcc00" }} />
                    </InputAdornment>
                  ),
                  sx: { background: "#222", borderRadius: 2, color: "#ffcc00" },
                }}
                InputLabelProps={{ style: { color: "#ffcc00" } }}
              />
              <TextField
                label="Password"
                name="password"
                type={signupShowPassword ? "text" : "password"}
                value={signupForm.password}
                onChange={handleSignupChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: "#ffcc00" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleSignupShowPassword}
                        edge="end"
                        sx={{ color: "#ffcc00" }}
                      >
                        {signupShowPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: { background: "#222", borderRadius: 2, color: "#ffcc00" },
                }}
                InputLabelProps={{ style: { color: "#ffcc00" } }}
              />

              <FormControl fullWidth>
                <InputLabel sx={{ color: "#ffcc00", "&.Mui-focused": { color: "#ffcc00" } }}>
                  Country
                </InputLabel>
                <Select
                  name="country"
                  value={signupForm.country}
                  onChange={handleSignupChange}
                  required
                  startAdornment={
                    <InputAdornment position="start">
                      <Public sx={{ color: "#ffcc00" }} />
                    </InputAdornment>
                  }
                  sx={{
                    background: "#222",
                    borderRadius: 2,
                    color: "#ffcc00",
                    ".MuiSvgIcon-root": { color: "#ffcc00" },
                  }}
                  inputProps={{
                    sx: { color: "#ffcc00" },
                  }}
                  label="Country"
                >
                  {countries.map((country) => (
                    <MenuItem key={country} value={country}>
                      {country}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel sx={{ color: "#ffcc00", "&.Mui-focused": { color: "#ffcc00" } }}>
                  Favorite Category
                </InputLabel>
                <Select
                  name="category"
                  value={signupForm.category}
                  onChange={handleSignupChange}
                  required
                  startAdornment={
                    <InputAdornment position="start">
                      <Movie sx={{ color: "#ffcc00" }} />
                    </InputAdornment>
                  }
                  sx={{
                    background: "#222",
                    borderRadius: 2,
                    color: "#ffcc00",
                    ".MuiSvgIcon-root": { color: "#ffcc00" },
                  }}
                  inputProps={{
                    sx: { color: "#ffcc00" },
                  }}
                  label="Favorite Category"
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl component="fieldset" sx={{ color: "#ffcc00" }}>
                <FormLabel
                  component="legend"
                  sx={{ color: "#ffcc00", "&.Mui-focused": { color: "#ffcc00" } }}
                >
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  value={signupForm.gender}
                  onChange={handleSignupChange}
                >
                  <FormControlLabel
                    value="male"
                    control={
                      <Radio sx={{ color: "#ffcc00", "&.Mui-checked": { color: "#ffcc00" } }} />
                    }
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={
                      <Radio sx={{ color: "#ffcc00", "&.Mui-checked": { color: "#ffcc00" } }} />
                    }
                    label="Female"
                  />
                </RadioGroup>
              </FormControl>

              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    py: 1.5,
                    fontWeight: "bold",
                    background: "#ffcc00",
                    color: "#222",
                    "&:hover": { background: "#ffd700" },
                  }}
                >
                  Sign Up
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  sx={{
                    py: 1.5,
                    fontWeight: "bold",
                    borderColor: "#ffcc00",
                    color: "#ffcc00",
                    "&:hover": {
                      borderColor: "#ffd700",
                      background: "#222",
                    },
                  }}
                  onClick={() => setShowSignUp(false)}
                >
                  Back to Login
                </Button>
              </Stack>
            </Stack>
          </form>
        </Paper>
      )}
    </div>
  )
}
