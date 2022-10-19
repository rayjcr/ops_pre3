import React, { memo } from 'react';
import { useDispatch } from "react-redux";
import { set, get, cloneDeep } from 'lodash';
import { Form, Col, Input } from 'antd';
import { setState } from "../../store/merchantSlice";

const FormItem = Form.Item;

const CusFields = memo(({sectionForm, fields, keys}) => {
  
  const dispatch = useDispatch();

  // 获取完整的merchantInfo
  // const { merchantInfo } = merchant;
  let newSectionForm = cloneDeep(sectionForm)

  const changeValue = (event, keys, id) => {
    set(newSectionForm, id, event.target.value)
    // console.log('first')
    dispatch(setState({ 
      merchantInfo: { 
        [keys]: newSectionForm
      }
    }));
  }

  const choiceField = (item) => {
    switch (item.inputType) {
      case 'value':
        break;
      default:
        return (<Col key={item.label}>
          <FormItem
            label={item.label}
            required={item.required}
          >
            <Input value={sectionForm[item.id]}  onChange={(e)=>changeValue(e, keys, item.id)}/>
          </FormItem>
        </Col>)
    }
    console.log(item, 'choiceField-item')
  }


  const getFieldContents = () => {
    return fields.map((item) => {
      return (choiceField(item))
    })
  }

  return (<>
    {getFieldContents()}
  </>)
})

export default CusFields;

// const mapStateToProps = (state) => {
//   const { app, merchant } = state;
//   return { app, merchant };
// }

// export default connect(mapStateToProps)(CusFields);