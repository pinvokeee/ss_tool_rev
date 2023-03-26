import { styled } from "@mui/material";
import { RecoilRoot } from "recoil";
import { AppHeader } from "../appHeader/AppHeader";
import { WorkedContainer } from "./WorkedContainer";

const Container = styled("div")(({theme}) => 
(
    {
        display: "grid",
        gridTemplateRows: "auto minmax(0, 1fr) auto",
        width: "100vw",
        height: "100vh",
    }
));

export const MainContainer = () =>
{
    return (
        <RecoilRoot>
            <Container>
                <AppHeader></AppHeader>
                <WorkedContainer></WorkedContainer>
            </Container>
        </RecoilRoot>
    );
}