import React, { memo } from 'react';
import { Collapse } from 'antd';
import css from './merchant.module.scss';
import CusFields from './CusFields';

const { Panel } = Collapse;

const InternalStatus = memo(({sectionForm, fields}) => {
  console.log(sectionForm, 'MID')
  const CusFieldsProps = {
    sectionForm:sectionForm||{},
    fields,
  }

  return (
    <div>
      <Collapse collapsible="header" defaultActiveKey={['1']} className={css.CollapseHeader}>
        <Panel header="Internal Status" key="1" className={css.Panel}>
          <CusFields {...CusFieldsProps} keys='internal_status' />
        </Panel>
      </Collapse>
    </div>
  )
})

export default InternalStatus;