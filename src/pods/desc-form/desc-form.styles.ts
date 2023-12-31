import {css} from '@emotion/css';

export const root = css`
  
 display: flex;
 flex-direction: column;
 align-items: center;
 height: 100%;
 width: 100%;
 
`;

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 12px;
  gap: 12px;

`;

export const title = css`
  font-size: 42px;
`;

export const linkBack = css`
 
 border: solid blue 1px;
 margin: 14px 0px;
 color: blue;
 font-size: 18px;
 padding: 4px 8px;
`;

export const subTitle = css`
  margin-top: 16px;
  font-size: 26px;
  text-align: center;
  color: green;

  span {
    color: grey;
  }

  @media (min-width: 725px) {
    font-size: 32px;
  }
`;

export const form = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: min-content;

  &::placeholder {
    padding-left: 2px;
    color: red;
  }
`;

export const lblDesc = css`
  align-items: center;
  margin-right: auto;
  font-size: large;
  margin-top: 28px;

`;


export const txtArea = css`
  padding: 5px;
  width: 300px;
  height: 42px;

  @media (min-width: 725px) {
    width: 420px;
    height: 52px;
  }
`;

export const boxBtnSubmit = css`
  width: 60px;
  height: 34px;
  opacity: 0.5;

  button {
    background-color: blue;
    color: white;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 18px;
  }
`;


export const btnDisabled = css`
  opacity: 1;

  &:active {
    margin: 1px;
    height: 32px;
    width: 56px;
    margin-right: 2px;

    button {
      padding: 6px 11px;
      font-size: 16px;
      border: solid 2px rgba(255, 255, 0, 0.7);
    }
  }
`;

