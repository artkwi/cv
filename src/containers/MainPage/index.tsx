import React, { useState } from 'react';
import * as Styled from './styled';
import { Contact, SectionTitle, Navbar, IconManager } from './../../components';
import profileImg from './../../assets/images/profile-image.jpg';
// import aboutBackground from './../../assets/images/geom.png';
import c from './../../shared/copy/mainPage';
import ParticlesBg from 'particles-bg';
// @ts-ignore
import Slide from 'react-reveal/Slide';
// import { Parallax } from 'react-scroll-parallax';
import Skills from '../../components/Skills'
import Education from '../../components/Education'
import Experience from '../../components/Experience'
// import { Parallax } from 'react-scroll-parallax';

const MainPage = () => {
  const [lang, setLang] = useState('EN');
  const changeLanguage = () => {
    lang === 'EN' ? setLang('PL') : setLang('EN');
  }

  return (
    <>
      <Navbar lang={lang}/>
      <Styled.Main>
        <Styled.AnimatedBackground>
          <ParticlesBg type="lines" num={2} />
        </Styled.AnimatedBackground>
        <Styled.LanguageButton onClick={() => changeLanguage()}>
          <IconManager name={lang === 'EN' ? 'ENFlag' : 'PLFlag'} />
        </Styled.LanguageButton>
        <Styled.Section id="about-me">
          <Styled.ProfileImageWrapper>
            {/* <Styled.ProfileBackground
              src={aboutBackground}
              alt=""
            /> */}
            <Styled.ProfileBackground>
              <Styled.ProfileBackgroundTop/>
              <Styled.ProfileBackgroundBottom/>

            </Styled.ProfileBackground>
            <Styled.ProfileInfoWrapper>

              <Styled.Figure>
                <Styled.ProfileImage src={profileImg} />
              </Styled.Figure>
              {/* <Parallax className="custom-class" y={[-100, 100]} tagOuter="figure"> */}
              <Styled.ProfileSignature>
                                  Artur Kwiatkowski
              </Styled.ProfileSignature>
              {/* </Parallax> */}
            </Styled.ProfileInfoWrapper>
          </Styled.ProfileImageWrapper>
          <Styled.AboutMeDescription>
            {c[lang].aboutMeDescription}&#9749;
          </Styled.AboutMeDescription>
        </Styled.Section>
        <Slide left delay={300}>
          <SectionTitle
            id={'skills'}
            title={c[lang].skills}
          ></SectionTitle>
          <Skills lang={lang} />
          <SectionTitle
            id={'education'}
            title={c[lang].education}
          ></SectionTitle>
          <Education lang={lang} />
          <SectionTitle
            id={'work-experience'}
            title={c[lang].experience}
          ></SectionTitle>
          <Experience lang={lang} />
          <SectionTitle
            id={'contact'}
            title={c[lang].contact}
          ></SectionTitle>
          <Contact />
        </Slide>
      </Styled.Main>
    </>
  );
};

export default MainPage;
