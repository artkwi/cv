import React from 'react';
import profileImg from './../../assets/images/profile-image.jpg';
import { copy as c } from './../../shared/copy/mainPage';
import * as S from './styled';
import * as SCommon from '../../containers/MainPage/styled';

interface Props {
    lang: string;
}

const AboutMe = ({ lang }: Props) => (
    <SCommon.Section id="about-me">
        <S.ProfileImageWrapper>
            <S.ProfileBackground>
                <S.ProfileBackgroundTop />
                <S.ProfileBackgroundBottom />
            </S.ProfileBackground>
            <S.ProfileInfoWrapper>
                <S.Figure>
                    <S.ProfileImage src={profileImg} />
                </S.Figure>
                <S.ProfileSignature>Artur Kwiatkowski</S.ProfileSignature>
            </S.ProfileInfoWrapper>
        </S.ProfileImageWrapper>
        <S.AboutMeDescription>
            {c[lang].aboutMeDescription}&#9749;
        </S.AboutMeDescription>
    </SCommon.Section>
);

export default AboutMe;
