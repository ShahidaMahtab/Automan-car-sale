import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  getIdToken,
} from "firebase/auth";
import useAxios from "./useAxios";

//initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const auth = getAuth();
  const { admin, client } = useAxios();
  //email register
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to db
        saveUser(email, name);

        //send name to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            setError("");
          })
          .catch((error) => {
            setError(error.message);
          });
        history.replace("/");
        // console.log("registered");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //email sign in
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);

        setError("");
        // console.log("signed in");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //observer user current state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        // User is signed out
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribe;
  }, [auth]);
  //admin
  useEffect(() => {
    //axios
    admin.get(`users/${user.email}`).then((response) => {
      setIsAdmin(response.data.admin);
    });
  }, [user.email]);
  //log out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //save user to db
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    //axios
    client.post("/users", user).then((response) => {
      if (response.data.insertedId) {
        alert("registered successfully");
      }
    });
  };
  return {
    user,
    isAdmin,
    token,
    error,
    isLoading,
    registerUser,
    logOut,
    loginUser,
  };
};

export default useFirebase;
