import axios from "axios";
const apiUrl = `http://localhost:5000/api`;
//Function to Login the Exsisting user
export const FBlogin = ({ email, password }, successFn, errorFn) => {
  axios
    .post(`${apiUrl}/login`, { email, pass1: password })
    .then((d) => {
      if (d.data.err !== undefined) {
        errorFn(d.data);
      } else {
        successFn(d.data);
        console.log(d.data);
        localStorage.setItem("aimnet-user", JSON.stringify(d.data));
      }
    })
    .catch((err) => errorFn(err));
};

//Function to Logout User
export const FBlogout = (successFn, errorFn) => {
  localStorage.removeItem("aimnet-user");
  successFn();
};

//Function to Create New User
export const FBsignup = (
  { randomProfile, email, password, fullName },
  successFn,
  errorFn
) => {
  axios
    .post(`${apiUrl}/signup`, { email, pass1: password, pass2: password })
    .then((d) => {
      if (d.data.err !== undefined) {
        errorFn(d.data);
      } else {
        successFn(d.data);
      }
    })
    .catch((err) => errorFn(err));
};

//Function to get all user data
export const getUserData = (uid, successFn, errorFn) => {};

//Updating Document in FB Firestore
export const updateUserData = (
  userprop,
  { email, name, username, bio, profilePic },
  successFn,
  errorFn
) => {
  axios
    .post(`${apiUrl}/updateprofile`, {
      email: userprop.email,
      name: name,
      username: username,
      profilePic: profilePic,
      bio: bio,
    })
    .then((d) => {
      successFn();
    })
    .catch((err) => {
      errorFn();
    });
};
