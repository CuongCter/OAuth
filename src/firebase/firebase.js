import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
    FacebookAuthProvider
  } from "firebase/auth";
  import { app } from "./init";
  
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(); // google authentication
  const gihtubProvider = new GithubAuthProvider(); // github authentication
  const fbAuthProvider = new FacebookAuthProvider(); // facebook authentication
  
  /**
   * 
   * @param {string} email
   * @param {string} password
   * @returns
   *
   * 
   * 
   *
   */
  export async function CreateNewUser(email, password) {
    // let's add some validation
    if (!email) throw new Error("Email can not be empty");
    if (!password) throw new Error("Password can not be Empty");
  
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredentials;
  }
  
  export async function LoginUser(email, password) {
    if (!email) throw new Error("Email can not be empty");
    if (!password) throw new Error("Password can not be Empty");
  
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  }
  
 
  export const GoogleAuth = async () => {
    const userAuth = await signInWithPopup(auth, provider)
    return userAuth;
  }
  
  export const GithubAuth = async () => {
    const userAuth = await signInWithPopup(auth, gihtubProvider);
    return userAuth;
  }
  
  
  export const FacebookAuth = async () => {
    try {
      const fbAuth = signInWithPopup(auth, fbAuthProvider);
      return fbAuth;
    } catch (error) {
      console.log(error);
    }
  }