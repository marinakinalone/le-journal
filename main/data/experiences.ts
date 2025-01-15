import { IExperienceBasicData } from './experiencesTypes'

export const experiencesData: IExperienceBasicData[] = [
  {
    hidden: true,
    title: 'le-journal',
    metadata: {
      description: 'un journal intime, un espace pour écrire, dessiner, ou simplement se détendre.',
    },
    config: {
      isPortraitFormatAccepted: true,
      shouldSupportAllFormats: true,
    },
  },
  {
    title: 'jardinage graphique',
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
    title: 'internet is always right',
    metadata: {
      description:
        'A series of debates that we want to settle and who could a better judge than the mighty Internet?',
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
    metadata: {
      description: 'TBD', // TODO Add description
    },
    config: {
      isPortraitFormatAccepted: true,
      shouldSupportAllFormats: true,
    },
  },
]
