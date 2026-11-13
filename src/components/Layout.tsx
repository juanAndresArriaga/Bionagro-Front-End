import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Icon from "./ui/Icon";
import { useI18n } from "../i18n";
import { socialLinks } from "../data/nav";

export default function Layout() {
  const { pathname } = useLocation();
  const { t } = useI18n();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <a className="chat" href={socialLinks.text} aria-label={t("chat")}>
        <Icon name="chat" /> <span>{t("chat")}</span>
      </a>
    </>
  );
}
