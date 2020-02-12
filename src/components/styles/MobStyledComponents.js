import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`;
* {
  @import url('https://fonts.googleapis.com/css?family=Oxygen|Raleway&display=swap');
  font-family: 'Oxygen', sans-serif;
  font-family: 'Raleway', sans-serif;
  }
`;

export const MobTitle = styled.h1`
  font-family: 'Oxygen', sans-serif;
  font-size: 4em;
  text-shadow: 1px 1px black;
  
`
export const MobSubHeading = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-size: 2em;
  text-shadow: 1px 1px black;
`
export const MobButton = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 1.25em;
  border-radius: 3px;
  color: white;
  border: 2px solid white;
  margin: 0 auto;
//  margin-top: .5em;
  padding: 0.70em 1em;
  width: 11rem;
  transition: 0.5s all ease-out;
  margin-bottom: 1em;
  &:hover {
    background-color: #CEBF3F;
    color: white;
  }
`;


