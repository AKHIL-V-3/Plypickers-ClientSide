import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mantine/core";
import Navbar from "../../../../layouts/Navbar";
import Products from "../../../../components/products";
import useProductHook from "../../../../hooks/useProduct";
import { AuthActions } from "../../../../lib/Redux/Slices";
import { useNavigate } from "react-router-dom";



function UserDashboard() {
    
    const {viewProduct} = useProductHook()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const products = useSelector((state) => state?.AuthSlice?.product)

    const viewproduct = async(id)=>{ 
        const response = await viewProduct(id)
        dispatch(AuthActions.addsingleProduct(response))
        navigate("/viewproduct")
    }
    

    return (
        <>

            <>
                <Navbar />

                <Box
                    style={{
                        marginTop: "70px",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "30px"
                    }}
                >

                    {
                        products?.map((product)=>{
                            return (
                                <Box key={product._id} onClick={()=>viewproduct(product._id)} >
                                    <Products    product ={product}/>  
                                </Box>
                            )

                        })
                    }
                </Box>
            </>
        </>
    )
}

export default UserDashboard