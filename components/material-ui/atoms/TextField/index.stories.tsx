import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { TextField } from '.';
import { FormikTextField } from '.';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import markdown from './index.md';

export default {
  title: 'material-ui/atoms/TextField',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const basic = (): JSX.Element => <TextField placeholder="Email" />;

const emailSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required')
});

export const withFormik = (): JSX.Element => (
  <Formik
    initialValues={{ email: '' }}
    onSubmit={(values, actions): void => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }, 100);
    }}
    validationSchema={emailSchema}
  >
    {(): JSX.Element => (
      <Form>
        <Field name="email" placeholder="Email" component={FormikTextField} />
      </Form>
    )}
  </Formik>
);
