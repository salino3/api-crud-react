import {css} from '@emotion/css';

export const root = css`

`;

export const title = css`
 
 font-size: 42px;
 text-align: center;
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

  button {
    background-color: blue;
    color: white;
    padding: 6px 12px;
    border-radius: 8px;
    /* font-size: large; */
    font-size: 18px;
  }

  &:active {
    margin: 1px;
    height: 32px;
    width: 56px;
    margin-right: 2px;

    button {
      padding: 6px 11px;
      font-size: 16px;
    }
  }
`;


