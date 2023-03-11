import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Container } from "@mui/system";
import { Button } from "@mui/material";
import "./style.css";
import { useFormik } from "formik";
import { Signup } from "../../validation";

const About = () => {
  const initialValues = {
    fullName: "",
    email: "",
    designation: "",
    date: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Signup,
    onSubmit: () => {
      console.log("daata geche");
      formik.resetForm();
    },
  });

  console.log(formik);

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
          <form onSubmit={formik.handleSubmit}>
            <TextField
              margin="normal"
              type={"text"}
              label="Full Name"
              variant="standard"
              className="input-design"
              name="fullName"
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
            {formik.errors.fullName && formik.touched.fullName ? (
              <p>{formik.errors.fullName}</p>
            ) : null}
            <TextField
              margin="normal"
              type={"email"}
              label="Email"
              variant="standard"
              className="input-design"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <p>{formik.errors.email}</p>
            ) : null}
            <TextField
              margin="normal"
              type={"text"}
              label="Designation"
              variant="standard"
              className="input-design"
              name="designation"
              onChange={formik.handleChange}
              value={formik.values.designation}
            />
            {formik.errors.designation && formik.touched.designation ? (
              <p>{formik.errors.designation}</p>
            ) : null}
            <TextField
              margin="normal"
              type={"date"}
              variant="standard"
              className="input-design"
              name="date"
              onChange={formik.handleChange}
              value={formik.values.date}
            />
            {formik.errors.date && formik.touched.date ? (
              <p>{formik.errors.date}</p>
            ) : null}

            <Button type="submit" variant="contained" className="button">
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default About;
