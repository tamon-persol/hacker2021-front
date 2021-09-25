import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { FormControlLabel, FormHelperText } from '@material-ui/core';
import { RadioGroup, FormikRadioGroup } from '.';
import { Radio } from 'components/material-ui/atoms/Radio';
import { Field, Form, Formik } from 'formik';
import { Box } from 'components/material-ui/atoms/Box';
import { Button } from 'components/material-ui/atoms/Button';
import * as Yup from 'yup';
import markdown from './index.md';

export default {
  title: 'material-ui/atoms/RadioGroup',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const basic = (): JSX.Element => {
  return (
    <RadioGroup row>
      <FormControlLabel
        value="apple"
        control={<Radio color="primary" />}
        label="りんご"
      />
      <FormControlLabel
        value="banana"
        control={<Radio color="primary" />}
        label="ばなな"
      />
    </RadioGroup>
  );
};

const fruitsSchema = Yup.object().shape({
  fruits: Yup.string().required('選択してください')
});

export const withFormik = (): JSX.Element => {
  return (
    <Formik
      initialValues={{ fruits: '' }}
      onSubmit={(values, actions): void => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 100);
      }}
      validationSchema={fruitsSchema}
    >
      {({ errors }) => (
        <Form>
          <Field name="fruits" component={FormikRadioGroup} row>
            <FormControlLabel
              value="apple"
              control={<Radio color="primary" />}
              label="りんご"
            />
            <FormControlLabel
              value="banana"
              control={<Radio color="primary" />}
              label="ばなな"
            />
          </Field>
          {errors['fruits'] && (
            <FormHelperText error>{errors['fruits']}</FormHelperText>
          )}
          <Box>
            <Button type="submit">Submit</Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
