import React from 'react';
import { Link } from 'react-router-dom';
import { Characters } from '@/core';
import { Description } from '@/common/description';
import { SwitchRoutes } from '@/router';
import * as classes from './card.styles';

interface Props {
  item: Characters;
}

export const Card: React.FC<Props> = (props) => {
 const {item} = props; 

  return (
    <div className={classes.container}>
      <img
        className={classes.img}
        src={item.image}
        alt={`${item.name}\`s image`}
      />
      <div className={classes.content}>
        <Link to={`${SwitchRoutes.desc_form}/${item?.id}`}  className={classes.linkDesc}>Add Description</Link>
        <h3>
          Name: <span>{item.name}</span>
        </h3>
        <h3>
          Origin: <span>{item.origin?.name}</span>
        </h3>
        <h3>
          Location: <span>{item.location?.name}</span>
        </h3>
        <p>
          Status: <span>{item.status}</span>
        </p>
        <Description item={item} />
      </div>
    </div>
  );
}
