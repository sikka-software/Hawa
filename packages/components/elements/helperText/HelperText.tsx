import React from "react";

import { cn } from "@util/index";

export const HelperText = ({ helperText }: { helperText: string }) => (
  <p
    className={cn(
      "hawa-my-0 hawa-text-start hawa-text-xs hawa-text-helper-color hawa-transition-all",
      helperText ? "hawa-h-4 hawa-opacity-100" : "hawa-h-0 hawa-opacity-0",
    )}
  >
    {helperText}
  </p>
);
