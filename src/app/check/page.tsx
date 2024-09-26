import { Button } from "@radix-ui/themes";

export default function Index(): JSX.Element {
    return (
        <div>
            <div>注文確認</div>
            <div>フランクフルト100本</div>
            <div>合計¥100</div>
            <div>
                <Button>もどる</Button>
                <Button>注文確認</Button>
            </div>
        </div>
    );
}
