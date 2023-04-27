import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export default function AuthLayout() {
return (
    <Box>
        <Header />
        <h5> LibroSphere </h5>
        <Container maxWidth="xs">
            <Outlet />
        </Container>
    </Box>
  );
}