import React, { memo } from 'react';
import { connect } from 'react-redux';
import InternalStatus from './InternalStatus';
import { internal_status } from '../../common/constants';

const MerchantDetail = memo(({ formData }) => {
  // console.log(formData, 'TOP-2')
  const sectionProps = {
    sectionForm: formData.internal_status,
    fields: internal_status,
  }
   
  return (
    <div>
        <InternalStatus {...sectionProps} />
    </div>
  )
})

// export default MerchantDetail
const mapStateToProps = (state) => {
  const { merchant } = state;
  return { merchant };
}

export default connect(mapStateToProps)(MerchantDetail);
