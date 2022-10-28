import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "Home",
        title: "Dashboard",
        pathname: "/",
      },
      {
        icon: "Box",
        title: "Products",
        pathname: "/",
      },
      {
        icon: "ShoppingBag",
        title: "Orders",
        pathname: "/orders",
      },
      "devider",
      {
        icon: "Inbox",
        pathname: "/inbox",
        title: "Inbox",
      },
      {
        icon: "HardDrive",
        pathname: "/samples",
        title: "Sample requests",
      },

      "devider",

      {
        icon: "Layout",
        title: "Settings",
        pathname: "/settings",
      },
      "devider",
    ],
  },
});

export { sideMenu };
