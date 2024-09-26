import { Reset, Theme } from "@radix-ui/themes";
import { Noto_Sans_JP } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.scss";
import { Suspense } from "react";

const defaultUrl = process.env.VERCEL_URL !== undefined ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: "bunkasai",
    description: "I科3年のモバイルオーダーだ！",
};

const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <html className={notoSansJP.className} lang="ja">
            <Suspense>
                <body>
                    <Reset>
                        <Theme appearance="light">
                            <header>
                                <img
                                    alt="橋口真一のフランクフルト"
                                    src="/header.png"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "cover",
                                    }}
                                />
                            </header>
                            {children}
                        </Theme>
                    </Reset>
                </body>
            </Suspense>
        </html>
    );
}
