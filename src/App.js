import logo from './assets/logo.svg'
import styled from 'styled-components'
import ParallaxHeroSection from './components/ParallaxHeroSection'
import ContentSection from './components/ContentSection'
import CrossRevealSection from './components/CrossRevealSection'
import FaceOne from '../src/assets/images/faceOne.png'
import LandscapeOne from '../src/assets/images/landscapeOne.png'

const StyledHeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    height: 25vmin;
    pointer-events: none;
  }
`

const StyledTitle = styled.h1`
  color: black;
  font-size: 2rem;
  font-wight: 400;
  letter-spacing: 4px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 4rem;
`

function App() {
  return (
    <>
      <StyledHeroSection>
        <img src={logo} alt='logo' />
        <StyledTitle>Back to smooth and firm skin</StyledTitle>
        <ParallaxHeroSection />
      </StyledHeroSection>
      <ContentSection
        title='Take Care'
        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever'
      />
      <CrossRevealSection
        face={FaceOne}
        landscape={LandscapeOne}
        name='Christian Guard'
        job='Founder'
        sentenceOne='We only launch'
        sentenceTwo='What we love'
      />
    </>
  )
}

export default App
