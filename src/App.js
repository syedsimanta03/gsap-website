import logo from './assets/logo.svg'
import styled from 'styled-components'
import ParallaxHeroSection from './components/ParallaxHeroSection'

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
    <StyledHeroSection>
      <img src={logo} alt='logo' />
      <StyledTitle>Back to smooth and firm skin</StyledTitle>
      <ParallaxHeroSection/>
    </StyledHeroSection>
  )
}

export default App;
