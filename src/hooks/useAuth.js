import { useEffect, useLayoutEffect, useState } from "react";
import { login as loginService } from "../services/auth"
import { handleTokenUpdate } from "../services/utils";
import { useLocalStorage } from "./useLocalStorage";

export function useAuth() {
    // utilizatorul curent
    const [{ user, token }, setUser] = useLocalStorage("itschool-library-user", {
        user: null,
    });

    useLayoutEffect(() => {
        handleTokenUpdate(token);
    }, [token]);

    async function login(credentials) {
        try {
            const userInfo = await loginService(credentials);
            // avem userInfo
            console.log(userInfo);
            const userInfoResult = {
                token: "token-ul este un string",
                user: {
                    email: "andreea@mail.ro",
                    firstName: "Andreea",
                    lastName: "Oprea"
                }
            }
            setUser(userInfo);
        } catch (error) {
            throw error.data.message || "Error"
        }
    }

    function logout() {
    }
    return {
        user,
        login,
        logout
    }
}