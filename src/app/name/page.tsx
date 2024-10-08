"use client";

import { Text, TextField } from "@radix-ui/themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { type Save } from "@/src/types/save";

export default function Index(): JSX.Element {
    function handleNext(): void {
        if (name.length < 4) {
            alert("4文字以上で入力してください。");
            return;
        }
        if (name.length > 10) {
            alert("10文字以下で入力してください。");
            return;
        }

        const save = localStorage.getItem("save");
        if (save !== null) {
            const parsed: Save = JSON.parse(save);
            parsed.name = name;
            localStorage.setItem("save", JSON.stringify(parsed));
        }

        document.location.href = "/check.html";
    }

    const [name, setName] = useState("");
    function handleChangeName(event: React.ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }

    useEffect(() => {
        const save = localStorage.getItem("save");
        if (save !== null) {
            const parsed: Save = JSON.parse(save);

            if (parsed.isOrdered) {
                document.location.href = "/number.html";
                return;
            }
            
            setName(parsed.name);
        }
    }, [setName]);

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
            <Text size="8" weight="bold">
                お名前(ニックネーム可)
            </Text>
            <div>
                <TextField.Root maxLength={10} onChange={handleChangeName} placeholder="お名前" size="3" value={name} variant="surface">
                    <TextField.Slot />
                </TextField.Root>
                <Text color="tomato">※4文字以上10文字以下で入力してください。</Text>
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
                <Link href="/">
                    <img alt="もどる" src="/return.png" />
                </Link>
                <button aria-label="Next" onClick={handleNext} type="button">
                    <img alt="つぎへ" src="/next.png" />
                </button>
            </div>
        </div>
    );
}
