import React from "react"
import { IContentProps } from "./types"

const Headline = ({ content }: IContentProps) => {
  return <h1>{content}</h1>
}

export default Headline
