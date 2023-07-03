import {css} from '@emotion/css';

export const container = css`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: space-between;
  font-size: 22px;
  font-weight: 600;
  font-family: "Courier New", Courier, monospace;
  border: solid green 2px;
  margin: 8px;
  border-radius: 5px;
  padding: 16px;

  span {
    color: #ffb703;
    font-size: 18px;
    font-weight: 500;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
`;

export const content = css`
 width: 100%;
 
`;

export const img = css`
  width: 100px;
  height: 100px;

  @media (min-width: 725px) {
    width: 350px;
    height: 350px;
  }
`;

