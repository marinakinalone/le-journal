export interface IgameMusic {
  artist: string
  song: string
  source: string
}

export interface IgameMetadata {
  favicon: string
  description: string
}

export interface IgameBasicData {
  title: string
  music?: IgameMusic
  metadata: IgameMetadata
}

export interface IgameInfo extends IgameBasicData {
  id: string
}
