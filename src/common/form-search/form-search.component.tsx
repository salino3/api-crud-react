import React from 'react';
import * as classes from './form-search.styles'

export const FormSearch: React.FC = () => {


  return (
    <div className={classes.container}>
        <form>
            <label htmlFor="name">
                Name Character:
            </label>
            <input type="text" id='name' name='name' />
        </form>
    </div>
  )
}
