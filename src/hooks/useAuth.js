
import authApi from "../api/Authapi"

const useAuthHook = () => {

    const api = authApi()

    const signupWithEmail = async (user) => {
        try {
            if (user.email.trim().length === 0) throw "Email is required"
            if (user.email.trim().length < 2) throw "Email is not valid"
            const response = await api.signUp(user)
            return response

        } catch (err) {
            const error = err
            throw error
        }
    }

    const signInWithEmail = async (user) => {
        try {
            if (user.email.trim().length === 0) throw "Email is required"
            if (user.email.trim().length < 2) throw "Email is not valid"
            const response = await api.signIn(user)
            return response

        } catch (err) {
            const error = err
            throw error
        }

    }

    const Logout = async () => {
        try {
            const response = await api.logout()
            return response

        } catch (err) {
            const error = err
            throw error
        }

    }

    return {
        signupWithEmail,
        signInWithEmail,
        Logout
    }
}

export default useAuthHook