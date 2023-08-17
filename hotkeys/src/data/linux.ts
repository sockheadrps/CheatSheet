import IconDeviceDesktopAnalytics from "@tabler/icons-svelte/dist/svelte/icons/IconDeviceDesktopAnalytics.svelte";

type Option = {
    option: string,
    description: string
}

type Command = {
    name: string;
    description: string | undefined;
    optionals: Option[] | undefined;
};
  
type CommandGroup = {
    name: string;
    commands: Command[];
};

export type Linux = {
    name: string;
    icon: any;
    groups: CommandGroup[];
};

export const linux: Linux = 
    {
        name: "linux",
        icon: IconDeviceDesktopAnalytics,
        groups: [
            {
                name: "network",
                commands: [
                    {
                        name: "ifconfig",
                        description: "Display and manipulate network interfaces",
                        optionals: undefined
                    },
                    {
                        name: "netstat",
                        description: " displays information about different interface statistics",
                        optionals: [{
                            option : "-aep",
                            description: "Displays PID and to which function all sockets belong"
                        }]
                    },
                ]
            },
            {
                name: "proccesses",
                commands: [
                    {
                        name: "htop",
                        description: "Display proccesses + other hardware data",
                        optionals: undefined
                    },
                    {
                        name: "ps",
                        description: "display active processes",
                        optionals: [
                            {
                                option: "-e",
                                description: "display all running processes"
                            },
                            {
                                option: "-ef | grep TO_SEARCH",
                                description: "display processes using RE to search"
                            }
                        ]
                    },
                ]
            },
        ]
    }
