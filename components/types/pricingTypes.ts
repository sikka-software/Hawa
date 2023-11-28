import { PositionType } from "./commonTypes";

export type PlanFeature = {
  soon?: boolean;
  included?: boolean;
  text: string;
  hint?: string;
  hintSide?: PositionType;
};
