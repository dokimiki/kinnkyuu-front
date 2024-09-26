import { Button, Flex } from "@radix-ui/themes";
import "./count.scss";
import { type Order } from "@/src/types/order";

export default function count({
    sausage,
    taste,
    order,
    incrementCount,
    decrementCount,
}: {
    sausage: string;
    taste: string;
    order: Order | undefined;
    incrementCount: (sausage: string, taste: string) => void;
    decrementCount: (sausage: string, taste: string) => void;
}): JSX.Element {
    return (
        <Flex className="count-section" gap="2">
            <Button
                className="minus"
                color="yellow"
                onClick={() => {
                    decrementCount(sausage, taste);
                }}
                radius="full"
            />

            <Flex align="center" className="number-card" justify="center" pl="5px" pr="5px">
                {order[sausage][taste]}
            </Flex>

            <Button
                className="plus"
                color="yellow"
                onClick={() => {
                    incrementCount(sausage, taste);
                }}
                radius="full"
            />
        </Flex>
    );
}
