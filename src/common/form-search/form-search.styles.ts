import { css } from "@emotion/css";

export const container = css`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 130px;
  margin: 24px;
  padding: 10px;
  border: solid 2px blue;

`;

export const formSearch = css`

  @media (min-width: 725px) {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
`;

export const divCard = css`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: start;
  z-index: 2;
  align-items: center;
  
  `;