// extent next link interface

import Link, { LinkProps } from "next/link";

function RelativeLink(props: LinkProps) {
  return (
    <Link
      {...props}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export default RelativeLink;
