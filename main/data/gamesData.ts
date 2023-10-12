import { IgameBasicData } from './gameTypes'

//TODO update game list with description and favicon
export const gamesData: IgameBasicData[] = [
  {
    title: 'the end where we start',
    music: {
      artist: 'Pogo',
      song: 'Wave',
      source: 'wave.mp3',
    },
    metadata: {
      description: 'Une page de mon journal écrite pendant le premier confinement en 202',
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
    },
  },
  {
    title: 'rallumer la femme',
    music: {
      artist: 'artist',
      song: 'song',
      source: 'atticsandbasements.wav',
    },
    metadata: {
      description: ', par mks',
    },
  },
  {
    new: true,
    title: 'radio',
    music: {
      artist: 'artist',
      song: 'song',
      source: 'atticsandbasements.wav',
    },
    metadata: {
      description: ', par mks',
    },
  },
  {
    new: true,
    title: 'palettes',
    music: {
      artist: 'artist',
      song: 'song',
      source: 'atticsandbasements.wav',
    },
    metadata: {
      description: ', par mks',
    },
  },
  {
    new: true,
    title: 'jardin secret',
    music: {
      artist: 'Mama Aiuto',
      song: 'Bell Tower',
      source: 'belltower.wav',
    },
    metadata: {
      description: '',
    },
  },
  {
    hidden: true,
    title: 'end credits',
    music: {
      artist: 'Tom Misch',
      song: 'Dilla Love',
      source: 'dillalove.wav',
    },
    metadata: {
      description: '',
    },
  },
  {
    hidden: true,
    title: 'NEW GAME',
    music: {
      artist: 'artist',
      song: 'song',
      source: 'source.wav',
    },
    metadata: {
      description: ', par mks',
    },
  },
]
