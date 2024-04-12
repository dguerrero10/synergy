import { Card, Tab } from "./interfaces";

export const TABS: Tab[] = [
    {
        tabName: "Kanban",
        tabValue: "kanban",
        tabIcon: "dashboard"
    },
    {
        tabName: "Cycle controls",
        tabValue: "cycleControls",
        tabIcon: "settings"
    },
    {
        tabName: "Cycle metrics",
        tabValue: "cycleMetrics",
        tabIcon: "bar_chart"
    },
    {
        tabName: "Admin",
        tabValue: "admin",
        tabIcon: "admin_panel_settings"
    }
];

export const DUMMY_CARD_DATA: Card[] = [
    {
        title: "Prod Support UI Integrate",
        displayId: "UXE-125",
        credit: 4,
        project: "Card Processor",
        team: "Dev",
        status: "Not started"
    },
    {
        title: "Prod Support UI Integrate",
        displayId: "UXE-125",
        credit: 4,
        project: "Card Processor",
        team: "Dev",
        status: "Not started"
    },
    {
        title: "Build Login Page",
        displayId: "UXE-141",
        credit: 2,
        project: "Card Processor",
        team: "Dev",
        status: "In progress"
    },
    {
        title: "Testing Scanner",
        displayId: "UXE-131",
        credit: 4,
        project: "Card Processor",
        team: "Dev",
        status: "Need support"
    },
    {
        title: "Update Styling",
        displayId: "UXE-148",
        credit: 5,
        project: "Card Processor",
        team: "Dev",
        status: "completed"
    },
];