export interface IOption {
  label: string
  numberOfVotes: number
  /** Prefer `comment`; `commentaire` kept for legacy Mongo documents. */
  comment?: string
  commentaire?: string
}

export type UserAnswer = 1 | 2

export interface IDataItem {
  _id: string
  question: string
  answer1: IOption
  answer2: IOption
  totalNumberOfVotes: number
  hasAnswered: boolean
  /** Which option the user voted for; undefined if unknown (legacy cookie). */
  userAnswer?: UserAnswer
}

export const getComment = (option: IOption) => option.comment ?? option.commentaire ?? ''

/** Replace the leading `%` placeholder in a commentaire with the real percentage. */
export const formatComment = (comment: string, percent: number) =>
  comment.replace('%', `${percent}%`)
