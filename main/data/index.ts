import { gamesData } from './gamesData'

const getIdFromGameTitle = (title: string) => title.replace(/ /g, '-').toLocaleLowerCase()

export const games = gamesData.map((game) => {
  const { title, music, hidden } = game
  return {
    id: getIdFromGameTitle(title),
    hidden: hidden ?? false,
    music: {
      ...music,
      source: `./resources/${getIdFromGameTitle(title)}/${game.music?.source}`,
    },
    favicons: {
      favicon16: `./resources/${getIdFromGameTitle(title)}/favicon-16x16.png`,
      favicon32: `./resources/${getIdFromGameTitle(title)}/favicon32x32.png`,
      appleTouchIcon: `./resources/${getIdFromGameTitle(title)}/apple-touch-icon.png`,
    },
    ...game,
  }
})
