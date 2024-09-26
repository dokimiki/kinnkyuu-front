"use client";

import { Text, TextField } from "@radix-ui/themes";

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
            <Text size="8" weight="bold">
                お名前(ニックネーム可)
            </Text>
            <div>
                <TextField.Root maxLength={10} placeholder="お名前" size="3" variant="surface">
                    <TextField.Slot />
                </TextField.Root>
                <Text color="tomato">※4文字以上10文字以下で入力してください。</Text>
            </div>
            <div>
                <button aria-label="Return" type="button">
                    <img alt="" src="/return.png" />
                </button>
                <button aria-label="Return" type="button">
                    <img alt="" src="/next.png" />
                </button>
            </div>
        </div>
    );
}
