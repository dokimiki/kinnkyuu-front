"use client";

import { Text } from "@radix-ui/themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { type Order } from "@/src/types/order";
import { type Save } from "@/src/types/save";

export default function Index(): JSX.Element {
    const [order, setOrder] = useState<Order>();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const save = localStorage.getItem("save");
        if (save !== null) {
            const parsed: Save = JSON.parse(save);
            setOrder(parsed.order);
            setTotal(parsed.total);
        }
    }, [setOrder]);

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
                {order !== undefined && (
                    <>
                        <Text size="8">フランクフルト</Text>
                        <Text size="5">ケチャップ: {order.frankfurt.ketchupCount}本</Text>
                        <Text size="5">マスタード: {order.frankfurt.mustardCount}本</Text>
                        <Text size="5">ケチャマスタード: {order.frankfurt.ketchupMustardCount}本</Text>
                        <Text size="5">塩コショウ: {order.frankfurt.saltAndPepperCount}本</Text>
                        <Text size="5">トッピングなし: {order.frankfurt.normalCount}本</Text>

                        <Text size="8">チーズフランクフルト</Text>
                        <Text size="5">ケチャップ: {order.cheeseFrankfurt.ketchupCount}本</Text>
                        <Text size="5">マスタード: {order.cheeseFrankfurt.mustardCount}本</Text>
                        <Text size="5">ケチャマスタード: {order.cheeseFrankfurt.ketchupMustardCount}本</Text>
                        <Text size="5">塩コショウ: {order.cheeseFrankfurt.saltAndPepperCount}本</Text>
                        <Text size="5">トッピングなし: {order.cheeseFrankfurt.normalCount}本</Text>
                    </>
                )}
            </div>

            <div style={{ background: "white", width: "100%", textAlign: "left", padding: "16px 0" }}>
                <Text size="8" weight="bold">
                    合計 {total}円
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
