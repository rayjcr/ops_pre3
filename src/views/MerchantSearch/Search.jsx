import { Button, Input } from 'antd';
import React, { memo } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import css from './search.module.scss';

const Search = memo(({keyWord, onSearch, onChange}) => {
  return (
    <div className={css.searchBox}>
        <Input
        value={keyWord}
        prefix={<SearchOutlined />}
        size='large'
        placeholder='Search Query'
        allowClear={true}
        onChange={(e)=>onChange(e)}
        /> 
        <div className={css.tips}>
        Searches within id, legal name, and merchant name
        </div> 
        <div className={css.searchOpt}>
            <Button type="primary" onClick={onSearch}>SEARCH</Button>
        </div>
    </div>
  )
})

export default Search;
