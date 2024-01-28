import { PricingPlanTexts } from ".";
import { DirectionType, PositionType } from "./commonTypes";

export type PlanFeature = {
  soon?: boolean;
  included?: boolean;
  text: string;
  hint?: string;
  hintSide?: PositionType;
};
export type PricingCardProps = {
  direction?: DirectionType;
  features: PlanFeature[];
  endButton?: boolean;
  price: number;
  oldPrice?: number;
  noPrice?: boolean;
  id?: string;
  discount?: string;
  onPlanClicked?: () => void;
  currentPlan?: boolean;
  recommended?: boolean;
  size?: "small" | "medium" | "large";
  isLoadingPrice?: boolean;
  isLoadingCard?: boolean;
  texts: PricingPlanTexts;
};
