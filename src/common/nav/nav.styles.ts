import {css} from '@emotion/css';

export const container = css`
  border: solid white;
  padding: 5px 8px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-size: 18px;
    a {
      color: white;
      text-decoration-line: underline;
    }

    @media (min-width: 725px) {
      flex-direction: row;
    }
  }
`;


