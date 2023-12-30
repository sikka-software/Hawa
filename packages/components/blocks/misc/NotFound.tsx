import React, { FC } from "react";

import { Button } from "@/packages/components/elements/button";
import { Card, CardContent } from "@/packages/components/elements/card";

type NotFoundTypes = {
  variant?: "outlined" | "contained" | "neobrutalism";
  texts?: {
    pageNotFound?: string;
    ifLost?: string;
    home?: string;
  };
};

export const NotFound: FC<NotFoundTypes> = ({ texts }) => {
  return (
    <Card>
      <CardContent headless>
        <div className="hawa-flex hawa-flex-col hawa-items-center dark:hawa-text-white">
          <div className="hawa-text-center hawa-text-6xl hawa-font-bold ">
            404
          </div>
          <div className="hawa-m-2 hawa-text-center hawa-text-xl hawa-font-bold ">
            {texts?.pageNotFound || "Page Not Found"}
          </div>
          <div className="hawa-mb-4 hawa-text-center">
            {texts?.ifLost || (
              <>
                {"If you're lost please contact us "}
                <span className="clickable-link">help@sikka.io</span>
              </>
            )}
          </div>
          <Button className="hawa-w-full">{texts?.home || "Home"}</Button>
        </div>
      </CardContent>
    </Card>
  );
};
