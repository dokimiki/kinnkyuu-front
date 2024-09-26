import { Button, Flex } from "@radix-ui/themes";
import "./count.scss";

export default function count(): JSX.Element {
    return (
        <Flex className="count-section" gap="2">
            <Button className="plus" color="yellow" radius="full" />
            <Flex align="center" className="number-card" justify="center" pl="3px" pr="3px">
                faadfadfsa
            </Flex>
            <Button className="minus" color="yellow" radius="full" />
        </Flex>
    );
}
