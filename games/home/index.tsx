/* eslint-disable react/jsx-no-comment-textnodes */
import type { NextPage } from 'next'
import useNavigation from '../../main/hooks/useNavigation'
import GameMenu from './components/GameMenu'
import IntroModal from './components/IntroModal'

/*
TODO: 
- add loader and get the data from the provider
- animate the list: typing animation for the title + feather, slide right for the game links
*/

const Home: NextPage = () => {
  const { displayIntroModal, setDisplayIntroModal } = useNavigation()

  const closeIntroModal = () => setDisplayIntroModal(false)

  return <>{displayIntroModal ? <IntroModal closeIntroModal={closeIntroModal} /> : <GameMenu />}</>
}

export default Home
