import { experiencesData } from './experiences'
import { IExperienceInfo } from './experiencesTypes'

/**
 * Required assets under `public/resources/<id>/`:
 * - favicon-16x16.png
 * - favicon-32x32.png
 * - apple-touch-icon.png
 * - optional music file referenced by `music.source` (filename only in registry)
 */
export const experiences: IExperienceInfo[] = experiencesData.map((experience) => {
  const { id, music } = experience
  const resourceBase = `/resources/${id}`

  return {
    ...experience,
    ...(music
      ? {
          music: {
            ...music,
            source: `${resourceBase}/${music.source}`,
          },
        }
      : {}),
    favicons: {
      favicon16: `${resourceBase}/favicon-16x16.png`,
      favicon32: `${resourceBase}/favicon-32x32.png`,
      appleTouchIcon: `${resourceBase}/apple-touch-icon.png`,
    },
  }
})

/** Non-hidden experiences must have a matching folder under `experiences/`. */
export const loadableExperienceIds = experiences
  .filter((experience) => !experience.hidden)
  .map((experience) => experience.id)
