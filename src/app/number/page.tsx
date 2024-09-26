import { Text } from "@radix-ui/themes";

export default function Index(): JSX.Element {
    return (
        <div>
            <div>おしはらい: 100円</div>
            <div>受け取り番号: 1番</div>
            <Text size="5">※商品受け取り前に画面を閉じないでください。</Text>
        </div>
    );
}
