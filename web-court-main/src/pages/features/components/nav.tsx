import React, { useContext } from 'react'
import { AppContext } from '../context-provider';
import { FeatureCategory } from '../../../constants';
import { Actions } from '../constants';
import Search from './search';
import Paginate from './paginate';

import './nav.scss'

const Nav = () => {
  const { state, dispatch } = useContext(AppContext);

  const onChangeHandler = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: Actions.UpdateFeatureTable,
      data: evt.target.value as FeatureCategory,
    });
  }
  const onClickHander = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const name = evt.currentTarget.name;
    dispatch({
      type: Actions.ButtonClick,
      data: name,
    });
  }

  return (
    <header>
      <div className='controls'>
        <label htmlFor='feature-select'>Feature Category</label>
        <select value={state.featureCategory} onChange={onChangeHandler} id='feature-select'>
          {Object.values(FeatureCategory).map(fname => <option key={fname} value={fname}>{fname}</option>)}
        </select>
      </div>
      |
      <div className='controls'>
        <button title='refresh' name='refresh' onClick={onClickHander}>↻</button>
      </div>
      |
      <div className='controls'>
        <button title='Delete one feature' name='delete-one' onClick={onClickHander}>🗑</button>
      </div>
      |
      <div className='controls'>
        <button title='Delete all features in this category' name='delete-catetory' onClick={onClickHander} className='highlight'>🗑</button>
      </div>
      |
      <div className='controls'>
        <button title='Information' name='info' onClick={onClickHander}>🗈</button>
      </div>
      |
      <div className='controls'>
        <button title='Train' name='train' onClick={onClickHander}>🚅</button>
      </div>
      |
      <div className='controls'>
        <button title='Import' name='import' onClick={onClickHander}>📂</button>
      </div>
      |
      <div className='controls'>
        <button title='Export' name='export' onClick={onClickHander}>📁</button>
      </div>
      |
      <div className='controls'>
        <button title='Models' name='models' onClick={onClickHander}>🤖</button>
      </div>
      <div className='advanced-controls'>
        <Search />
        |
        <Paginate />
      </div>
    </header>
  );
};

export default Nav;
