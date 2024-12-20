import { IexperienceBasicData } from './experiencesTypes'

export const experiencesData: IexperienceBasicData[] = [
  {
    hidden: true,
    title: 'home',
    id: 'home',
    metadata: {
      description: 'info for the home page.',
    },
    config: {
      isPortraitFormatAccepted: true,
      shouldSupportAllFormats: true,
    },
  },
  {
    title: 'jardinage graphique',
    id: 'jardinage-graphique',
    metadata: {
      description:
        'Draw with flowers in this little zen garden. Flowers of random shapes appear as we hover over the playground. Want to start over? Click on the rake.',
    },
    config: {
      isPortraitFormatAccepted: false,
      shouldSupportAllFormats: false,
    },
  },
  {
    title: 'palettes',
    id: 'palettes',
    metadata: {
      description:
        'A personal color library, curated from my explorations across the web. Each palette has a built-in card with the possibility to copy the color hues for personal use.',
    },
    config: {
      isPortraitFormatAccepted: true,
      shouldSupportAllFormats: true,
    },
  },
  {
    new: true,
    hidden: true,
    title: 'une minute',
    id: 'une-minute',
    metadata: {
      description: 'TBD', // TODO Add description
    },
    config: {
      isPortraitFormatAccepted: true,
      shouldSupportAllFormats: true,
    },
  },
  {
    new: true,
    hidden: true,
    title: 'fenêtres',
    id: 'fenetres',
    metadata: {
      description: 'TBD', // TODO Add description
    },
    config: {
      isPortraitFormatAccepted: true,
      shouldSupportAllFormats: true,
    },
  },
  {
    new: true,
    hidden: true,
    title: 'digital quilts',
    id: 'digital-quilts',
    metadata: {
      description: 'TBD', // TODO Add description
    },
    config: {
      isPortraitFormatAccepted: true,
      shouldSupportAllFormats: true,
    },
  },
]
