import { useState, useEffect } from "react";

import { getAuth, createUserWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import initializeFirebase from "../pages/Firebase/firbase.init";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const auth = getAuth();

    // register
    const registerUser = (email, password, history, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!

                }).catch((error) => {
                    // An error occurred

                });
                history.replace('/');

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode);
                // ..
            })
            .finally(() => setIsLoading(false))
    }
    // login user
    const loginUser = (email, password, location, history) => {


        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)

                setError('');
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode);
            })
            .finally(() => setIsLoading(false))

    }
    // logout or signout
    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }


    // observe user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
                // ...
            } else {
                setUser({})
            }
            setIsLoading(false)
            return () => unSubscribe;
        });

    }, [])

    return {
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        error
    }

}
export default useFirebase;