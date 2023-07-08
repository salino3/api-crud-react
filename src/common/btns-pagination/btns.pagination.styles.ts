import {css} from '@emotion/css';

export const container = css`
  display: flex;

  flex-direction: row;
  gap: 12px;

  button {
    border-radius: 8px;
    padding: 4px;
    color: blue;

    &:active {
  
      margin: 0.5px;
      margin-left: 4px;
      font-size: 14px;
    }
  }
`;

export const boxBtnMore = css`
  width: 54.5px;
  button {
    background-color: grey;
    cursor: pointer;
  }
`;

export const boxBtnPage = css`
  width: 90.5px;
  button {
    background-color: #ffb703;
    cursor: pointer;
  }
`;
