import { LuLayoutDashboard } from "react-icons/lu";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { PiStudent } from "react-icons/pi";
import { FaPeopleRoof } from "react-icons/fa6";
import { MdOutlineNoteAlt } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
import { LuCircleUserRound } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

export const menuRoutes = [
  {
    icon: <LuLayoutDashboard />,
    title: "Dashboard",
    href: "/",
  },
  {
    icon: <PiChalkboardTeacherFill />,
    title: "Teachers",
    href: "/teachers",
  },
  {
    icon: <PiStudent />,
    title: "Students",
    href: "/students",
  },
  {
    icon: <FaPeopleRoof />,
    title: "Attendance",
    href: "/attendance",
  },
  {
    icon: <RiMoneyDollarCircleLine />,
    title: "Finance",
    href: "/finance",
  },
  {
    icon: <MdOutlinePermContactCalendar />,
    title: "Calendar",
    href: "/calendar",
  },
  {
    icon: <MdOutlineNoteAlt />,
    title: "Notice",
    href: "/notice",
  },
  {
    icon: <LuMessageSquareMore />,
    title: "Messages",
    href: "/message",
  },
];

export const otherRoutes = [
  {
    icon: <LuCircleUserRound />,
    title: "Profile",
    href: "/profile",
  },
  {
    icon: <IoSettingsOutline />,
    title: "Settings",
    href: "/settings",
  },
  //   {
  //     icon: <FiLogOut />,
  //     title: "Logout",
  //     href: "/settings",
  //   },
];
