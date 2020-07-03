import React from 'react'
import * as Styled from './styled'
import { SectionTitle, Navbar } from './../../components'
// import desk from './../../assets/images/desk.jpg'
import profileImg from './../../assets/images/profile-image.jpg'
import aboutBackground from './../../assets/images/winter-bg.jpg'
import c from './../../shared/copy/mainPage';

const MainPage = () => {
  const lang = 'EN';
  return (
    <>
      <Navbar/>
      <Styled.Main>
        {/* <Styled.BackgroundImg src={desk} loading="lazy" alt="" /> */}
        <Styled.Section id='about-me'>
          <Styled.ProfileImageWrapper>
            <Styled.ProfileBackground src={aboutBackground}/>
            <Styled.Figure>
              <Styled.ProfileImage src={profileImg} />
            </Styled.Figure>
            <Styled.ProfileSignatureWrapper>
              <Styled.ProfileSignature>Artur Kwiatkowski</Styled.ProfileSignature>
            </Styled.ProfileSignatureWrapper>
          </Styled.ProfileImageWrapper>
              Nazywam się Artur Kwiatkowski. Jestem świeżo upieczonym inżynierem informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu. W kwietniu 2019 roku przeprowadzam się do Krakowa. Tam zamierzam zacząć pracę związaną z programowaniem. Obecnie rozwijam się w kierunku tworzenia aplikacji i stron internetowych. Nie zamykam się jednak na inne horyzontyw dziedzinie IT - praca powinna stale rozwijać i dawać przyjemność.

        </Styled.Section>
        <SectionTitle id={'education'} title={c[lang].education}></SectionTitle>
        <Styled.Section>
          <Styled.Dates>
            {c[lang].educationDate1}
          </Styled.Dates>
          <Styled.Description>
            {c[lang].education1}
          </Styled.Description>
          <Styled.Dates>
            {c[lang].educationDate2}
          </Styled.Dates>
          <Styled.Description>
            {c[lang].education2}
          </Styled.Description>
          <Styled.Dates>
            {c[lang].educationDate3}
          </Styled.Dates>
          <Styled.Description>
            {c[lang].education3}
          </Styled.Description>
        </Styled.Section>
        <SectionTitle id={'work-experience'} title={c[lang].experience}></SectionTitle>
        <Styled.Section>
          <Styled.Dates>
            {c[lang].experienceDate1}
          </Styled.Dates>
          <Styled.Description>
            {c[lang].experience1}
          </Styled.Description>
          <Styled.Dates>
            {c[lang].experienceDate2}
          </Styled.Dates>
          <Styled.Description>
            {c[lang].experience2}
          </Styled.Description>
          <Styled.Dates>
            {c[lang].experienceDate3}
          </Styled.Dates>
          <Styled.Description>
            {c[lang].experience3}
          </Styled.Description>
        </Styled.Section>
        <SectionTitle id={'skills'} title={c[lang].skills}></SectionTitle>
        <Styled.Section>
          <Styled.Dates>
            10.2015 – 03.2019
          </Styled.Dates>
          <Styled.Description>
            {c[lang].skills1}
          </Styled.Description>
          <Styled.Dates>
            10.2017 – 03.2018
          </Styled.Dates>
          <Styled.Description>
            {c[lang].skills2}
          </Styled.Description>
          <Styled.Dates>
            09.2011 – 04.2015
          </Styled.Dates>
          <Styled.Description>
            {c[lang].skills3}
          </Styled.Description>
        </Styled.Section>
        <SectionTitle id={'contact'} title={c[lang].contact}></SectionTitle>
        <Styled.Section>

        </Styled.Section>
      </Styled.Main>
    </>
  )
}

export default MainPage
