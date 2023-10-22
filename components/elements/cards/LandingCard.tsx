import React, { useEffect, useState, FC } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "../Card";

interface LandingCardTypes {
  title?: string;
  subtitle?: string;
  icon?: any;
  className?: string;
}

export const LandingCard: FC<LandingCardTypes> = (props) => {
  let defaultStyle =
    "hawa-block hawa-rounded hawa-border hawa-border-gray-200 hawa-bg-white hawa-shadow-sm hover:hawa-shadow-lg hawa-transition-all dark:hawa-border-gray-700 dark:hawa-bg-gray-800 ";

  let orientationStyles = {
    vertical: "hawa-max-w-sm",
    horizontal: "hawa-flex hawa-flex-row hawa-w-full",
  };
  let imageStyles = {
    vertical:
      "hawa-h-auto hawa-max-h-56 hawa-w-full hawa-rounded-t-lg hawa-object-cover",
    horizontal: "hawa-h-full hawa-w-48 hawa-rounded-l hawa-object-cover",
  };
  let headerActionsButtonStyle =
    "hawa-inline-block hawa-rounded hawa-p-1 hawa-text-sm hawa-text-gray-500 hover:hawa-bg-gray-100 focus:hawa-outline-none focus:hawa-ring-4 focus:hawa-ring-gray-200 dark:hawa-text-gray-400 dark:hover:hawa-bg-gray-700 dark:focus:hawa-ring-gray-700";

  const [openActionHeader, setOpenActionHeader] = useState(false);

  function handleOpenActionHeader(e: any) {
    e.stopPropagation();
    setOpenActionHeader(!openActionHeader);
  }

  useEffect((): any => {
    window.onclick = () => {
      if (openActionHeader) {
        setOpenActionHeader(false);
      }
    };
    return () => (window.onclick = null);
  }, [openActionHeader]);

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
