import React from "react"
import { HawaTextField } from "./HawaTextField"

type SearchBarTypes = {}
export const HawaSearchBar: React.FunctionComponent<SearchBarTypes> = (
  props
) => {
  return <HawaTextField {...props} />
}
