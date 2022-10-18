import React, { memo } from 'react';
import { Form, Col, Input, Checkbox, Radio } from 'antd';
import { get } from 'lodash';

const FormItem = Form.Item;

const CusFormItem = memo(({
    formData,
    type,
    label,
    id,
    value,
    rules=[],
    changeValue,
    // for Checkbox or Radio
    list,
}) => {

  const ColFormItem = (el_type) => {
    switch (el_type) {
      case 'CHECKBOX':
        // console.log(id)
        return (<Checkbox.Group
          value={get(formData, value)}
          options={list.map(item=>{
            return {
              label: item,
              value: item,
            }
          })}
          onChange={(e)=>changeValue(e, [...value])}
        />)
      case 'RADIO':
        return (<Radio.Group 
          value={formData[value[0]]}
          onChange={(e)=>changeValue(e, [...value])}
        >
          {list.map(item=>{
            return (<Radio key={item} value={item}>{item}</Radio>)
          })}
        </Radio.Group>)
      default:
        return (<Col>
          <FormItem
            label={label}
            name={id}
            rules={rules}
            initialValue={formData[id]}
          >
            <Input onChange={(e)=>changeValue(e, [...value])}/>
          </FormItem>
        </Col>)
    }
  }

  return (ColFormItem(type))
})

export default CusFormItem