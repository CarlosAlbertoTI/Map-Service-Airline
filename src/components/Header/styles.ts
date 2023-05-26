import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: f;
  align-items: center;
  height: 10rem;
  min-height: 100px;
`;

export const HeaderInfoContainer = styled.div`
  text-align: left;
  margin-top:3rem;
`;

export const HeaderTitle = styled.h3`
  text-align: justify;
  font-size: 3rem;
  font-weight: bold;
`;

export const HeaderSubtitle = styled.h4`
  text-align: justify;
  font-size: 1.5rem;
  font-style: italic;
  color: ${(props) => props.theme['gray-200']}
`;
