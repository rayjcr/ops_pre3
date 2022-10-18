import React, { memo, useState, useCallback } from 'react';
import { set } from 'lodash';
import EditUser from './EditUser';
import css from './user.module.scss';
import { Button } from 'antd';

const AddUser = memo(() => {

  const [formData, setFormData] = useState({})
  const userProps = {
    formData,
    changeValue: useCallback((event, prop) => {
      let value = !event.target ? event : event.target.value;
      console.log(set(formData, prop, value), 'addIndex')
      setFormData({...set(formData, prop, value)});
    }, [formData]),
  }

  return (
    <div className='pageMain'>
      <div className='pageTitle'>Create New User</div>
      <div className={css.addUser}>
        <EditUser {...userProps}/>

        <div className={css.opt_bot}>
          <Button type="primary" block>CREATE USER</Button>
        </div> 
      </div>
    </div>
  )
})

export default AddUser