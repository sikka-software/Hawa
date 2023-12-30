import React, { FC } from "react";

import { Card, CardContent } from "@/packages/components/elements/card";

type NoPermissionProps = {
  texts?: {
    title: string;
    subtitle: string;
  };
};

export const NoPermission: FC<NoPermissionProps> = ({ texts }) => {
  return (
    <Card>
      <CardContent headless>
        <div className="hawa-flex hawa-flex-col hawa-items-center hawa-justify-center hawa-text-center">
          <div className="hawa-flex hawa-h-10 hawa-w-10 hawa-flex-col hawa-items-center hawa-justify-center hawa-rounded-3xl hawa-bg-primary hawa-text-6xl hawa-font-bold  hawa-text-primary-foreground">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="0.35em"
              width="0.35em"
            >
              <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
            </svg>
          </div>
          <div className="hawa-m-2 hawa-text-xl hawa-font-bold">
            {texts?.title || "You don't have permission"}
          </div>
          <div>
            {texts?.subtitle ||
              "If you think this is a problem please contact your administrator or our customer support"}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
