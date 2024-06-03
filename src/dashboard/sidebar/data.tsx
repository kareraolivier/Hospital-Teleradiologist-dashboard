import { HomeIcon } from "./icons/HomeIcon";
import { ReportIcon } from "./icons/ReportIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { Sicon } from "./icons/Sicon";
import { Ricon } from "./icons/Ricon";
import LoginAttempt from "./icons/loginAttempt";

export const data = [
  {
    section: "Section1",
    content: [
      {
        id: 1,
        title: "Dashboard",
        icon: <HomeIcon />,
        link: ".",
        role: ["admin", "specialist", "radiologist"],
      },
      {
        id: 2,
        title: "Patients",
        icon: <Ricon />,
        link: "radiologist",
        role: ["admin", "radiologist"],
      },
      {
        id: 3,
        title: "Patients",
        icon: <Sicon />,
        link: "specialist",
        role: ["admin", "specialist"],
      },

      {
        id: 4,
        title: "List of Patients",
        icon: <ReportIcon />,
        link: "reports",
        role: ["admin", "specialist", "radiologist"],
      },
      {
        id: 5,
        title: "Attempts",
        icon: <LoginAttempt />,
        link: "attempts",
        role: ["admin"],
      },
      {
        id: 6,
        title: "Settings",
        icon: <SettingsIcon />,
        link: "settings",
        role: ["admin"],
      },
    ],
  },
];
