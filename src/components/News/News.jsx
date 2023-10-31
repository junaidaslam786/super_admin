import React from "react";
import {
  TextField,
  Typography,
  Grid,
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";

const News = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#FAFBFC",
        padding: "10vmin 0 10vmin 5vmin",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: "4vmin",
          boxShadow: "0px 0px 2px black",
          width: "70%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "0.3vmin",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "5vmin",
              fontWeight: "600",
              fontFamily: "Helvetica, sans-serif",
            }}
          >
            Add News
          </Typography>
          <Typography
            sx={{
              fontSize: "2vmin",
              color: "#737791",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, accusantium?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "6vmin",
          }}
        >
          <FormControl
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "2vh", marginRight: "2vw" }}
          >
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "#00C800",
                "&.MuiInputLabel-shrink": { color: "#00C800" },
              }}
            >
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="No. of Bedrooms"
            >
              <MenuItem value={0}>iOS</MenuItem>
              <MenuItem value={1}>Android</MenuItem>
              <MenuItem value={2}>HarmonyOS</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "2vh" }}
          >
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "#00C800",
                "&.MuiInputLabel-shrink": { color: "#00C800" },
              }}
            >
              Sub category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="No. of Bedrooms"
            >
              <MenuItem value={0}>Dark</MenuItem>
              <MenuItem value={1}>Light</MenuItem>
              <MenuItem value={2}>Night Shield</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "4vmin",
          }}
        >
          <FormControl
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "2vh", marginRight: "2vw" }}
          >
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "#00C800",
                "&.MuiInputLabel-shrink": { color: "#00C800" },
              }}
            >
              Category Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="No. of Bedrooms"
            >
              <MenuItem value={0}>Dark They Were</MenuItem>
              <MenuItem value={1}>And</MenuItem>
              <MenuItem value={2}>Golden Eyed</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "2vh" }}
          >
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "#00C800",
                "&.MuiInputLabel-shrink": { color: "#00C800" },
              }}
            >
              Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="No. of Bedrooms"
            >
              <MenuItem value={0}>Apple</MenuItem>
              <MenuItem value={1}>Guawa</MenuItem>
              <MenuItem value={2}>Grapes</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            marginTop: "4vmin",
          }}
        >
          <TextField
            label="Title"
            fullWidth
            sx={{ marginBottom: "2vh" }}
            InputLabelProps={{
              style: {
                color: "#00C800",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            marginTop: "4vmin",
          }}
        >
          <TextField
            label="Description"
            multiline
            rows={10}
            variant="outlined"
            fullWidth
            placeholder="Enter your description here..."
            sx={{
              marginBottom: "2vh",
            }}
            InputLabelProps={{
              style: {
                color: "#00C800",
              },
            }}
          />
        </Box>
        <Box
        sx={{
            width:'100%',
            marginTop:'4vmin',
            display:'flex',
            flexDirection:'row',
        }}
        >
          <Grid item sx={{ marginRight: "2vmin", width:'100%' }}>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                border: "0.1vmin solid #00C800",
                color: "#00C800",
                fontSize: "1.5vmin",
                padding:'0',
                width:'100%',
                height: "8vmin",
                "&:hover": {
                  backgroundColor: "#00C800",
                  color: "white",
                  border: "0.1vmin solid #00C800",
                },
              }}
            >
              Featured Images
            </Button>
            <input
              accept=".JPG .PNG .JPEG"
              type="file"
              id="hiddenFileInput"
              style={{ display: "none" }}
            />
          </Grid>
          <Grid item sx={{width:'100%'}}>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                border: "0.1vmin solid #00C800",
                color: "#00C800",
                fontSize: "1.5vmin",
                padding:'0',
                width:'100%',
                height: "8vmin",
                "&:hover": {
                  backgroundColor: "#00C800",
                  color: "white",
                  border: "0.1vmin solid #00C800",
                },
              }}
            >
              Upload Documents
            </Button>
            <input
              accept=".PDF"
              type="file"
              id="hiddenFileInput"
              style={{ display: "none" }}
            />
          </Grid>
        </Box>

        <Box
          sx={{
            marginTop: "6vmin",
            display:'flex',
            flexDirection:'row'
          }}
        >
          <Button
            variant="contained"
            type="submit"
            sx={{
              border: "0.1vmin solid #00C800",
              color: "white",
              fontSize: "1.5vmin",
              backgroundColor: "#00C800",
              padding: "0",
              marginRight:'4vmin',
              width: "20vmin",
              height: "7vmin",
              "&:hover": {
                backgroundColor: "#00C800",
                color: "white",
                border: "0.1vmin solid #00C800",
              },
            }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={{
              border: "0.1vmin solid red",
              color: "white",
              fontSize: "1.5vmin",
              backgroundColor: "red",
              padding: "0",
              width: "20vmin",
              height: "7vmin",
              "&:hover": {
                backgroundColor: "red",
                color: "white",
                border: "0.1vmin solid red",
              },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default News;
