import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box, Container } from "@mui/material";

function App() {
    return (
        <>
            <Container sx={{background: 'red'}}>
                <Sidebar></Sidebar>
                <Feed></Feed>
                <Rightbar></Rightbar>
            </Container>
        </>
    );
}

export default App;
