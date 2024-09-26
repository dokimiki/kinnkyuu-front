import { Box, Container, Flex, Text } from "@radix-ui/themes";
import "./quantityOrder.scss";

export default function quantityOrder({ furanku, cheesefuranku }: { furanku: number; cheesefuranku: number }): JSX.Element {
    return (
        <Box mt="2rem" width="100%">
            <Text ml="6vw" size="6" weight="bold">
                モバイル注文
            </Text>
            <Container size="4">
                <Flex align="center" gap="9" justify="center" m="2rem">
                    <img alt="furannku" src="/furanku.png" />
                    <Text size="5" weight="bold">
                        {furanku}本
                    </Text>
                </Flex>
                <Flex align="center" gap="9" justify="center" m="2rem">
                    <img alt="cheesefuranku" src="/cheesefuranku.png" />
                    <Text size="5" weight="bold">
                        {cheesefuranku}本
                    </Text>
                </Flex>
            </Container>
        </Box>
    );
}
