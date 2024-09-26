import { Text } from "@radix-ui/themes";
import Link from "next/link";

export default function Index(): JSX.Element {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem",
            }}
        >
            <div style={{ background: "white", width: "100%", textAlign: "center", padding: "16px 0" }}>
                <Text size="8" weight="bold">
                    注文確認
                </Text>
            </div>

            <div
                style={{
                    background: "white",
                    width: "100%",
                    textAlign: "left",
                    padding: "16px 0",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Text size="5">フランクフルト100本: 1000円</Text>
                <Text size="5">フランクフルト100本: 1000円</Text>
                <Text size="5">フランクフルト100本: 1000円</Text>
                <Text size="5">フランクフルト100本: 1000円</Text>
            </div>

            <div style={{ background: "white", width: "100%", textAlign: "left", padding: "16px 0" }}>
                <Text size="8" weight="bold">
                    合計 100円
                </Text>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem",
                }}
            >
                <Link href="/name">
                    <img alt="もどる" src="/return.png" />
                </Link>
                <Link href="/number">
                    <img alt="注文確定" src="/decide.png" />
                </Link>
            </div>
        </div>
    );
}
