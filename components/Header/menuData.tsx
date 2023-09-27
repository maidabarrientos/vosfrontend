import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
 
 
 
  {
    id: 3,
    title: "Join our community",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Join as Investor",
        path: "/join",
        newTab: false,
      },
      {
        id: 32,
        title: "Social communities",
        path: "/social",
        newTab: false,
      },
      {
        id: 33,
        title: "Join the Team",
        path: "/join",
        newTab: false,
      },
    ],
  },
];
export default menuData;
