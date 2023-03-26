import { styled } from "@mui/material"

type Props = 
{
    children?: React.ReactNode,
}

const Title = styled("div")(({theme}) => 
(
    {
        borderLeft: `solid 4px ${theme.palette.primary.main}`,
        padding: "4px 0 4px 8px",
        textAlign: "left",
        fontWeight: "bold",
    }
))

export const Header = (props: Props) =>
{
    return <Title>{props.children}</Title>
}