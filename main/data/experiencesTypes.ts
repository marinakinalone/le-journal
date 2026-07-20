export interface IExperienceMusic {
  artist: string
  song: string
  source: string
}

interface IExperienceMetadata {
  description: string
}
export interface IExperienceBasicData {
  hidden?: true
  new?: true
  title: string
  music?: IExperienceMusic
  metadata: IExperienceMetadata
  config: {
    isPortraitFormatAccepted: boolean
    shouldSupportAllFormats: boolean
  }
}

interface IExperienceFavicons {
  favicon16: string
  favicon32: string
  appleTouchIcon: string
}
export interface IExperienceInfo extends IExperienceBasicData {
  id: string
  favicons: IExperienceFavicons
}
