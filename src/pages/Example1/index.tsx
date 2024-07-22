import styled from "@emotion/styled";

const Container = styled.section`
    padding: 20px
`;

const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`;

const Card = styled.div`
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Image = styled.img`
    width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
`;

const Text = styled.p`
    font-size: 16px;
`;

export const Example1 = () => {
    return (
        <Container>
            <Title>Example1</Title>
            <Content>
                <Card>
                    <Image src="https://via.placeholder.com/150"
                        alt='Placeholder image'
                    />
                    <Text>sample image 1</Text>
                </Card>
                <Card>
                    <Image src="https://via.placeholder.com/150"
                           alt='Placeholder image'
                    />
                    <Text>sample image 2</Text>
                </Card>
                <Card>
                    <Image src="https://via.placeholder.com/150"
                           alt='Placeholder image'
                    />
                    <Text>sample image 3</Text>
                </Card>
            </Content>
        </Container>
    );
};

