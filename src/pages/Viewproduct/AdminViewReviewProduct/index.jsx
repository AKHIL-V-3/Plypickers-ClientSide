
import { useSelector } from "react-redux"
import { Box, Button, Image, Text, TextInput, Textarea, } from "@mantine/core";
import 'react-image-crop/dist/ReactCrop.css';
// import authApi from "../../../api/Authapi";
import AdminNavbar from "../../../layouts/Navbar/adminNavbar";
import authApi from "../../../api/Authapi";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";




function AdminViewreviewProduct() {


    const product = useSelector((state) => state.AuthSlice.singlereviewproduct);
    const api = authApi()
    const navigate = useNavigate()



    const handleSubmitUpdate = async () => {
        const response = await api.UpdateUserRequestEdit(product)

        if (response) {

            Swal.fire({
                position: "center",
                icon: "success",
                title: "product updated sucessfully",
                showConfirmButton: true,
            }).
                then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        navigate("/admin")
                    }

                })

        }
    }



    return (
        <>
            <Box>




                <AdminNavbar />

                <Box
                    style={{
                        marginTop: "60px",
                        color: "whitesmoke"
                    }}
                >

                    <Box
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "600px"
                        }}
                    >

                        <Box
                            style={{
                                display: "flex",
                                width: "80%",
                                height: "80%",
                                justifyContent: "space-between"
                            }}
                        >

                            <Box
                                w={460}
                            >


                                <Image w={460} radius={30} src={product?.image[0]}></Image>

                            </Box>


                            <Box
                                style={{
                                    width: "50%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: 'center'
                                }}
                            >
                                <Box
                                    style={{

                                        width: "90%",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "20px"
                                    }}

                                >
                                    <Box
                                        style={{

                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px"
                                        }}
                                    >
                                        <Text>Product Name</Text>
                                        <TextInput
                                            value={product.productName}

                                            styles={{
                                                input: { padding: "25px", background: "#28282B", color: "#EDEADE", border: "none", outline: "none" }
                                            }}

                                        />
                                    </Box>
                                    <Box
                                        style={{

                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px"
                                        }}

                                    >
                                        <Text>Description</Text>
                                        <Textarea
                                            value={product.productDescription}

                                            styles={{
                                                input: { height: "100px", background: "#28282B", color: "#EDEADE", border: "none", outline: "none" }
                                            }}
                                        />
                                    </Box>

                                    <Box
                                        style={{

                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px"
                                        }}
                                    >
                                        <Text>Product Price</Text>
                                        <TextInput
                                            value={product.price}

                                            styles={{
                                                input: { padding: "25px", background: "#28282B", color: "#EDEADE", border: "none", outline: "none" }
                                            }}

                                        />
                                    </Box>

                                    <Box
                                        style={{

                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px"
                                        }}
                                    >
                                        <Text>Department</Text>
                                        <TextInput
                                            value={product.department}

                                            styles={{
                                                input: { padding: "25px", background: "#28282B", color: "#EDEADE", border: "none", outline: "none" }
                                            }}

                                        />
                                    </Box>

                                    <Box
                                        style={{
                                            marginTop: "30px"
                                        }}
                                    >
                                        {product.Status === "Pending" && <Button
                                            variant="outline"
                                            styles={{
                                                root: { border: "1px solid white", color: "#EDEADE", height: "40px", fontSize: "15px", fontWeight: "700" }
                                            }}

                                            radius={20}

                                            onClick={handleSubmitUpdate}

                                        >Update Product</Button>}
                                    </Box>


                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Box>

            </Box>

        </>
    )
}

export default AdminViewreviewProduct