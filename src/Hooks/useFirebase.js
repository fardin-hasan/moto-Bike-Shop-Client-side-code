import { useState, useEffect } from "react";

import { getAuth, createUserWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import initializeFirebase from "../pages/Firebase/firbase.init";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();


    useEffect(() => {
        fetch(`https://hidden-bayou-70618.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
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
                saveUser(email, name, 'POST');
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

    // save user
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://hidden-bayou-70618.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
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
        admin,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        error
    }

}
export default useFirebase;