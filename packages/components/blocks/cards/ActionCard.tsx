import React, { FC, useState } from "react";

type ImageCardTypes = {
  children: any;
  align?: any;
  bottomElement?: any;
  inCardActions?: any;
  cardImage?: string;
  title?: string;
  subtitle?: string;
  blank?: boolean;
};
export const ActionCard: FC<ImageCardTypes> = (props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="hawa-flex hawa-h-full hawa-w-full hawa-flex-col hawa-gap-1">
      <div
        className="hawa-group hawa-relative hawa-h-full hawa-w-full hawa-rounded hawa-border hawa-bg-background hawa-bg-cover hawa-bg-center hawa-transition-all hawa-duration-500 hover:hawa-drop-shadow-2xl"
        style={{
          backgroundImage: `url(${props.blank ? "" : props.cardImage})`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {props.blank ? (
          <div className="hawa-flex hawa-h-full hawa-flex-col hawa-items-center hawa-justify-center ">
            <svg
              className="hawa-h-10 hawa-w-10 hawa-text-foreground"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
            </svg>
          </div>
        ) : (
          <div className="hawa-absolute hawa-inset-0 hawa-rounded hawa-bg-black hawa-opacity-50"></div>
        )}
        <div className="hawa-absolute hawa-bottom-2 hawa-right-2 hawa-z-10 hawa-opacity-0 hawa-transition-all hawa-duration-200 group-hover:hawa-opacity-100">
          {props.inCardActions}
        </div>
        {!props.blank && (
          <div className="hawa-relative hawa-p-4">
            <h1 className="hawa-text-white">{props.title}</h1>
            <p className="hawa-text-white">{props.subtitle}</p>
          </div>
        )}
      </div>
      <div
        className={`hawa-flex hawa-flex-row hawa-justify-between hawa-text-sm hawa-transition-all hawa-duration-200 ${
          hovered ? "hawa-opacity-100" : "hawa-opacity-0"
        }`}
      >
        {props.bottomElement}
      </div>
    </div>
  );
};
