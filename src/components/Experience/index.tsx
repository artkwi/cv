import * as Styled from './styled';
import React from 'react';
import { copy as c } from '../../shared/copy/mainPage';

interface IProps {
    lang: string;
}

const Experience: React.FunctionComponent<IProps> = ({ lang }) => {
    return (
        <Styled.SectionStyled data-aos="fade-up">
            <Styled.SectionInnerStyled>
                <Styled.ExperienceSVG name={'experience'} />
                {c[lang].experienceList.map((experience: any) => (
                    <React.Fragment key={experience.date}>
                        <Styled.DatesStyled>
                            {experience.date}
                        </Styled.DatesStyled>
                        <Styled.DescriptionStyled>
                            {experience.title}
                        </Styled.DescriptionStyled>
                    </React.Fragment>
                ))}
            </Styled.SectionInnerStyled>
        </Styled.SectionStyled>
    );
};

export default Experience;
