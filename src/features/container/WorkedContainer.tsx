import { styled } from "@mui/material";
import { SplitBoxHorizontal } from "../../components/elements/SplitBox"
import { Editor } from "../editor/Editor";

const Container = styled("div")(({theme}) =>
(
    {

    }
));

export const WorkedContainer = () => {

    return (
        <Container>
            <SplitBoxHorizontal sizes={[20, 80]}>
                <div>TREE</div>
                <Editor></Editor>
            </SplitBoxHorizontal>
        </Container>
    )
}