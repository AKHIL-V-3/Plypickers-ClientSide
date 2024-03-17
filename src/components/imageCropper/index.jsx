import { Box, Button, Image } from "@mantine/core"
import { useState } from "react"
import ReactCrop from "react-image-crop"


function Cropper({ src, onCropChange }) {

    const [crop, setCrop] = useState({ aspect: 1 });
    const [croppedImageUrl, setCroppedImageUrl] = useState(null);
   
    const handleCropComplete = () => {
        const canvas = document.createElement('canvas');
        canvas.width = crop.width;
        canvas.height = crop.height;

        const ctx = canvas.getContext("2d");

        const image = document.createElement('img');
        image.onload = () => {
            ctx.drawImage(
                image,
                crop.x, crop.y, crop.width, crop.height,
                0, 0, crop.width, crop.height
            );

            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                setCroppedImageUrl(url);
                onCropChange(url);
            });
        };
        image.src = src;
    };

    const handleAfterCrop = () => {
        setCroppedImageUrl(null)
    }



    return (
        <>
            <Box style={{ width: "100%", height: "auto", display: "flex", gap: "20px", alignItems: "center" }}>

                <Box
                    style={{

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <ReactCrop crop={crop} onChange={(c) => {
                        setCrop(c)
                    }}
                    >
                     {src && <Image radius="sm" src={src} />}
                    </ReactCrop>

                    {src && <Button
                        variant="outline"
                        styles={{
                            root: { border: "1px solid white", marginTop: "20px", color: "#EDEADE", height: "40px", fontSize: "15px", fontWeight: "700" }
                        }}
                        onClick={handleCropComplete}
                    >Crop Image</Button>}
                </Box>

                <Box

                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end"
                    }}

                >
                    {croppedImageUrl &&
                        <>
                            <img src={croppedImageUrl} alt="Croppedd" />
                            <Button
                                variant="outline"
                                styles={{
                                    root: { border: "1px solid white", marginTop: "20px", color: "#EDEADE", height: "40px", fontSize: "15px", fontWeight: "700" }
                                }}
                                onClick={handleAfterCrop}
                            >Ok</Button>
                        </>
                    }
                </Box>



            </Box>

        </>
    );
}

export default Cropper;
