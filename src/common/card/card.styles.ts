import {css} from '@emotion/css';

export const container = css`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: space-around;
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
    font-family: Georgia, "Times New Roman", Times, serif;
  }
`;

export const img = css`
  width: 100px;
  height: 100px;

  @media (min-width: 725px) {
    width: 350px;
    height: 350px;
  }
`;

export const content = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const boxBtns = css`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-left: auto;
`;

export const linkDesc = css`
  position: relative;
  font-size: 14px;
  margin-bottom: 3px;
  color: blue;
  border: solid 1px;
  padding: 0px 3px;
  border-radius: 2px;
  cursor: pointer;
`;

export const deleteDesc = css`
  position: relative;
  font-size: 14px;
  margin-bottom: 3px;
  background-color: transparent;
  color: red;
  border: solid 1px;
  padding: 0px 3px;
  border-radius: 2px;
  cursor: pointer;
`;