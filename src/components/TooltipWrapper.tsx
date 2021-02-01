import React, { Fragment, lazy, Suspense } from "react";

const Tippy = lazy(() => import("@tippyjs/react"));

const TooltipWrapper = ({ children, ...props }) => {
  const isSSR = typeof window === "undefined";
  return isSSR ? null : (
    <Suspense fallback={children}>
      <Tippy {...props}>{children}</Tippy>
    </Suspense>
  );
};

export default TooltipWrapper;
