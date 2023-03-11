import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Container } from "@mui/system";
import { Button } from "@mui/material";
import "./style.css";

const About = () => {
  return (
    <>
      <Container>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={450}
          margin="auto"
          marginTop={"25px"}
        >
          <TextField
            margin="normal"
            type={"text"}
            label="Full Name"
            variant="standard"
          />
          <TextField
            margin="normal"
            type={"email"}
            label="Email"
            variant="standard"
          />
          <TextField
            margin="normal"
            type={"text"}
            label="Designation"
            variant="standard"
            name="designation"
          />
          <TextField
            margin="normal"
            type={"date"}
            variant="standard"
            name="date"
          />
          <Button variant="contained" className="button">
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default About;
