import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
        // .then(result => {
        //     setUser(result.user)
        // })
        // .catch(error => {
        //     setError(error.message)
        // })
        // .finally(() => setIsLoading(false))
    };

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
        .catch(error => {
            setError(error.message);
        })
        .finally(() => setIsLoading(false));
    };

    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
            }
            else {
                setUser({});
            };
            setIsLoading(false)
        });
    }, []);

    return {
        user,
        setUser,
        error,
        setError,
        isLoading,
        setIsLoading,
        singInUsingGoogle,
        logOut
    };
};

export default useFirebase;