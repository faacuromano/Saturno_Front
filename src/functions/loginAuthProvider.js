import { useEffect, useState } from "react"

/* This function will allow us to prevail 
user info to persist the current session
between either clients or professionals */

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        const localUserStr = window.localStorage.getItem('current_user');
        try {
            const localUser = JSON.parse(localUserStr);
            setCurrentUser(localUser);
        } catch (ex) {
            setCurrentUser(null);

        }
    }, []);

}