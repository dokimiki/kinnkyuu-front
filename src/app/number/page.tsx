"use client";

import { Text } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { type Save } from "@/src/types/save";

export default function Index(): JSX.Element {
    const [total, setTotal] = useState(0);
    const [orderNumber, setOrderNumber] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        const save = localStorage.getItem("save");
        if (save !== null) {
            const parsed: Save = JSON.parse(save);
            setTotal(parsed.total);
            setOrderNumber(parsed.orderNumber);
            setName(parsed.name);
        }
    }, [setTotal, setOrderNumber]);

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
                    お支払い {total}円
                </Text>
            </div>
            <div style={{ background: "white", width: "100%", textAlign: "left", padding: "16px 0" }}>
                <Text size="9">受け取り番号: {orderNumber}番</Text>
                <br />
                <Text size="7">お名前: {name}</Text>
            </div>
            <Text size="5" weight="bold">
                ※商品受け取り前に画面を閉じないでください。
            </Text>
        </div>
    );
}
