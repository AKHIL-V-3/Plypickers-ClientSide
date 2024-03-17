import { Avatar, Box, Divider, Menu, Text, Title } from "@mantine/core"
import "./index.css"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import useAuthHook from "../../hooks/useAuth"
import { AuthActions } from "../../lib/Redux/Slices"
import authApi from "../../api/Authapi"
import { useEffect } from "react"

function AdminNavbar() {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { Logout } = useAuthHook()

    const { fetchProduct } = authApi()

    async function getData() {
        const data = await fetchProduct()
        console.log(data, 'xxxxxxxxxxxxxxxxx');
        dispatch(AuthActions.addProducts(data.data))
    }

    useEffect(() => {
        getData()
    }, [])

    const user = useSelector((state) => state.AuthSlice.user)
    const userName = user.data.email.split("@")[0]

    const handlelogout = async () => {
        const response = await Logout()
        dispatch(AuthActions.removeUser())
        if (response.status === 200) {
            navigate("/signin")
        }
    }

    console.log(user,'000000000000000000000000000000000000000000000000000');

    useEffect(() => {
        if (user.data.admin === false) {
            navigate("/")
        }
    }, [navigate,user.data.admin])

     

    return (
        <>
            <Box
                style={{
                    background: "#28282B",
                    width: "100%",
                    height: "60px",
                    position: "fixed",
                    top: "0px",
                    right: "0px",
                    zIndex: 20,
                    color: "whitesmoke",
                    display:"flex",
                    justifyContent:"center",
                    borderBottom:"2px solid"
                }}
            >

                <Box
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "80%",
                        padding: "5px"
                    }}
                >


                    <Box
                      style={{
                          display:"flex",
                          alignItems:"center",
                          gap:"10px",
                          cursor:"pointer"
                      }}
                    >

                        <Avatar variant="filled" radius="sm" src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/11/03/83/110383a0-5604-61a9-346b-f5c7a0f95c46/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/512x512bb.jpg" />

                        <Title size={30}>Plypicker</Title>

                    </Box>



                    <Box
                        style={{
                            width: "20%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",

                        }}
                    >




                        <Box>
                            <Menu width={200} shadow="md" position="bottom-end">
                                <Menu.Target>

                                    <Box className="element">
                                        <Text size="16px" style={{ fontWeight: 600 }} px={30}>{userName}</Text>
                                        <Avatar m={3} size={40} src="https://cdn-icons-png.flaticon.com/512/219/219970.png"></Avatar>
                                    </Box>

                                </Menu.Target>

                                <Menu.Dropdown

                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "10px",
                                        background: "#343434",
                                        position: "fixed",
                                        top: "60px"

                                    }}
                                >
                                    <Menu.Item
                                        color="white"
                                    >
                                        <Box
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px",
                                            }}
                                        >
                                            <Avatar radius="xl" size={32} src="https://cdn-icons-png.flaticon.com/512/219/219970.png" />
                                            <Title size="lg">{userName}</Title>
                                        </Box>
                                    </Menu.Item>

                                    <Divider />
                                    <Menu.Item
                                        color="white"
                                        onClick={handlelogout}
                                    >
                                        <Box>
                                            Sign Out
                                        </Box>

                                    </Menu.Item>

                                </Menu.Dropdown>
                            </Menu>
                        </Box>







                        {/* <Box className="element">
                            <Text size="16px" style={{ fontWeight: 600 }} px={30}>Ramu</Text>
                            <Avatar m={3} size={40} src="https://cdn-icons-png.flaticon.com/512/219/219970.png"></Avatar>
                        </Box> */}
                    </Box>

                </Box>

            </Box>
        </>
    )
}
export default AdminNavbar