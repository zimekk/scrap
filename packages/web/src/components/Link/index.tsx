import React, { CSSProperties, MouseEventHandler } from "react";

export function Link({
  href = "#",
  ...props
}: {
  children: React.ReactChild;
  href?: string;
  onClick?: MouseEventHandler;
  rel?: string;
  style?: CSSProperties;
  target?: string;
}) {
  const hash = href[0] === "#";

  return (
    <a
      href={href}
      target={hash ? undefined : "_blank"}
      rel={hash ? undefined : "noopener noreferrer"}
      {...props}
    />
  );
}
