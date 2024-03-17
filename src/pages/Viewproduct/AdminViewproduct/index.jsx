
import { useSelector } from "react-redux"
import { Box, Button, Group, Image, Text, TextInput, Textarea,  rem, } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone"
import { IconPhoto, IconUpload, IconX } from "@tabler/icons-react";
import { useState } from "react";
import 'react-image-crop/dist/ReactCrop.css';
import Cropper from "../../../components/imageCropper";
import authApi from "../../../api/Authapi";
import AdminNavbar from "../../../layouts/Navbar/adminNavbar";



function AdminViewProduct() {

    const product = useSelector((state) => state.AuthSlice.singleproduct);
    const user = useSelector((state) => state.AuthSlice.user);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [croppedImages, setCroppedImages] = useState([]);

    const { editProduct } = authApi()


    const [productName, setProductName] = useState(product?.productName || '');
    const [productDescription, setProductDescription] = useState(product?.productDescription || '');
    const [price, setPrice] = useState(product?.price || '');
    const [department, setDepartment] = useState(product?.department || '');


    const blobToBase64 = async (blobUrl) => {
        const response = await fetch(blobUrl);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      };



    const handleSubmitUpdate = async (e) => {

        e.preventDefault()

        const base64Images = await Promise.all(
            croppedImages.map(blobUrl => blobToBase64(blobUrl))
          );

        const editValues = {
            productName,
            productDescription,
            price,
            department,
            images: base64Images,
            userId: user._id,
            productId:product._id
        }
        try {
            const response = await editProduct(editValues)
            
            console.log(response);
        } catch (err) {
            console.log(err);
        }

    }

    const handleDrop = (acceptedFiles, rejectedFiles) => {
        // Handle accepted files
        setUploadedImages(acceptedFiles);
        console.log('Accepted files:', acceptedFiles);

        // Handle rejected files
        console.log('Rejected files:', rejectedFiles);
    };

    const handleCroppedImages = (image) => {
        setCroppedImages((prev) => [...prev, image])
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

                                <Box
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        alignItems: 'center',
                                        justifyContent: "space-between",
                                        padding: "30px"
                                    }}
                                >


                                    <Dropzone
                                        onDrop={(files) => handleDrop(files)}
                                        onReject={(files) => console.log('rejected files', files)}
                                        maxSize={5 * 1024 ** 2}
                                        accept={IMAGE_MIME_TYPE}


                                        style={{ background: "#28282B", color: "whitesmoke" }}

                                    >
                                        <Group justify="center" style={{ pointerEvents: 'none', width: "100%", }}>
                                            <Dropzone.Accept>
                                                <IconUpload
                                                    style={{ width: rem(52), height: rem(52), }}
                                                    stroke={1.5}
                                                />
                                            </Dropzone.Accept>
                                            <Dropzone.Reject>
                                                <IconX
                                                    style={{ width: rem(52), height: rem(52), }}
                                                    stroke={1.5}
                                                />
                                            </Dropzone.Reject>
                                            <Dropzone.Idle>
                                                <IconPhoto
                                                    style={{ width: rem(52), height: rem(52), }}
                                                    stroke={1.5}
                                                />
                                            </Dropzone.Idle>

                                            <div>

                                                <Text size="lg" c="dimmed" inline mt={7}>
                                                    Drag images here or click to select files
                                                </Text>
                                            </div>


                                        </Group>
                                    </Dropzone>
                                </Box>


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
                                            value={productName}
                                            onChange={(e) => setProductName(e.target.value)}
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
                                            value={productDescription}
                                            onChange={(e) => setProductDescription(e.target.value)}
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
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
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
                                            value={department}
                                            onChange={(e) => setDepartment(e.target.value)}
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
                                        <Button
                                            variant="outline"
                                            styles={{
                                                root: { border: "1px solid white", color: "#EDEADE", height: "40px", fontSize: "15px", fontWeight: "700" }
                                            }}

                                            radius={20}

                                            onClick={(e)=>handleSubmitUpdate(e)}

                                        >Update Product</Button>
                                    </Box>


                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Box>


                <Box

                    style={{
                        width: "100%",
                        height: "auto",
                        marginBottom: "10px",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "20px",
                        padding: "30px"
                    }}

                >

                    {uploadedImages?.map((image, index) => (
                        <Cropper key={index} src={URL.createObjectURL(image)} onCropChange={(image) => handleCroppedImages(image)} />

                    ))}

                </Box>


            </Box>

        </>
    )
}

export default AdminViewProduct