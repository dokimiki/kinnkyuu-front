import { Button, Flex } from "@radix-ui/themes";
import "./count.scss";

export default function count(): JSX.Element {
    return (
        <Flex className="count-section" gap="1">
            <Button className="plus" color="yellow" radius="full" />
            <Button className="minus" color="yellow" radius="full" />
        </Flex>
    );
}
