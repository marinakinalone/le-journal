export interface IOption {
  label: string
  numberOfVotes: number
  /** Prefer `comment`; `commentaire` kept for legacy Mongo documents. */
  comment?: string
  commentaire?: string
}

export interface IDataItem {
  _id: string
  question: string
  answer1: IOption
  answer2: IOption
  totalNumberOfVotes: number
  hasAnswered: boolean
}

export const getComment = (option: IOption) => option.comment ?? option.commentaire ?? ''
