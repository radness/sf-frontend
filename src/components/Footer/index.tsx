import styled from "@emotion/styled";

const FooterContainer = styled.header`
    background-color: #f6f6f6;
    color: aliceblue;
    padding: 20px;
`;

const FooterText = styled.nav`
    color: black;
    font-size: 16px;
    margin-bottom: 0px;
`;

const SocialMediaLink = styled.a`
    color: black;
    text-decoration: none;
    font-size: 16px;
    margin-left: 10px;

    &:hover {
        text-decoration: underline;
    }
`;

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>2024 Radness sf.</FooterText>
            {/*<div>*/}
            {/*    <SocialMediaLink href="#">Facebook</SocialMediaLink>*/}
            {/*    <SocialMediaLink href="#">Instagram</SocialMediaLink>*/}
            {/*    <SocialMediaLink href="#">X</SocialMediaLink>*/}
            {/*</div>*/}
        </FooterContainer>
    );
};