import { gamesData } from './gamesData'

const getIdFromGameTitle = (title: string) => title.replace(/ /g, '-').toLocaleLowerCase()

//TODO generate favicon + music source links automatically
export const games = gamesData.map((game) => {
  const { title, music } = game
  return {
    id: getIdFromGameTitle(title),
    music: {
      ...music,
      source: `./resources/${getIdFromGameTitle(title)}/${game.music?.source}`,
    },
    ...game,
  }
})
