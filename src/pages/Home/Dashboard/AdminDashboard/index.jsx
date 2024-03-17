import { Box, Image, Table, Text, Title } from "@mantine/core";
import AdminNavbar from "../../../../layouts/Navbar/adminNavbar";
import { useDispatch, useSelector } from "react-redux";
import useProductHook from "../../../../hooks/useProduct";
import { useNavigate } from "react-router-dom";
import { AuthActions } from "../../../../lib/Redux/Slices";
import { useEffect, useState } from "react";




function AdminDashboard() {


      const products = useSelector((state) => state?.AuthSlice?.product)



      const [showproduct, setShowproduct] = useState(true)
      const [reviewproducts, setreviewProducts] = useState([])

      const { viewProduct, getReviewproducts,getReviewProduct } = useProductHook()
      const dispatch = useDispatch()
      const navigate = useNavigate()

      const viewproduct = async (id) => {
            const response = await viewProduct(id)
            dispatch(AuthActions.addsingleProduct(response))
            navigate("/admin/viewproduct")

      }
      const getreviewProduct = async() => {
            setShowproduct(!showproduct)
            const response = await getReviewproducts()
            setreviewProducts(response.data)
      }

      const viewreviewProduct = async(id)=>{
              const response = await getReviewProduct(id)
              dispatch(AuthActions.addsinglereviewProduct(response.data)) 
              
              if(response){
                    navigate("/admin/viewreviewproduct")
              }

      }

      useEffect(() => {
      }, [showproduct])

      return (
            <>
                  <AdminNavbar />

                  <Box
                        style={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "end",
                              color: "whitesmoke"
                        }}
                  >



                        <Box
                              style={{
                                    width: "18%",
                                    height: "100vh",
                                    borderRight: "1px solid",
                                    background: "#28282B",
                                    paddingTop: "70px",
                                    position: "fixed",
                                    top: "0px",
                                    left: "0px",
                                    bottom: "0px",
                                    overflowY: "auto",

                              }}

                        >
                              <Box
                                    style={{
                                          width: "100%",
                                          height: "60px",

                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: 'center',
                                          borderBottom: "1px solid"
                                    }}
                              >
                                    <Title size={25}>Admin DashBoard</Title>

                              </Box>



                              <Box
                                    style={{
                                          display: "flex",
                                          flexDirection: 'column',
                                          gap: '10px',
                                          justifyContent: "center",
                                          marginTop: '20px',
                                          height: 'auto',
                                          width: "100%",
                                          padding: "2px"
                                    }}
                              >
                                    <Box
                                          style={{
                                                width: "100%",
                                                height: "60px",

                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: 'center',
                                                border: "1px solid",
                                                cursor: "pointer"
                                          }}

                                          onClick={() => setShowproduct(true)}
                                    >
                                          <Text size={20}>Product List</Text>

                                    </Box>
                                    <Box
                                          style={{
                                                width: "100%",
                                                height: "60px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: 'center',
                                                border: "1px solid",
                                                cursor: "pointer"
                                          }}

                                          onClick={getreviewProduct}
                                    >
                                          <Text size={20}>User Requests</Text>

                                    </Box>
                              </Box>
                        </Box>


                        {

                              showproduct ?

                                    (

                                          <Box
                                                style={{
                                                      width: "80%",
                                                      paddingTop: "100px",
                                                      paddingRight: "40px"
                                                }}

                                          >
                                                <Table stickyHeader stickyHeaderOffset={60}
                                                      styles={{ table: { background: "#28282B", border: "1px solid" } }}
                                                >
                                                      <Table.Thead
                                                            bg="#28282B"
                                                      >
                                                            <Table.Tr>
                                                                  <Table.Th>No</Table.Th>
                                                                  <Table.Th>ProductName</Table.Th>
                                                                  <Table.Th>Price</Table.Th>
                                                                  <Table.Th>Image</Table.Th>
                                                            </Table.Tr>
                                                      </Table.Thead>
                                                      {
                                                            products?.map((product, index) => {
                                                                  return (
                                                                        <>
                                                                              <Table.Tbody
                                                                                    style={{
                                                                                          border: "1px solid",
                                                                                          cursor: "pointer"
                                                                                    }}
                                                                                    onClick={() => viewproduct(product._id)}
                                                                              >
                                                                                    <Table.Td>{index + 1}</Table.Td>
                                                                                    <Table.Td>{product?.productName}</Table.Td>
                                                                                    <Table.Td>{product?.price}</Table.Td>
                                                                                    <Table.Td
                                                                                          style={{
                                                                                                display: "flex",
                                                                                                alignItems: "center",
                                                                                          }}
                                                                                    >
                                                                                          <Box
                                                                                                style={{
                                                                                                      width: '60px',
                                                                                                      height: "60px",
                                                                                                }}
                                                                                          >
                                                                                                <Image w="100%" h="100%" src={product.image[0]}></Image>
                                                                                          </Box>
                                                                                    </Table.Td>
                                                                              </Table.Tbody>
                                                                        </>
                                                                  )
                                                            })
                                                      }


                                                </Table>



                                          </Box>

                                    ) :

                                    (

                                          <Box
                                                style={{
                                                      width: "80%",
                                                      paddingTop: "100px",
                                                      paddingRight: "40px"
                                                }}

                                          >
                                                <Table stickyHeader stickyHeaderOffset={60}
                                                      styles={{ table: { background: "#28282B", border: "1px solid" } }}
                                                >
                                                      <Table.Thead
                                                            bg="#28282B"
                                                      >
                                                            <Table.Tr>
                                                                  <Table.Th>No</Table.Th>
                                                                  <Table.Th>ProductName</Table.Th>
                                                                  <Table.Th>Price</Table.Th>
                                                                  <Table.Th>Image</Table.Th>
                                                                  <Table.Th>Status</Table.Th>
                                                            </Table.Tr>
                                                      </Table.Thead>
                                                      {
                                                            reviewproducts?.map((product, index) => {
                                                                  return (
                                                                        <>
                                                                              <Table.Tbody
                                                                                    style={{
                                                                                          border: "1px solid",
                                                                                          cursor: "pointer"
                                                                                    }}
                                                                                    onClick={() => viewreviewProduct(product.productId)}
                                                                              >
                                                                                    <Table.Td>{index + 1}</Table.Td>
                                                                                    <Table.Td>{product?.productName}</Table.Td>
                                                                                    <Table.Td>{product?.price}</Table.Td>
                                                                                    <Table.Td
                                                                                          style={{
                                                                                                display: "flex",
                                                                                                alignItems: "center",
                                                                                          }}
                                                                                    >
                                                                                          <Box
                                                                                                style={{
                                                                                                      width: '60px',
                                                                                                      height: "60px",
                                                                                                }}
                                                                                          >
                                                                                                <Image w="100%" h="100%" src={product?.image[0]}></Image>
                                                                                          </Box>
                                                                                    </Table.Td>
                                                                                    <Table.Td style={{ color: product.Status === "Pending" ? "red" : "green" }}>{product.Status}</Table.Td>
                                                                              </Table.Tbody>
                                                                        </>
                                                                  )
                                                            })
                                                      }

                                                </Table>



                                          </Box>


                                    )



                        }







                  </Box >




            </>
      )
}

export default AdminDashboard