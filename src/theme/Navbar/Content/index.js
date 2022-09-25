import React, { Children } from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import {
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import NavbarItem from "@theme/NavbarItem";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import SearchBar from "@theme/SearchBar";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarLogo from "@theme/Navbar/Logo";
import NavbarSearch from "@theme/Navbar/Search";
import styles from "./styles.module.css";
function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
function NavbarItems({ items }) {
  return (
    <div>
      {items.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
    </div>
  );
}
function NavbarContentLayout({ children }) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items flex justify-between">{children}</div>
    </div>
  );
}
export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();

  // split localeDropdown from the rest of the navbar items
  const localeDropdown = items.find((item) => item.type === "localeDropdown");
  const menuItems = items.filter((item) => item.type !== "localeDropdown");

  return (
    <NavbarContentLayout >
      {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
      <NavbarLogo />
      <NavbarItems items={menuItems} />
      <NavbarItem {...localeDropdown} />
    </NavbarContentLayout>
  );
}
