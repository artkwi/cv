import React, { useState } from 'react';
import * as Styled from './styled';
import { Contact, SectionTitle, Navbar, IconManager } from './../../components';
import profileImg from './../../assets/images/profile-image.jpg';
import aboutBackground from './../../assets/images/winter-bg.jpg';
import c from './../../shared/copy/mainPage';
import ParticlesBg from 'particles-bg';
// @ts-ignore
import Slide from 'react-reveal/Slide';

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
          <ParticlesBg type="lines" num={12} />
        </Styled.AnimatedBackground>
        <Styled.LanguageButton onClick={() => changeLanguage()}>
          <IconManager name={lang === 'EN' ? 'ENFlag' : 'PLFlag'} />
        </Styled.LanguageButton>
        <Styled.Section id="about-me">
          <Styled.ProfileImageWrapper>
            <Styled.ProfileBackground
              src={aboutBackground}
              alt=""
            />
            <Styled.Figure>
              <Styled.ProfileImage src={profileImg} />
            </Styled.Figure>
            <Styled.ProfileSignatureWrapper>
              <Styled.ProfileSignature>
                                Artur Kwiatkowski
              </Styled.ProfileSignature>
            </Styled.ProfileSignatureWrapper>
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
          <Styled.Section>
            <Styled.SectionInner>
              <Styled.Description>
                {c[lang].htmlSkills.join(', ')}
              </Styled.Description>
              <Styled.Description>
                {c[lang].jsSkills.join(', ')}
              </Styled.Description>
              <Styled.Description>
                {c[lang].databaseSkills.join(', ')}
              </Styled.Description>
              <Styled.Description>
                {c[lang].OOPSkill}
              </Styled.Description>
              <Styled.Description>
                {c[lang].otherSkills.join(', ')}
              </Styled.Description>
              <Styled.Description>
                {c[lang].languageSkill}
              </Styled.Description>
            </Styled.SectionInner>
          </Styled.Section>
          <SectionTitle
            id={'education'}
            title={c[lang].education}
          ></SectionTitle>
          <Styled.Section>
            <Styled.SectionInner>
              <Styled.Dates>{c[lang].educationDate1}</Styled.Dates>
              <Styled.Description>
                {c[lang].education1}
              </Styled.Description>
              <Styled.Dates>{c[lang].educationDate2}</Styled.Dates>
              <Styled.Description>
                {c[lang].education2}
              </Styled.Description>
              <Styled.Dates>{c[lang].educationDate3}</Styled.Dates>
              <Styled.Description>
                {c[lang].education3}
              </Styled.Description>
            </Styled.SectionInner>
          </Styled.Section>
          <SectionTitle
            id={'work-experience'}
            title={c[lang].experience}
          ></SectionTitle>
          <Styled.Section>
            <Styled.SectionInner>
              <Styled.Dates>{c[lang].experienceDate0}</Styled.Dates>
              <Styled.Description>
                {c[lang].experience0}
              </Styled.Description>
              <Styled.Dates>{c[lang].experienceDate1}</Styled.Dates>
              <Styled.Description>
                {c[lang].experience1}
              </Styled.Description>
              <Styled.Dates>{c[lang].experienceDate2}</Styled.Dates>
              <Styled.Description>
                {c[lang].experience2}
              </Styled.Description>
              <Styled.Dates>{c[lang].experienceDate3}</Styled.Dates>
              <Styled.Description>
                {c[lang].experience3}
              </Styled.Description>
            </Styled.SectionInner>
          </Styled.Section>

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
