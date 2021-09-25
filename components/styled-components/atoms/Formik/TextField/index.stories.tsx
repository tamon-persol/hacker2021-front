import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { FormikTextField } from '.';
import markdown from './index.md';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export default {
  title: 'styled-components/atoms/Formik/FormikTextField',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

const emailSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required')
});

export const Email = (): JSX.Element => (
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
        <Field
          name="email"
          placeholder="Mail Address"
          component={FormikTextField}
        />
      </Form>
    )}
  </Formik>
);
