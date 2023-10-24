/* eslint-disable react/jsx-no-comment-textnodes */
import type { NextPage } from 'next'
import useNavigation from '../../main/hooks/useNavigation'
import GameMenu from './components/GameMenu'
import IntroModal from './components/IntroModal'

const Home: NextPage = () => {
  const { displayIntroModal, setDisplayIntroModal } = useNavigation()

  const closeIntroModal = () => setDisplayIntroModal && setDisplayIntroModal(false)

  return <>{displayIntroModal ? <IntroModal closeIntroModal={closeIntroModal} /> : <GameMenu />}</>
}

export default Home
