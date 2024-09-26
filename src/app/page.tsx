"use client";

import { Box, Container, Dialog, Flex, Text } from "@radix-ui/themes";
import "./page.scss";
import { useState } from "react";
import Count from "@/src/components/count";
import { type Order } from "@/src/types/order";

export default function Index(): JSX.Element {
    const [values, setValues] = useState<Order>({
        frankfurt: {
            ketchupCount: 0,
            mustardCount: 0,
            ketchupMustardCount: 0,
            saltAndPepperCount: 0,
            normalCount: 0,
        },
        cheeseFrankfurt: {
            ketchupCount: 0,
            mustardCount: 0,
            ketchupMustardCount: 0,
            saltAndPepperCount: 0,
            normalCount: 0,
        },
    });

    const incrementCount = (sausage: string, taste: string): void => {
        const newValues = structuredClone(values);

        if (newValues !== undefined) {
            (newValues as any)[sausage][taste]++;
            setValues(newValues);
        }
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
                                    <Count incrementCount={incrementCount} order={values} sausage="frankfurt" taste="ketchupCount" />
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

            <button aria-label="Next" type="button">
                <img alt="つぎへ" src="/next.png" />
            </button>
        </Box>
    );
}
