import React, { FC } from "react"
import { Card, CardContent, CardFooter } from "../../elements/Card"
import { Button } from "../../elements/Button"

type TEmptyState = {
  variant?: "outlined" | "contained" | "neobrutalism"
  onActionClick: () => void
  texts: {
    youreCaughtUp?: string
    actionText?: string
  }
}

export const EmptyState: FC<TEmptyState> = ({
  variant = "contained",
  texts,
  onActionClick,
}) => {
  return (
    <Card>
      <CardContent headless>
        <div className="flex flex-col items-center justify-center text-center ">
          <div className="flex h-10 w-10 flex-col items-center justify-center rounded-3xl bg-primary text-6xl font-bold text-primary-foreground">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="0.35em"
              width="0.35em"
            >
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
            </svg>
          </div>
          <div className="m-2 text-xl font-bold">
            {texts?.youreCaughtUp ?? "You're all caught up"}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => onActionClick()}>
          {texts?.actionText ?? "Go Home"}
        </Button>
      </CardFooter>
    </Card>
  )
}
