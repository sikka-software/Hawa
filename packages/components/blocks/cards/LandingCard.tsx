import React, { FC } from "react";

import { Card, CardHeader, CardTitle, CardDescription } from "@/packages/components/elements/card";

interface LandingCardTypes {
  title?: string;
  subtitle?: string;
  icon?: any;
  className?: string;
}

export const LandingCard: FC<LandingCardTypes> = (props) => {
  return (
    <Card className={props.className}>
      <CardHeader>
        {props.icon}
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.subtitle}</CardDescription>
      </CardHeader>
    </Card>
  );
};
