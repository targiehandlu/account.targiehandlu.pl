import React from 'react';
import {
  Edit,
  SimpleForm,
  LongTextInput,
  LongTextField,
  ReferenceField,
  TextField,
  DisabledInput,
  TextInput,
  required, email, minLength
} from 'admin-on-rest';

import get from 'lodash/get';
import qs from 'query-string';
import Divider from 'material-ui/Divider';

import FullNameField from '../../fields/FullNameField';

import { validate } from './validation';
import { getUserFullName, getUserData } from '../../api/helpers';

const ViewCreate = props => (
  <Edit title="Check invitation details" {...props}>
    <SimpleForm submitOnEnter={false} validate={validate}>

      <FullNameField source="admin.profile" label="Creator"    />

      <TextField source="message" style={{ maxWidth: 544 }} />

      <LongTextInput source="comment" style={{ maxWidth: 544 }} />



      <TextField source="participant.profile.fname" />
      <TextField source="participant.profile.lname" />
      <TextField source="participant.profile.cname2" />
    <TextField source="participant.profile.position" />




      </SimpleForm>
  </Edit>
);

export default ViewCreate;