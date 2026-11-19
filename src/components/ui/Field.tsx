import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icon";

/** A form control with a visible label above it, so the label stays readable after the visitor starts typing. */
export default function Field({ label, icon, select, children }: { label: string; icon?: IconName; select?: boolean; children: ReactNode }) {
  return (
    <label className="fld">
      <span className="fld-l">{label}</span>
      <span className={`field${select ? " select" : ""}`}>
        {icon && <Icon name={icon} />}
        {children}
      </span>
    </label>
  );
}
