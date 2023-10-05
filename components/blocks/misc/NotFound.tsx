import React, { FC } from "react"
import { Card, CardContent } from "../../elements/Card"
import { Button } from "../../elements/Button"

type NotFoundTypes = {
  variant?: "outlined" | "contained" | "neobrutalism"
  texts?: {
    pageNotFound?: string
    ifLost?: string
    home?: string
  }
}

export const NotFound: FC<NotFoundTypes> = ({
  variant = "contained",
  texts,
}) => {
  return (
    <Card>
      <CardContent headless>
        <div className="flex flex-col items-center dark:text-white">
          <div className="text-center text-6xl font-bold ">404</div>
          <div className="m-2 text-center text-xl font-bold ">
            {texts?.pageNotFound ?? "Page Not Found"}
          </div>
          <div className="mb-4 text-center">
            {texts?.ifLost ?? (
              <>
                If you're lost please contact us{" "}
                <span className="clickable-link">help@sikka.io</span>
              </>
            )}
          </div>
          <Button className="w-full">{texts?.home ?? "Home"}</Button>
        </div>
      </CardContent>
    </Card>
  )
}
