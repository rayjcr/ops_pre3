import { Form } from 'antd';
import React, { memo, useState } from 'react';
import MerchantDetail from './MerchantDetail';
import css from './merchant.module.scss';
import { connect } from 'react-redux';

const Merchant = memo(({ merchant }) => {
  const { merchantInfo } = merchant;
  // console.log(merchantInfo, 'TOP')
  // const [formData, setFormData] = useState(merchantInfo)

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
  }

  const MerchantProps = {
    formData: merchantInfo,
  }

  return (
    <div className='pageMain'>
      <div className='pageTitle'>Add New Merchant Application</div>
      <Form  {...layout} size='large' className={css.MerchantForm}>
        <MerchantDetail {...MerchantProps} />
      </Form>
    </div>
  )
})

const mapStateToProps = (state) => {
  const { merchant } = state;
  return { merchant };
}

export default connect(mapStateToProps)(Merchant);