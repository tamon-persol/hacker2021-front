import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Select, FormikSelect } from '.';
import { MenuItem } from 'components/material-ui/atoms/MenuItem';
import { FormHelperText } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { Box } from 'components/material-ui/atoms/Box';
import { Button } from 'components/material-ui/atoms/Button';
import * as Yup from 'yup';

import markdown from './index.md';

export default {
  title: 'material-ui/atoms/Select',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const basic = (): JSX.Element => (
  <Select name="grup">
    <MenuItem value="apple">りんご</MenuItem>
    <MenuItem value="banana">ばなな</MenuItem>
    <MenuItem value="strawberry">いちご</MenuItem>
  </Select>
);

const countrySchema = Yup.object().shape({
  country: Yup.string().required('選択してください')
});

export const withFormik = (): JSX.Element => (
  <Formik
    initialValues={{ country: '' }}
    onSubmit={(values, actions): void => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }, 100);
    }}
    validationSchema={countrySchema}
  >
    {({ errors }): JSX.Element => (
      <Form>
        <Field name="country" component={FormikSelect}>
          <MenuItem value="japan">日本</MenuItem>
          <MenuItem value="usa">アメリカ</MenuItem>
          <MenuItem value="china">中国</MenuItem>
        </Field>
        {/* NOTE: ラベル位置の関係でエラー表示はatomsに含めない */}
        {errors['country'] && (
          <FormHelperText error>{errors['country']}</FormHelperText>
        )}
        <Box>
          <Button type="submit">Submit</Button>
        </Box>
      </Form>
    )}
  </Formik>
);
