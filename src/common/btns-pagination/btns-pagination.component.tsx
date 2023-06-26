import React from 'react';
import { Link } from 'react-router-dom';
import * as classes from './btns.pagination.styles';

interface Props {
    route: string;
    text: string;
    setNum: React.Dispatch<React.SetStateAction<number>>
};

export const BtnsPagination: React.FC<Props> = (props) => {
    const {route, text, setNum} = props;

  return (
    <div className={classes.container}>
      <div className={classes.boxBtnMore}>
        <button onClick={() => setNum((prev) => prev + 5)}>More...</button>
      </div>
      <div className={classes.boxBtnPage}>
        <Link to={route}>
          <button>{text}</button>
        </Link>
      </div>
    </div>
  );
}
