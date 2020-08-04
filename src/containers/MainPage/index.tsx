import React from 'react';
import * as Styled from './styled';
import { Contact, SectionTitle, Navbar } from './../../components';
import profileImg from './../../assets/images/profile-image.jpg';
import aboutBackground from './../../assets/images/winter-bg.jpg';
import c from './../../shared/copy/mainPage';
import ParticlesBg from 'particles-bg';
// @ts-ignore
import Slide from 'react-reveal/Slide';

const MainPage = () => {
  const lang = 'EN';

  return (
    <>
      <Navbar />
      <Styled.Main>
        <Styled.AnimatedBackground>
          <ParticlesBg type="lines" num={12} />
        </Styled.AnimatedBackground>
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
            {c[lang].aboutMeDescription}
          </Styled.AboutMeDescription>
        </Styled.Section>

        <Slide left delay={300}>
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
            id={'skills'}
            title={c[lang].skills}
          ></SectionTitle>
          <Styled.Section>
            <Styled.SectionInner>
              <Styled.Dates>10.2015 – 03.2019</Styled.Dates>
              <Styled.Description>
                {c[lang].skills1}
              </Styled.Description>
              <Styled.Dates>10.2017 – 03.2018</Styled.Dates>
              <Styled.Description>
                {c[lang].skills2}
              </Styled.Description>
              <Styled.Dates>09.2011 – 04.2015</Styled.Dates>
              <Styled.Description>
                {c[lang].skills3}
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
