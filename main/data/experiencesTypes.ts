export interface IExperienceMusic {
  artist: string
  song: string
  source: string
}

interface IExperienceMetadata {
  description: string
}

export interface IExperienceBasicData {
  /** Must match the folder name under `experiences/` (and `public/resources/`). */
  id: string
  hidden?: true
  new?: true
  title: string
  /** `source` is the filename only; enrichment prefixes `/resources/<id>/`. */
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
  favicons: IExperienceFavicons
}
