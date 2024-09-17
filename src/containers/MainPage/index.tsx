import AOS from 'aos';
import 'aos/dist/aos.css';
import ParticlesBg from 'particles-bg';
import React, { useState } from 'react';
import Education from '../../components/Education';
import Experience from '../../components/Experience';
import Skills from '../../components/Skills';
import profileImg from './../../assets/images/profile-image.jpg';
import { Contact, IconManager, Navbar, SectionTitle } from './../../components';
import aosConfig from './../../shared/aosConfig';
import { copy as c } from './../../shared/copy/mainPage';
import * as Styled from './styled';

AOS.init(aosConfig);

const MainPage = () => {
    const [lang, setLang] = useState('EN');
    const changeLanguage = () => {
        lang === 'EN' ? setLang('PL') : setLang('EN');
    };

    return (
        <>
            <Navbar lang={lang} />
            <Styled.Main>
                <Styled.AnimatedBackground>
                    <ParticlesBg type="lines" num={2} />
                </Styled.AnimatedBackground>
                <Styled.LanguageButton onClick={() => changeLanguage()}>
                    <IconManager name={lang === 'EN' ? 'ENFlag' : 'PLFlag'} />
                </Styled.LanguageButton>
                <Styled.Section id="about-me">
                    <Styled.ProfileImageWrapper>
                        <Styled.ProfileBackground>
                            <Styled.ProfileBackgroundTop />
                            <Styled.ProfileBackgroundBottom />
                        </Styled.ProfileBackground>
                        <Styled.ProfileInfoWrapper>
                            <Styled.Figure>
                                <Styled.ProfileImage src={profileImg} />
                            </Styled.Figure>
                            <Styled.ProfileSignature>
                                Artur Kwiatkowski
                            </Styled.ProfileSignature>
                        </Styled.ProfileInfoWrapper>
                    </Styled.ProfileImageWrapper>
                    <Styled.AboutMeDescription>
                        {c[lang].aboutMeDescription}&#9749;
                    </Styled.AboutMeDescription>
                </Styled.Section>
                <SectionTitle id={'skills'} title={c[lang].skills} />
                <Skills lang={lang} />
                <SectionTitle id={'education'} title={c[lang].education} />
                <Education lang={lang} />
                <SectionTitle
                    id={'work-experience'}
                    title={c[lang].experience}
                />
                <Experience lang={lang} />
                <SectionTitle id={'contact'} title={c[lang].contact} />
                <Contact />
            </Styled.Main>
        </>
    );
};

export default MainPage;
