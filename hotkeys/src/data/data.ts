
import IconBrandVinted from "@tabler/icons-svelte/dist/svelte/icons/IconBrandVinted.svelte";
import IconAlignBoxCenterMiddleFilled from "@tabler/icons-svelte/dist/svelte/icons/IconAlignBoxCenterMiddleFilled.svelte";

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
                        name: "left",
                        keys: ["h"]
                    },
                    {
                        name: "down",
                        keys: ["j"]
                    },
                    {
                        name: "up",
                        keys: ["k"]
                    },
                    {
                        name: "right",
                        keys: ["l"]
                    },
                    {
                        name: "first char in line",
                        keys: ["o"]
                    },
                    {
                        name: "last char in line",
                        keys: ["$"]
                    },
                    {
                        name: "first non blank char",
                        keys: ["^"]
                    },
                    {
                        name: "prev paragraph",
                        keys: ["{"]
                    },
                    {
                        name: "next paragraph",
                        keys: ["}"]
                    },
                ]
            },
            {
                name: "Window Movement",
                keystoke: "normal",
                shortcuts: [
                    {
                        name: "jump to top",
                        keys: ["H"]
                    },
                    {
                        name: "jump to middle",
                        keys: ["M"]
                    },
                    {
                        name: "jump to bottom",
                        keys: ["L"]
                    },
                    {
                        name: "go to last line+#, or count lines",
                        keys: ["G"]
                    },
                    {
                        name: "go down one line, to first blank char",
                        keys: ["+"]
                    },
                    {
                        name: "go up one line, to first blank char",
                        keys: ["-"]
                    },
                ]
            },
            {
                name: "Word movement",
                keystoke: "normal",
                shortcuts: [
                    {
                        name: "goto start of next word",
                        keys: ["w"]
                    },
                    {
                        name: "goto end of next word",
                        keys: ["e"]
                    },
                    {
                        name: "goto end of prev word",
                        keys: ["ge"]
                    },
                    {
                        name: "goto start of prev word",
                        keys: ["b"]
                    },
 
                ]
            },
            {
                name: "Commands",
                keystoke: "command mode",
                shortcuts: [
                    {
                        name: "save and quit",
                        keys: [":", "w", "q"]
                    },
                    {
                        name: "quit without save",
                        keys: [":", "q", "!"]
                    },
 
                ]
            },
        ]
    }
];

