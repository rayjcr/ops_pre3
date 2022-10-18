import { Table } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import React, { useState, useCallback, useEffect } from 'react';
import Search from './Search';
import { getSearchMerchant } from '../../api';
import css from './search.module.scss';

export default function MerchantSearch() {

  const [curPage, setCurPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [keyWord, setKeyWord] = useState(null);
  const [merchantList, setMerchantList] = useState([]);

  const columns = [
    {
      title: 'Citcon ID',
      width: 80,
      dataIndex: 'citcon_id',
      key: 'citcon_id',
    },{
      title: 'Account Status',
      width: 100,
      dataIndex: 'status',
      key: 'status',
    },{
      title: 'Merchant Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
    },{
      title: 'Legal Name',
      width: 100,
      dataIndex: 'legal_name',
      key: 'legal_name',
    },{
      title: 'View and Edit',
      width: 80,
      key: 'user_id',
      render: () => {
        return (<div className='table_ops'><EditOutlined /></div>)
      }
    }
  ]

  const SearchMerchant = useCallback(async() => {
    let res = await getSearchMerchant({
      search_key: keyWord,
      start: curPage,
      length: pageSize,
    })
    setTotal(res.data.data.count);
    setMerchantList(res.data.data.merchants);
    console.log(res, 'search-res')
  }, [curPage, keyWord, pageSize])


  const searchProps = {
    keyWord,
    onSearch: SearchMerchant,
    onChange: useCallback((e) => {
      setKeyWord(e.target.value);
    }, [])
  }

  useEffect(() => {
    if(merchantList.length>0){
      SearchMerchant();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curPage, pageSize])
  

  return (<div className='pageMain'>
    <Search {...searchProps} />
    <div className={css.merchantBox}>
      <Table
        rowKey={'citcon_id'}
        columns={columns} 
        dataSource={merchantList}
        pagination={{ pageSize: pageSize, total: total, onChange: (page,pageSize)=>{
          setCurPage(page);
          setPageSize(pageSize);
        } }}
        scroll={{ y: 'calc(100vh - 400px)' }} 
      />
    </div>
  </div>
  )
}
