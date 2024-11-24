import { experiencesData } from './experiences'

const getIdFromExperienceTitle = (title: string) => title.replace(/ /g, '-').toLocaleLowerCase()

export const experiences = experiencesData.map((experience) => {
  const { title, music, hidden } = experience
  return {
    id: getIdFromExperienceTitle(title),
    hidden: hidden ?? false,
    music: {
      ...music,
      source: `./resources/${getIdFromExperienceTitle(title)}/${experience.music?.source}`,
    },
    favicons: {
      favicon16: `./resources/${getIdFromExperienceTitle(title)}/favicon-16x16.png`,
      favicon32: `./resources/${getIdFromExperienceTitle(title)}/favicon32x32.png`,
      appleTouchIcon: `./resources/${getIdFromExperienceTitle(title)}/apple-touch-icon.png`,
    },
    ...experience,
  }
})
