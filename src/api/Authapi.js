import axios from 'axios'
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


    const fetchProduct = async () => {
        try {
            const data = await api.get("/getproduct")
            return data
        } catch (err) {
            console.log(err);
        }
    }

    const viewproduct = async (id) => {

        try {
            const data = await api.get(`/viewproduct/${id}`)
            return data.data
        } catch (err) {
            console.log(err);
        }

    }

    const addUserReviewProduct = async (reviewData) => {
        try {
            const data = await api.post('/adduserreview', reviewData)
            console.log(data,'[[[[[[[');
            return data.data
        } catch (err) {
            console.log(err);
        }
    }

    const editProduct = async (reviewData) => {

        console.log(reviewData, '000000000000000000000000000');

        try {
            const data = await api.post('/editproduct', reviewData)
            return data
        } catch (err) {
            console.log(err);
        }
    }


    const addProduct = async () => {
        try {

            const products = await axios.get("https://64e0caef50713530432cafa1.mockapi.io/api/products")

            console.log(products, '5555555555555555555555555555555');


            const data = await api.post('/addproduct', products)
            return data
        } catch (err) {
            console.log(err);
        }
    }

    const getReviewproducts = async () => {
        try {
            const data = await api.get('/getreviewproducts')
            return data
        } catch (err) {
            console.log(err);
        }
    }


    const getReviewproduct = async (proId) => {
        try {
            const data = await api.get(`/getreviewproduct/${proId}`)
            return data
        } catch (err) {
            console.log(err);
        }
    }

    const UpdateUserRequestEdit = async (productData) => {
        try {

            const data = await api.post('/usereditproductreq',productData)
            return data
        } catch (err) {
            console.log(err);
        }

    }
    const getUserRequests = async (userId) => {
        try {
            const data = await api.get(`/userrequests/${userId}`)
            return data
        } catch (err) {
            console.log(err);
        }

    }



    return {
        signUp,
        signIn,
        logout,
        fetchProduct,
        viewproduct,
        addUserReviewProduct,
        editProduct,
        addProduct,
        getReviewproducts,
        getReviewproduct,
        UpdateUserRequestEdit,
        getUserRequests
    }
}

export default authApi