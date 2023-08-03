
import { IconBrandVinted, IconAlignBoxCenterMiddleFilled, IconDeviceDesktopAnalytics } from "@tabler/icons-svelte";

export const programs = [
    {
        name: "qtile",
        icon: IconAlignBoxCenterMiddleFilled,
        shortcuts: {
            "Focus Window": [
                {
                    name: "Focus up",
                    keys: ["m", "k"]
                },
                {
                    name: "Focus down",
                    keys: ["m", "j"]
                },
            ],
            "Resize Window": [
                {
                    name: "Grow",
                    keys: ["m", "l"]
                },
                {
                    name: "Shrink",
                    keys: ["m", "h"]
                }
            ]
        }
    },

    {
        name: "nvim",
        icon: IconBrandVinted,
        shortcuts: {
            "Cursor Movement": [
                {
                    name: "left",
                    keys: ["h"]
                },
                {
                    name: "right",
                    keys: ["l"]
                },
                {
                    name: "up",
                    keys: ["k"]
                },
                {
                    name: "down",
                    keys: ["j"]
                },
            ],
        }
    },

    {
        name: "Linux",
        icon: IconBrandVinted,
        shortcuts: [
            {
                name: "searching and matching text files contained in the regular expressions",
                key: "grep"
            },
        ]
    },
]