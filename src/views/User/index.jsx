import React, { memo, useEffect, useState, useCallback } from 'react';
import { set } from 'lodash';
import moment from 'moment';
import { Modal, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getUserList } from '../../api';
import EditUser from '../AddUser/EditUser';

const User = memo(() => {

  const [formData, setFormData] = useState({})
  const [users, setUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [pageSize, ] = useState(10);

  const columns = [
    {
      title: 'User ID',
      dataIndex: 'user_id',
      width: 100,
      key: 'user_id',
    },{
      title: 'Email',
      dataIndex: 'email',
      width: 250,
    },{
      title: 'Status',
      dataIndex: 'status',
      width: 100,
    },{
      title: 'Time Created',
      dataIndex: 'time_created',
      width: 250,
      render: (time_created) => {
        return (<span>{moment(time_created).format('YYYY-MM-DD HH:mm:ss')}</span>)
      }
    },{
      title: '',
      width: 100,
      render: (col,item) => {
        return (
          <div className='table_ops'><EditOutlined onClick={()=>openEdit(item)}/> <DeleteOutlined /></div>
        )
      }
    }
  ]

  const userProps = {
    formData,
    changeValue: useCallback((event, prop) => {
      let value = !event.target ? event : event.target.value;
      console.log(set(formData, prop, value), 'addIndex')
      setFormData({...set(formData, prop, value)});
    }, [formData]),
  }

  const getUsers = async() => {
    let res = await getUserList();
    // console.log(res,'getUserList-res')
    setUsers(res.data)
  }

  const openEdit = (item) => {
    setIsEdit(true)
    console.log(item, '修改的 Item')
  }

  useEffect(()=>{
    getUsers();
  },[])

  return (
    <div className='pageMain'>
      <div className='pageTitle'>USERS</div>
      <Table
        rowKey={'user_id'}
        columns={columns} 
        dataSource={users} 
        pagination={{ pageSize: pageSize }} 
        scroll={{ y: 'calc(100vh - 240px)' }} 
      />

      <Modal title='Edit User' maskClosable={false} open={isEdit} onCancel={()=>setIsEdit(false)}>
        <EditUser {...userProps}/>
      </Modal>
    </div>
  )
})

export default User
