import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import NavbarItem from "@theme/NavbarItem";

import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarLogo from "@theme/Navbar/Logo";

function useNavbarItems() {
  return useThemeConfig().navbar.items;
}

function NavbarItems({ items }) {
  return (
    <div>
      {items.map(
        (item, i) =>
          item.type !== "localeDropdown" && <NavbarItem {...item} key={i} />
      )}
    </div>
  );
}

function NavbarContentLayout({ children }) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items flex xl:justify-between">{children}</div>
    </div>
  );
}

export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();

  const localeDropdown = items.find((item) => item.type === "localeDropdown");

  return (
    <NavbarContentLayout>
      {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
      <NavbarLogo />
      <NavbarItems items={items} />
      <NavbarItem {...localeDropdown} />
    </NavbarContentLayout>
  );
}
