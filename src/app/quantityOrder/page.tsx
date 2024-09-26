"use client";

import { Box, Container, Dialog, Flex, Text } from "@radix-ui/themes";
import "./page.scss";
import { useState } from "react";
import Count from "@/src/components/count";

export default function Index(): JSX.Element {
    const [values, setValues] = useState({
        ketchupCount: 0,
        MustardCount: 0,
        ketchupMustardCount: 0,
        saltAndPepperCount: 0,
        normalCount: 0,
    });

    const incrementCount = (): void => {
        setValues((prevState) => ({
            ...prevState,
            ketchupCount: prevState.ketchupCount + 1,
        }));
    };

    return (
        <Box mt="2rem" width="100%">
            <Text ml="6vw" size="6" weight="bold">
                モバイル注文
            </Text>
            <Container size="4">
                <Flex align="center" gap="9" justify="center" m="2rem">
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <img alt="furannku" src="/furanku.png" />
                        </Dialog.Trigger>
                        <Dialog.Content>
                            <Flex direction="column" gap="4" width="100%">
                                <Flex>
                                    <Text size="5" weight="bold">
                                        ケチャップ
                                    </Text>
                                    <Count incrementCount={incrementCount} sauceCount={values.ketchupCount} />
                                </Flex>
                                <Text size="5" weight="bold">
                                    マスタード
                                </Text>
                                <Text size="5" weight="bold">
                                    ケチャマスタード
                                </Text>
                                <Text size="5" weight="bold">
                                    塩コショウ
                                </Text>
                                <Text size="5" weight="bold">
                                    トッピングなし
                                </Text>
                            </Flex>
                        </Dialog.Content>
                    </Dialog.Root>
                    <Text size="5" weight="bold">
                        本
                    </Text>
                </Flex>
                <Flex align="center" gap="9" justify="center" m="2rem">
                    <img alt="cheesefuranku" src="/cheesefuranku.png" />
                    <Text size="5" weight="bold">
                        本
                    </Text>
                </Flex>
            </Container>
        </Box>
    );
}
