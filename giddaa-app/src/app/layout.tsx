import { Provider } from "@/components/ui/provider"
import {Metadata} from "next";



export const metadata: Metadata = {
    title: "Giddaa",
    description: "Future of work, Future of learning",
};

export default function RootLayout(props: { children: React.ReactNode }) {
    const { children } = props
    return (
        <html suppressHydrationWarning>
        <body>
        <Provider>
            {children}
        </Provider>
        </body>
        </html>
    )
}