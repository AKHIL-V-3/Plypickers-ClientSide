import { Box } from "@mantine/core"
import { Outlet } from "react-router-dom"

function HomePage() {

      return (
            <>
                  <Box

                     style={{
                          width:"100%",
                          height:"100vh"

                     }}
                  >
                        <Outlet />
                        
                  </Box>
            </>
      )
}

export default HomePage