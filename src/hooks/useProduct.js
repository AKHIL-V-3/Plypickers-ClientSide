
import authApi from "../api/Authapi"

const useProductHook = ()=>{

    const api = authApi()

    const viewProduct = async (id)=>{

        const response =await api.viewproduct(id) 
        return response
    }

    
    const getReviewproducts = async()=>{
        const response =await api.getReviewproducts() 
        return response
            
    }
    const getReviewProduct = async(proId)=>{
        const response =await api.getReviewproduct(proId) 
        return response
            
    }
    
     return {
         viewProduct, 
         getReviewproducts ,
         getReviewProduct 
     }
      
}

export default useProductHook