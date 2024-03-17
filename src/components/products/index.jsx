import { Box,  Card, Group, Image, Text } from "@mantine/core"

function Products({ product }) {

    return (
        <>

            <Box
                style={{
                    width: "350px",
                    height: "350px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor:"pointer",
                    zIndex:100
                    
                }}

            >
                <Box
                    style={{
                        width: "90%",
                        height: "90%",
                        
                    }}

                >
                    <Card shadow="sm" padding="lg" w="100%" h="100%" style={{background:"#28282B",color:"whitesmoke"}}>
                        <Card.Section>
                            <Image src={product?.image[0]} height={200} alt="Norway" />
                        </Card.Section>

                        <Group position="apart" style={{ marginBottom: 5, marginTop: 12 }}>
                            <Box
                               style={{
                                   display:"flex",
                                   justifyContent:"space-between",
                                   alignItems:"center",
                                   width:"100%"
                               }}
                            >

                            <Text size="15px" style={{fontWeight:650}}>{product?.productName}</Text>
                            <Text style={{fontWeight:650}} >₹ {product.price}</Text>
                            </Box>
                            
                            <Text size="xs" style={{lineHeight: 1.2 , fontWeight:650 }}>
                            {product.productDescription}
                        </Text>
                        </Group>

                        
                    </Card>
                </Box>
            </Box>

        </>
    )
}

export default Products