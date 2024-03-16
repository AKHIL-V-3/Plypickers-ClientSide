import api from '../lib/Axios/index'

const authApi = () => {

    const signUp = async (user) => {
        try {
            const response = await api.post('/signup', user)
            return response
        } catch (err) {
            throw err.response.data.message
        }
    }

    const signIn = async (user) => {
        try {
            const response = await api.post('/signin', user)
            console.log(response, '0000000000000');
            return response
        } catch (err) {
            throw err.response.data.message
        }

    }

    const logout = async () => {
        try {
            const response = await api.get('/logout')
            return response
        } catch (err) {
            throw err.response.data.message
        }
    }

    return {
        signUp,
        signIn,
        logout
    }
}

export default authApi