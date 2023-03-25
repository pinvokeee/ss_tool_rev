import { styled } from "@mui/material";
import { AppHeader } from "../AppHeader/AppHeader";

const Container = styled("div")(({theme}) => 
(
    {
        display: "grid",
        gridTemplateRows: "auto minmax(0, 1fr) auto",
    }
));

export const MainContainer = () =>
{
    return (
        <Container>
            <AppHeader></AppHeader>
        </Container>
    );
}