import { Button, Flex } from "@radix-ui/themes";
import "./count.scss";

export default function count({
    sauceCount,
    incrementCount,
}: {
    sauceCount: number;
    incrementCount: (value: number) => void;
}): JSX.Element {
    return (
        <Flex className="count-section" gap="2">
            <Button
                className="plus"
                color="yellow"
                onClick={() => {
                    incrementCount(sauceCount);
                }}
                radius="full"
            />
            <Flex align="center" className="number-card" justify="center" pl="5px" pr="5px">
                {sauceCount}
            </Flex>
            <Button className="minus" color="yellow" radius="full" />
        </Flex>
    );
}
