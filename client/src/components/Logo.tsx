import styles from "./Logo.module.css";
import clsx from "clsx";

export function Logo({ className }: { className?: string[] | string }) {
  return <img src="/logo.jpg" className={clsx(styles.logo, className)} />;
}
