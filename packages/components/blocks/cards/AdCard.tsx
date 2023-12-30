import React, { FC, useState, useEffect, useRef } from "react";

import { OrientationType } from "@/types/commonTypes";

import { cn } from "../../util";

type AdCardTypes = {
  orientation: OrientationType;
  title: string;
  description: string;
  imageURL: string;
  handleHide?: any;
  handleCantHide?: () => void;
  handleClick?: (e: React.MouseEvent) => void;
  canHide: boolean;
  className?: string;
};
export const AdCard: FC<AdCardTypes> = ({
  orientation = "vertical",
  ...props
}) => {
  const adRef = useRef<HTMLDivElement>(null);
  const [closed, setClosed] = useState(false);

  let duration = 0;

  useEffect(() => {
    if (duration) {
      //To change opacity and hide the component
      const timeoutHide = setTimeout(() => {
        setClosed(true);
      }, duration);
      //To destroy the component after hiding it
      const timeoutDestroy = setTimeout(() => {
        setClosed(true);
        if (adRef.current) {
          adRef.current.removeChild(adRef.current.children[0]);
        }
      }, duration + 1000);

      return () => {
        clearTimeout(timeoutHide);
        clearTimeout(timeoutDestroy);
      };
    }
  }, [duration]);

  let cardStyles = {
    horizontal:
      "hawa-flex hawa-flex-row  hawa-max-w-xl hawa-rounded hawa-border hawa-bg-card hawa-p-2 hawa-gap-2 hawa-items-center hawa-relative ",
    vertical:
      "hawa-flex hawa-flex-col hawa-max-w-[200px] hawa-justify-start hawa-rounded hawa-border hawa-bg-card hawa-gap-2 hawa-p-2 hawa-relative"
  };

  let imageStyles = {
    horizontal: "hawa-w-auto hawa-h-full hawa-bg-blue-500  hawa-rounded-inner",
    vertical: "hawa-bg-blue-500 hawa-rounded-inner hawa-w-auto "
  };

  return (
    <div ref={adRef}>
      <div
        className={cn(cardStyles[orientation], props.className)}
        onClick={props.handleClick}
      >
        <div className="hawa-flex hawa-aspect-square hawa-w-full  hawa-max-w-fit  hawa-items-start ">
          <img
            src={
              props.imageURL ? props.imageURL : "https://via.placeholder.com/50"
            }
            className={imageStyles[orientation]}
          />
        </div>
        <div className="hawa-w-full hawa-text-xs">
          <div className="hawa-font-bold">{props.title}</div>
          <div className="hawa-text-[12px]">{props.description}</div>
        </div>
        {props.canHide && (
          <span
            // onClick={props.handleHide}
            onClick={(e) => {
              e.stopPropagation();
              if (props.canHide) {
                setClosed(true);
                setTimeout(() => {
                  if (adRef.current) {
                    adRef.current.removeChild(adRef.current.children[0]);
                  }
                }, 200);
              } else {
                if (props.handleCantHide) {
                  props.handleCantHide();
                }
              }
            }}
            className="hawa-absolute hawa-right-0 hawa-top-0 hawa-h-fit hawa-cursor-pointer hawa-select-none hawa-rounded-bl-lg hawa-rounded-tr-lg hawa-bg-primary/50 hawa-px-2.5 hawa-py-0.5 hawa-text-[10px] hawa-font-semibold hawa-text-primary-foreground"
          >
            Hide
          </span>
        )}
      </div>
    </div>
  );
};
