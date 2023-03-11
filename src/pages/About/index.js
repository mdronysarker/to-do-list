// import React from "react";
// import TextField from "@mui/material/TextField";
// import { Box, Container } from "@mui/system";
// import { Button } from "@mui/material";
// import "./style.css";
// import { useFormik } from "formik";
// import { Signup } from "../../validation";
// import { useDispatch, useSelector } from "react-redux";
// import { LoginUser } from "../../features/Slice/CreateSlice";
// import Card from "@mui/material/Card";

// const About = () => {
//   const initialValues = {
//     fullName: "",
//     email: "",
//     designation: "",
//     date: "",
//   };

//   const dispatch = useDispatch();

//   const formik = useFormik({
//     initialValues: initialValues,
//     validationSchema: Signup,
//     onSubmit: (user) => {
//       //   console.log(user);
//       dispatch(LoginUser(user));
//       // retrieve existing values from local storage or initialize an empty array
//       const existingValues = JSON.parse(localStorage.getItem("users")) || [];

//       // add the new user to the existing values array
//       const updatedValues = [...existingValues, user];

//       // store the updated values array in local storage
//       localStorage.setItem("users", JSON.stringify(updatedValues));
//       formik.resetForm();
//     },
//   });

//   //   console.log(formik);
//   const users = useSelector((state) => state.login.loggedIn);
//   console.log(users);

//   return (
//     <>
//       <Container>
//         <Box
//           display="flex"
//           flexDirection={"column"}
//           maxWidth={450}
//           margin="auto"
//           marginTop={"25px"}
//         >
//           <form onSubmit={formik.handleSubmit}>
//             <TextField
//               margin="normal"
//               type={"text"}
//               label="Full Name"
//               variant="standard"
//               className="input-design"
//               name="fullName"
//               onChange={formik.handleChange}
//               value={formik.values.fullName}
//             />
//             {formik.errors.fullName && formik.touched.fullName ? (
//               <p>{formik.errors.fullName}</p>
//             ) : null}
//             <TextField
//               margin="normal"
//               type={"email"}
//               label="Email"
//               variant="standard"
//               className="input-design"
//               name="email"
//               onChange={formik.handleChange}
//               value={formik.values.email}
//             />
//             {formik.errors.email && formik.touched.email ? (
//               <p>{formik.errors.email}</p>
//             ) : null}
//             <TextField
//               margin="normal"
//               type={"text"}
//               label="Designation"
//               variant="standard"
//               className="input-design"
//               name="designation"
//               onChange={formik.handleChange}
//               value={formik.values.designation}
//             />
//             {formik.errors.designation && formik.touched.designation ? (
//               <p>{formik.errors.designation}</p>
//             ) : null}
//             <TextField
//               margin="normal"
//               type={"date"}
//               variant="standard"
//               className="input-design"
//               name="date"
//               onChange={formik.handleChange}
//               value={formik.values.date}
//             />
//             {formik.errors.date && formik.touched.date ? (
//               <p>{formik.errors.date}</p>
//             ) : null}

//             <Button type="submit" variant="contained" className="button">
//               Submit
//             </Button>
//           </form>
//         </Box>
//         {users.map((user) => (
//           <Card key={user.email}>
//             <h1> {user.fullName}</h1>
//             <h1> {user.email}</h1>
//             <h1> {user.designation}</h1>
//             <h1> {user.date}</h1>
//           </Card>
//         ))}
//       </Container>
//     </>
//   );
// };

// export default About;

import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Container } from "@mui/system";
import { Button } from "@mui/material";
import "./style.css";
import { useFormik } from "formik";
import { Signup } from "../../validation";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../features/Slice/CreateSlice";
import Card from "@mui/material/Card";

const About = () => {
  const initialValues = {
    fullName: "",
    email: "",
    designation: "",
    date: "",
  };

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Signup,
    onSubmit: (user) => {
      //   console.log(user);
      dispatch(LoginUser(user));
      // retrieve existing values from local storage or initialize an empty array
      const existingValues = JSON.parse(localStorage.getItem("users")) || [];

      // add the new user to the existing values array
      const updatedValues = [...existingValues, user];

      // store the updated values array in local storage
      localStorage.setItem("users", JSON.stringify(updatedValues));
      formik.resetForm();
    },
  });

  const users = useSelector((state) => state.login.loggedIn);
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

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
        <div className="card">
          {storedUsers.map((user) => (
            <Card className="cards-container " key={user.email}>
              <h3> {user.fullName}</h3>
              <h3> {user.email}</h3>
              <h3> {user.designation}</h3>
              <h3> {user.date}</h3>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
};

export default About;
