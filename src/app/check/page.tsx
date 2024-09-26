"use client";

import { Text } from "@radix-ui/themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { type Order } from "@/src/types/order";
import { type Save } from "@/src/types/save";

export default function Index(): JSX.Element {
    const [order, setOrder] = useState<Order>();
    const [total, setTotal] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        const save = localStorage.getItem("save");
        if (save !== null) {
            const parsed: Save = JSON.parse(save);

            if (parsed.isOrdered) {
                document.location.href = "/number";
                return;
            }

            setOrder(parsed.order);
            setTotal(parsed.total);
            setName(parsed.name);
        }
    }, [setOrder]);

    function handleDecide() {
        const randomId = Math.floor(Math.random() * 1000);

        const save = localStorage.getItem("save");
        if (save !== null) {
            const parsed: Save = JSON.parse(save);
            parsed.orderNumber = `${randomId}`;
            parsed.isOrdered = true;
            localStorage.setItem("save", JSON.stringify(parsed));
        }

        //ここからグーグルフォーム送信用のコード
        const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfytJFibmQmGDOemB-Ixf_Lgt3tdZFiyuJcM_aSh0EG13neNA/formResponse";

        // フォームの入力データ
        const formData = new FormData();

        formData.append("entry.1394773858", `${order?.frankfurt.ketchupCount}`);
        formData.append("entry.1095591843", `${order?.frankfurt.mustardCount}`);
        formData.append("entry.1551224039", `${order?.frankfurt.ketchupMustardCount}`);
        formData.append("entry.1407949314", `${order?.frankfurt.saltAndPepperCount}`);
        formData.append("entry.2135323617", `${order?.frankfurt.normalCount}`);
        formData.append("entry.291030975", `${order?.cheeseFrankfurt.ketchupCount}`);
        formData.append("entry.365957516", `${order?.cheeseFrankfurt.mustardCount}`);
        formData.append("entry.1034907842", `${order?.cheeseFrankfurt.ketchupMustardCount}`);
        formData.append("entry.193227970", `${order?.cheeseFrankfurt.saltAndPepperCount}`);
        formData.append("entry.1093284244", `${order?.cheeseFrankfurt.normalCount}`);
        formData.append("entry.36397433", name);
        formData.append("entry.1117982710", `${randomId}`);
        // fetchを使ってデータを送信

        const orderbutton = document.querySelector("#decide");
        orderbutton?.setAttribute("disabled", "true");
        fetch(formUrl, {
            method: "POST",
            mode: "no-cors", // クロスオリジンエラーを防ぐ
            body: formData,
        })
            .then((response) => {
                console.log(response);
                document.location.href = "/number";
            })
            .catch((error) => {
                alert("エラーが発生しました。もう一度お試しください。" + error);
            });

        // })
        // ここまでグーグルフォーム送信用のコード
    }

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
                <button aria-label="Next" id="decide" onClick={handleDecide} type="button">
                    <img alt="注文確定" src="/decide.png" />
                </button>
            </div>
        </div>
    );
}
