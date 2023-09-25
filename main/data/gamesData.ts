import { IgameInfo } from './gameTypes'

//TODO update game list with description and favicon
export const gamesData: IgameInfo[] = [
  {
    title: 'the end where we start',
    music: {
      artist: 'Pogo',
      song: 'Wave',
      source: 'wave.mp3',
    },
    metadata: {
      description: 'Une page de mon journal écrite pendant le premier confinement en 202',
      favicon: './favico.ico',
    },
  },
  {
    title: 'une minute',
    music: {
      artist: 'Sugi.wa',
      song: 'Urtha1',
      source: 'urtha1.wav',
    },
    metadata: {
      description: 'une minute, par mks',
      favicon: '',
    },
  },
  {
    title: 'miroir miroir',
    music: {
      artist: 'Cloudchord, Headphone Activist',
      song: 'Attics and Basements',
      source: 'atticsandbasements.wav',
    },
    metadata: {
      description: 'une minute, par mks',
      favicon: '',
    },
  },
  {
    title: 'jardin secret',
    music: {
      artist: 'Mama Aiuto',
      song: 'Bell Tower',
      source: 'belltower.wav',
    },
    metadata: {
      description: '',
      favicon: '',
    },
  },
  {
    title: 'end credits',
    music: {
      artist: 'Tom Misch',
      song: 'Dilla Love',
      source: 'dillalove.wav',
    },
    metadata: {
      description: '',
      favicon: '',
    },
  },
]
