import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Loader from '../../main/components/Loader'
import NavigationProvider from '../../main/providers/Navigation'

export const experienceConfig = {
  palettes: {
    isPortraitFormatAccepted: true,
    shouldSupportAllFormats: true,
  },
}

const ExperiencePage = () => {
  const router = useRouter()
  const { id } = router.query

  const config = experienceConfig[id as keyof typeof experienceConfig] || {}

  const ExperienceComponent = dynamic(() => import(`../../experiences/${id}/index.tsx`), {
    loading: () => <Loader />,
    ssr: false,
  })
  return (
    <NavigationProvider
      isPortraitFormatAccepted={config.isPortraitFormatAccepted}
      shouldSupportAllFormats={config.shouldSupportAllFormats}
    >
      <ExperienceComponent />
    </NavigationProvider>
  )
}

export default ExperiencePage
