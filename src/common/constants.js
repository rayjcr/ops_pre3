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

export const internal_status = [
  {
    id: 'category',
    label: 'Category',
    // inputType: DROPDOWN,
    required: true,
  },
  {
    id: 'fd_number',
    label: 'FD Number',
    // inputType: NUMBER,
    required: false,
  },
  {
    id: 'jira_number',
    label: 'Jira Number',
    // inputType: TEXT,
    required: false,
  },
  {
    id: 'note',
    label: 'Note',
    // inputType: MULTI_LINE,
    required: false,
  },
];