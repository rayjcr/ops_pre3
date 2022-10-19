import React, { createRef, Fragment, memo } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Form } from 'antd';
import { configStructure } from '../../common/constants';
import CusFormItem from '../../compontent/CusFormItem';
import css from './user.module.scss';

const cusFields = [
  {
    label: 'Email',
    id: 'email',
    rules:[{
      required: true, message: `The Email cannot be empty`
    }],
    value:['email']
  },{
    label: 'Password',
    id: 'password',
    rules:[{
      required: true, message: `The Password cannot be empty`
    }],
    value:['password']
  },{
    label: 'Phone Number',
    id: 'phone',
    rules:[{
      required: true, message: `The Phone Number cannot be empty`
    }],
    value:['phone']
  }
]



const EditUser = ({ formData, changeValue, app }) => {

  // password, email, config, phone
  // console.log(app, 'app');
  // console.log(configStructure, 'configStructure');

  const form = createRef();
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  }

  const FormItemProps = {
    form,
    formData,
    changeValue,
  }

  const Promission = memo(({ permissionList, zIndex, parentKey=[] }) => {
    return (<>
      {Object.keys(permissionList).map((key, item) => {
        let CurKey = _.cloneDeep(parentKey);
        CurKey.push(key)
        return (<div key={key} className={zIndex>0?css.subPermission:''}>
          <div className={[css.title, zIndex>0&&css.subTitle].join(' ')}>
            {key}
            {permissionList[key].describe && <span className={css.subDescribe}>({permissionList[key].describe})</span>}
          </div>
          {permissionList[key].list ? 
          <CusFormItem key={key} {...permissionList[key]} value={CurKey} {...FormItemProps} />
          : 
          <Promission permissionList={permissionList[key]} zIndex={zIndex+1} parentKey={CurKey}/>}
      </div>)
      })}
    </>)
  })

  return (
    <div>
      <Form ref={form} {...layout} size='large'>
        {cusFields.map((item, index) => {
          return <CusFormItem key={index} {...item} {...FormItemProps} />
        })}

        <Promission permissionList={configStructure} zIndex={0}/>
        

        <div></div>


      </Form>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { app } = state;
  return { app };
}

export default connect(mapStateToProps)(EditUser);
