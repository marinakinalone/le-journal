export interface Imusic {
  artist: string
  song: string
  source: string
}

export interface Imetadata {
  favicon: string
  description: string
}

export interface IgameInfo {
  title: string
  music?: Imusic
  metadata: Imetadata
}

export interface Igame extends IgameData {
  id: string
}
