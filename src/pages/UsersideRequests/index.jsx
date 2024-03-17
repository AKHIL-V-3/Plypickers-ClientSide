import { Box, Image, Table } from "@mantine/core"
import Navbar from "../../layouts/Navbar"
import { useSelector } from "react-redux"

function UserSideRequests() {

    
    const userRequests = useSelector((state) => state.AuthSlice.userReq)

    return (

        <>
            <Navbar />

            <Box

                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                    paddingTop:"70px",
                    color:"whitesmoke"
                }}
            >

                <Box

                   style={{

                       width:"80%"
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
                        userRequests?.map((product, index) => {
                            return (
                                <>
                                    <Table.Tbody
                                        style={{
                                            border: "1px solid",
                                            cursor: "pointer"
                                        }}
                                       
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


                



            </Box>


        </>
    )

}

export default UserSideRequests