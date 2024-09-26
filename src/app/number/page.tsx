import { Text } from "@radix-ui/themes";

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
            <div style={{ background: "white", width: "100%", textAlign: "left", padding: "16px 0" }}>
                <Text size="8" weight="bold">
                    お支払い 100円
                </Text>
            </div>
            <div style={{ background: "white", width: "100%", textAlign: "left", padding: "16px 0" }}>
                <Text size="9">受け取り番号: 1番</Text>
            </div>
            <Text size="5" weight="bold">
                ※商品受け取り前に画面を閉じないでください。
            </Text>
        </div>
    );
}
