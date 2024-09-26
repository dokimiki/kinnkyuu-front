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

    const decrementCount = (sausage: string, taste: string): void => {
        const newValues = structuredClone(values);

        if (newValues !== undefined) {
            if ((newValues as any)[sausage][taste] === 0) {
                return;
            }
            (newValues as any)[sausage][taste]--;
            setValues(newValues);
        }
    };

    let frankfurtTotal = 0;
    Object.values(values.frankfurt).forEach((item) => {
        frankfurtTotal += item;
    });

    let cheeseFrankfurtTotal = 0;
    Object.values(values.cheeseFrankfurt).forEach((item) => {
        cheeseFrankfurtTotal += item;
    });

    return (
        <Box mt="2rem" width="100%">
            <Text ml="6vw" size="6" weight="bold">
                モバイル注文
            </Text>
            <Container size="4">
                <Flex align="center" gap="4" justify="center" m="2rem">
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <img alt="furannku" src="/furanku.png" />
                        </Dialog.Trigger>
                        <Dialog.Content>
                            <Flex direction="column" gap="4" width="100%">
                                <Flex justify="between">
                                    <Text size="5" weight="bold">
                                        ケチャップ
                                    </Text>
                                    <Count
                                        decrementCount={decrementCount}
                                        incrementCount={incrementCount}
                                        order={values}
                                        sausage="frankfurt"
                                        taste="ketchupCount"
                                    />
                                </Flex>
                                <Flex justify="between">
                                    <Text size="5" weight="bold">
                                        マスタード
                                    </Text>
                                    <Count
                                        decrementCount={decrementCount}
                                        incrementCount={incrementCount}
                                        order={values}
                                        sausage="frankfurt"
                                        taste="mustardCount"
                                    />
                                </Flex>
                                <Flex justify="between">
                                    <Text size="5" weight="bold">
                                        ケチャマスタード
                                    </Text>
                                    <Count
                                        decrementCount={decrementCount}
                                        incrementCount={incrementCount}
                                        order={values}
                                        sausage="frankfurt"
                                        taste="ketchupMustardCount"
                                    />
                                </Flex>
                                <Flex justify="between">
                                    <Text size="5" weight="bold">
                                        塩コショウ
                                    </Text>
                                    <Count
                                        decrementCount={decrementCount}
                                        incrementCount={incrementCount}
                                        order={values}
                                        sausage="frankfurt"
                                        taste="saltAndPepperCount"
                                    />
                                </Flex>
                                <Flex justify="between">
                                    <Text size="5" weight="bold">
                                        トッピングなし
                                    </Text>
                                    <Count
                                        decrementCount={decrementCount}
                                        incrementCount={incrementCount}
                                        order={values}
                                        sausage="frankfurt"
                                        taste="normalCount"
                                    />
                                </Flex>
                            </Flex>
                        </Dialog.Content>
                    </Dialog.Root>
                    <Flex align="center" className="number-card" justify="center" pl="5px" pr="5px">
                        {frankfurtTotal}
                    </Flex>
                    <Text size="5" weight="bold">
                        本
                    </Text>
                </Flex>

                <Text ml="6vw" size="7" weight="bold">
                    セットで300円
                </Text>

                <Flex align="center" gap="4" justify="center" m="2rem">
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <img alt="furannku" src="/cheesefuranku.png" />
                        </Dialog.Trigger>
                        <Dialog.Content>
                            <Flex direction="column" gap="4" width="100%">
                                <Flex justify="between">
                                    <Text size="5" weight="bold">
                                        ケチャップ
                                    </Text>
                                    <Count
                                        decrementCount={decrementCount}
                                        incrementCount={incrementCount}
                                        order={values}
                                        sausage="cheeseFrankfurt"
                                        taste="ketchupCount"
                                    />
                                </Flex>
                                <Flex justify="between">
                                    <Text size="5" weight="bold">
                                        マスタード
                                    </Text>
                                    <Count
                                        decrementCount={decrementCount}
                                        incrementCount={incrementCount}
                                        order={values}
                                        sausage="cheeseFrankfurt"
                                        taste="mustardCount"
                                    />
                                </Flex>
                                <Flex justify="between">
                                    <Text size="5" weight="bold">
                                        ケチャマスタード
                                    </Text>
                                    <Count
                                        decrementCount={decrementCount}
                                        incrementCount={incrementCount}
                                        order={values}
                                        sausage="cheeseFrankfurt"
                                        taste="ketchupMustardCount"
                                    />
                                </Flex>
                                <Flex justify="between">
                                    <Text size="5" weight="bold">
                                        塩コショウ
                                    </Text>
                                    <Count
                                        decrementCount={decrementCount}
                                        incrementCount={incrementCount}
                                        order={values}
                                        sausage="cheeseFrankfurt"
                                        taste="saltAndPepperCount"
                                    />
                                </Flex>
                                <Flex justify="between">
                                    <Text size="5" weight="bold">
                                        トッピングなし
                                    </Text>
                                    <Count
                                        decrementCount={decrementCount}
                                        incrementCount={incrementCount}
                                        order={values}
                                        sausage="cheeseFrankfurt"
                                        taste="normalCount"
                                    />
                                </Flex>
                            </Flex>
                        </Dialog.Content>
                    </Dialog.Root>

                    <Flex align="center" className="number-card" justify="center" pl="5px" pr="5px">
                        {cheeseFrankfurtTotal}
                    </Flex>

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
