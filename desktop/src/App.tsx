import { Container } from "@mui/material"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <Container>
        <h1>CodeTunes</h1>
        <Outlet />
      </Container>
    </>
  )
}

export default App
