import React from 'react'
import * as Styled from './styled'
import { SectionTitle, Navbar } from './../../components'
// import desk from './../../assets/images/desk.jpg'
import profileImg from './../../assets/images/profile-image.jpg'
import aboutBackground from './../../assets/images/winter-bg.jpg'

const MainPage = () => {
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
        <SectionTitle id={'education'} title={'Wykształcenie'}></SectionTitle>
        <Styled.Section>
          <Styled.Dates>
              10.2015 – 03.2019
          </Styled.Dates>

Uniwersytet im. Adama Mickiewicza w Poznaniu na Wydziale Matematyki i Informatyki - tytuł inżyniera
          <Styled.Dates>
10.2017 – 03.2018
          </Styled.Dates>

Università della Calabria - studia z programu Erasmus+ we Włoszech
          <Styled.Dates>
09.2011 – 04.2015
          </Styled.Dates>

Technikum informatyczne w Zespole Szkół nr 2 im. Stanisława Staszica w Nowym Tomyślu - tytuł technika informatyka oraz złotego absolwenta

        </Styled.Section>
        <SectionTitle id={'work-experience'} title={'Doświadczenie zawodowe'}></SectionTitle>
        <Styled.Section>
          <Styled.Dates>
              10.2015 – 03.2019
          </Styled.Dates>

Uniwersytet im. Adama Mickiewicza w Poznaniu na Wydziale Matematyki i Informatyki - tytuł inżyniera
          <Styled.Dates>
10.2017 – 03.2018
          </Styled.Dates>

Università della Calabria - studia z programu Erasmus+ we Włoszech
          <Styled.Dates>
09.2011 – 04.2015
          </Styled.Dates>

Technikum informatyczne w Zespole Szkół nr 2 im. Stanisława Staszica w Nowym Tomyślu - tytuł technika informatyka oraz złotego absolwenta

        </Styled.Section>
        <SectionTitle id={'skills'} title={'Umiejętności'}></SectionTitle>
        <Styled.Section>
              10.2015 – 03.2019

Uniwersytet im. Adama Mickiewicza w Poznaniu na Wydziale Matematyki i Informatyki - tytuł inżyniera
10.2017 – 03.2018

Università della Calabria - studia z programu Erasmus+ we Włoszech
09.2011 – 04.2015

Technikum informatyczne w Zespole Szkół nr 2 im. Stanisława Staszica w Nowym Tomyślu - tytuł technika informatyka oraz złotego absolwenta

        </Styled.Section>
        <SectionTitle id={'contact'} title={'Kontakt'}></SectionTitle>
        <Styled.Section>
              10.2015 – 03.2019

Uniwersytet im. Adama Mickiewicza w Poznaniu na Wydziale Matematyki i Informatyki - tytuł inżyniera
10.2017 – 03.2018

Università della Calabria - studia z programu Erasmus+ we Włoszech
09.2011 – 04.2015

Technikum informatyczne w Zespole Szkół nr 2 im. Stanisława Staszica w Nowym Tomyślu - tytuł technika informatyka oraz złotego absolwenta

        </Styled.Section>
      </Styled.Main>
    </>
  )
}

export default MainPage
