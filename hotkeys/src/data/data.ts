
import { IconBrandVinted, IconAlignBoxCenterMiddleFilled, IconDeviceDesktopAnalytics } from "@tabler/icons-svelte";

type Shortcut = {
  name: string;
  keys: string[];
};

type ShortcutGroup = {
  name: string;
  keystoke: string;
  shortcuts: Shortcut[];
};

export type Program = {
  name: string;
  icon: any;
  groups: ShortcutGroup[];
};

export const programs: Program[] = [
    {
        name: "qtile",
        icon: IconAlignBoxCenterMiddleFilled,
        groups: [
            {
                name: "Focus Window",
                keystoke: "Normal mode",
                shortcuts: [
                    {
                        name: "Focus up",
                        keys: ["mod", "k"]
                    },
                    {
                        name: "Focus down",
                        keys: ["mod", "j"]
                    },
                ]
            },
            {
                name: "Resize Window",
                keystoke: "Normal mode",
                shortcuts: [
                    {
                        name: "Grow",
                        keys: ["mod", "l"]
                    },
                    {
                        name: "Shrink",
                        keys: ["mod", "h"]
                    }
                ]
            }
        ]
    },

    {
        name: "nvim",
        icon: IconBrandVinted,
        groups: [
            {
                name: "Movement",
                keystoke: "normal",
                shortcuts: [
                    {
                        name: "Up",
                        keys: ["k"]
                    },
                    {
                        name: "Down",
                        keys: ["j"]
                    },
                ]
            },
            {
                name: "Exit",
                keystoke: "command mode",
                shortcuts: [
                    {
                        name: "save and quit",
                        keys: [":", "w", "q"]
                    },
 
                ]
            },
        ]
    }
];

