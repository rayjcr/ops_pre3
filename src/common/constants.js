export const configStructure = {
  permission: {
    merchant: {
      describe: 'Choose zero or more values',
      type: 'CHECKBOX',
      list: ['view', 'create', 'edit', 'audit', 'edit_vendor_key']
    },
    user: {
      describe: 'Choose zero or more values',
      type: 'CHECKBOX',
      list: ['create', 'edit', 'delete']
    },
    transaction: {
      describe: 'Choose zero or more values',
      type: 'CHECKBOX',
      list: ['cb_operator', 'cb_manager']
    }
  },
  role: {
    describe: 'Choose exactly one value',
    type: 'RADIO',
    list: ['user', 'admin', 'promotion']
  }
  
};