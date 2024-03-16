import { Container, Box, TextInput, PasswordInput, Button, Avatar, Title, Alert, Text } from "@mantine/core"
import { IconInfoCircle, IconLock } from '@tabler/icons-react';
import { useForm } from "@mantine/form"
import useAuthHook from "../../../hooks/useAuth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import {AuthActions} from "../../../lib/Redux/Slices"



function LoginPage() {

    const { signInWithEmail } = useAuthHook()
    const icon = <IconInfoCircle />
    const [error, setError] = useState()
    const [opened, setOpened] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const form = useForm({
        initialValues: { email: '', password: '' },
        validate: {
            email: (value) => {
                return value ?
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                        ? null
                        : 'Please enter a valid email address'
                    : "Please enter your email address"
            },
            password: (value) => {
                if (value.length < 1) return 'Enter your password'
                if (value.length < 6) return 'Password should be atlease 6 characters'
                return null;
            },
        }
    });

    const handleSubmit = async (values) => {
        try {
            const response = await signInWithEmail(values)
            dispatch(AuthActions.addUser(response))
            if (response.data.admin) {
                navigate("/admin")
            } else {
                navigate("/")
            }
        } catch (err) {
            setError(err)
            setOpened(true)
        }

    }

    return (
        <>
            <>
                <Container>
                    <Box
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                            height: "100vh",
                            color: "#EDEADE"
                        }}
                    >
                        <Box
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                width: "50%",
                                height: "auto",
                                gap: "30px"
                            }}


                        >
                            <Box

                                style={{
                                    height: "75%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "30px",

                                }}
                            >

                                <Box
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: "10px"
                                    }}
                                >

                                    <Avatar size={50}>
                                        <IconLock />
                                    </Avatar>
                                    <Title size={25}>Welcome</Title>
                                </Box>


                                <Box
                                    component="form"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "20px",
                                        width: "370px",
                                    }}

                                    onSubmit={form.onSubmit((values) => handleSubmit(values))}
                                >

                                    <Box
                                        style={{
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "start"
                                        }}
                                    >
                                        <Title size={25}>Signin</Title>
                                    </Box>

                                    {opened &&
                                        <Alert withCloseButton onClose={() => setOpened(false)}
                                            opened={opened} variant="light" color="red" title={error} styles={{ message: { color: "red" } }} icon={icon} />

                                    }

                                    <TextInput
                                        placeholder="name@domain.com"
                                        styles={{
                                            input: { padding: "25px", background: "#28282B", color: "#EDEADE" }
                                        }}
                                        {...form.getInputProps('email')}
                                    />
                                    <PasswordInput
                                        placeholder="******************"
                                        styles={{
                                            input: { padding: "25px", background: "#28282B", color: "#EDEADE" }
                                        }}
                                        {...form.getInputProps('password')}
                                    />
                                    <Button
                                        variant="outline"
                                        styles={{
                                            root: { border: "1px solid white", color: "#EDEADE", height: "40px", fontSize: "15px", fontWeight: "700" }
                                        }}
                                        type="submit"
                                    >Signin</Button>

                                </Box>

                                <Box>

                                    <Text>Are you new here?  <Link style={{color:"#6495ED"}} to="/signup">Register</Link></Text>

                                </Box>

                            </Box>








                        </Box>
                    </Box>
                </Container>
            </>

        </>
    )
}

export default LoginPage