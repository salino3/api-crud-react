import {css} from '@emotion/css';

export const container = css`
  border: solid;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
  font-size: 24px;

  @media (min-width: 725px) {
    h1 {
      font-size: 34px;
    }
    gap: 25%;
  }
`;


