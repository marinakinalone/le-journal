import { gamesData } from './gamesData'

const getIdFromGameTitle = (title: string) => title.replace(/ /g, '-').toLocaleLowerCase()

//TODO generate favicon + music source links automatically + key (no)

/*
       music: {
            source: ./resources/the-end-where-we-start
        }
*/
export const games = gamesData.map((game) => {
    return {
        id: getIdFromGameTitle(game.title),

        ...game,
    }
})
