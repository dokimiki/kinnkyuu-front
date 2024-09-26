"use client";

import { Button, Dialog, Flex, Text } from "@radix-ui/themes";
import "./page.scss";
import { useEffect, useState } from "react";
import Count from "@/src/components/count";
import { type Order } from "@/src/types/order";
import { type Save } from "@/src/types/save";

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

    let frankfurtTotal = 0;
    Object.values(values.frankfurt).forEach((item) => {
        frankfurtTotal += item;
    });

    let cheeseFrankfurtTotal = 0;
    Object.values(values.cheeseFrankfurt).forEach((item) => {
        cheeseFrankfurtTotal += item;
    });

    function handleNext(): void {
        let price = 0;

        price += Math.min(frankfurtTotal, cheeseFrankfurtTotal) * 300;
        price += Math.abs(frankfurtTotal - cheeseFrankfurtTotal) * 200;

        const save = localStorage.getItem("save");
        if (save !== null) {
            const parsed: Save = JSON.parse(save);
            parsed.order = values;
            parsed.total = price;
            localStorage.setItem("save", JSON.stringify(parsed));
        } else {
            const parsed: Save = {
                name: "",
                order: values,
                orderNumber: "",
                total: price,
                isOrdered: false,
            };
            localStorage.setItem("save", JSON.stringify(parsed));
        }

        document.location.href = "/name";
    }

    useEffect(() => {
        const save = localStorage.getItem("save");
        if (save !== null) {
            const parsed: Save = JSON.parse(save);

            if (parsed.isOrdered) {
                document.location.href = "/number";
                return;
            }

            setValues(parsed.order);
        }
    }, [setValues]);

    useEffect(() => {
        const nextButton = document.querySelector("#next-button");
        const nextButtonImg = document.querySelector("#next-button img");

        if (
            values.frankfurt.ketchupCount +
                values.frankfurt.mustardCount +
                values.frankfurt.ketchupMustardCount +
                values.frankfurt.saltAndPepperCount +
                values.frankfurt.normalCount +
                values.cheeseFrankfurt.ketchupCount +
                values.cheeseFrankfurt.mustardCount +
                values.cheeseFrankfurt.ketchupMustardCount +
                values.cheeseFrankfurt.saltAndPepperCount +
                values.cheeseFrankfurt.normalCount ===
            0
        ) {
            nextButton?.setAttribute("aria-disabled", "true");
            nextButton?.setAttribute("disabled", "true");
            nextButtonImg?.setAttribute("src", "/nextend.png");
            nextButtonImg?.setAttribute("alt", "つぎへ");
            nextButtonImg?.parentElement?.setAttribute("aria-disabled", "true");
        } else {
            nextButton?.setAttribute("aria-disabled", "false");
            nextButton?.removeAttribute("disabled");
            nextButtonImg?.setAttribute("src", "/next.png");
            nextButtonImg?.setAttribute("alt", "つぎへ");
            nextButtonImg?.parentElement?.setAttribute("aria-disabled", "false");
        }
    }, [values]);

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

    return (
        <Flex align="center" direction="column" mt="2rem" width="100%">
            <Text ml="3vw" size="8" weight="bold">
                モバイル注文
            </Text>
            <Flex align="center" gap="4" justify="center" m="1rem" mt="2rem">
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
                        <Dialog.Close>
                            <Flex justify="end">
                                <Button color="gray" mt="1rem" variant="soft">
                                    Close
                                </Button>
                            </Flex>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Root>
                <Flex align="center" className="number-card" justify="center" pl="5px" pr="5px">
                    {frankfurtTotal}
                </Flex>
                <Text size="5" weight="bold">
                    本
                </Text>
            </Flex>

            <Text ml="3vw" size="7" weight="bold">
                セットで300円
            </Text>

            <Flex align="center" gap="4" justify="center" m="1rem">
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
                        <Dialog.Close>
                            <Flex justify="end">
                                <Button color="gray" mt="1rem" variant="soft">
                                    Close
                                </Button>
                            </Flex>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Root>

                <Flex align="center" className="number-card" justify="center" pl="5px" pr="5px">
                    {cheeseFrankfurtTotal}
                </Flex>

                <Text size="5" weight="bold">
                    本
                </Text>
            </Flex>

            <button aria-label="Next" id="next-button" onClick={handleNext} type="button">
                <img alt="つぎへ" src="/nextend.png" />
            </button>
        </Flex>
    );
}
