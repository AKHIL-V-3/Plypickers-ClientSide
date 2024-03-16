import { Box } from "@mantine/core"
import { Outlet } from "react-router-dom"

function HomePage() {

      return (
            <>
                  <Box>
                        <Outlet />
                  </Box>
            </>
      )
}

export default HomePage