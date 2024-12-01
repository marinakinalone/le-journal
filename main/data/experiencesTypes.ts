export interface IexperienceMusic {
  artist: string
  song: string
  source: string
}

export interface IexperienceMetadata {
  description: string
}
export interface IexperienceBasicData {
  hidden?: true
  new?: true
  title: string
  music?: IexperienceMusic
  metadata: IexperienceMetadata
}

export interface IexperienceFavicons {
  favicon16: string
  favicon32: string
  appleTouchIcon: string
}
export interface IexperienceInfo extends IexperienceBasicData {
  id: string
  favicons: IexperienceFavicons
}
