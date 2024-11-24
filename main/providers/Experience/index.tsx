import Head from 'next/head'
import React, { createContext, ReactNode, useState } from 'react'
import { IexperienceInfo } from '../../data/experiencesTypes'
import { homePageData as initialExperienceContext } from '../../data/homePageData'

interface IExperienceContext extends IexperienceInfo {
  updateExperienceContext: (newContext: IexperienceInfo) => void
  children?: ReactNode
}

export const ExperienceContext = createContext<IExperienceContext>({
  ...initialExperienceContext,
  updateExperienceContext: (_newContext) => {},
})

const ExperienceInfoProvider = ({ children }: { children: ReactNode }) => {
  const [experienceContext, setExperienceContext] = useState(initialExperienceContext)

  return (
    <ExperienceContext.Provider
      value={{
        ...experienceContext,
        updateExperienceContext: (newContext) => {
          setExperienceContext((prevContext) => ({
            ...prevContext,
            ...newContext,
          }))
        },
      }}
    >
      <Head>
        <title>{experienceContext.title}</title>
        <meta name="description" content={experienceContext.metadata.description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={experienceContext.favicons.appleTouchIcon}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={experienceContext.favicons.favicon32}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={experienceContext.favicons.favicon16}
        />
      </Head>
      <main>{children}</main>
    </ExperienceContext.Provider>
  )
}

export default ExperienceInfoProvider
