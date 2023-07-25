import React, { FC } from "react"
import { HawaTextField } from "./HawaTextField"

type SearchBarTypes = {}
export const HawaSearchBar: FC<SearchBarTypes> = (props) => {
  return <HawaTextField type={"search"} {...props} />
}
