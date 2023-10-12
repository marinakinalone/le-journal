export interface IgameMusic {
  artist: string
  song: string
  source: string
}

export interface IgameMetadata {
  description: string
}
export interface IgameBasicData {
  hidden?: true
  new?: true
  title: string
  music?: IgameMusic
  metadata: IgameMetadata
}

export interface IgameFavicons {
  favicon16: string
  favicon32: string
  appleTouchIcon: string
}
export interface IgameInfo extends IgameBasicData {
  id: string
  favicons: IgameFavicons
}
