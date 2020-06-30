import {firebase, googleAuthProvider} from "../firebase/firebase";

export const login = (uid)=>({
    type:"LOGIN",
    uid
});

export const logout = ()=>({
    type:"LOGOUT"
});

const startLogin = ()=>{
    return()=>{
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

const startLogout = ()=>{
    return()=>{
        return firebase.auth().signOut();
    };
};

export {startLogin,startLogout};