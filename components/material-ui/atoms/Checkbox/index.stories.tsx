import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { FormControlLabel, FormHelperText } from '@material-ui/core';
import { Checkbox } from '.';
import { FormikCheckbox } from '.';
import { Field, Form, Formik } from 'formik';
import markdown from './index.md';
import * as Yup from 'yup';

export default {
  title: 'material-ui/atoms/Checkbox',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const Basic = (): JSX.Element => {
  const [state, setState] = React.useState({
    apple: false,
    banana: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            checked={state.apple}
            onChange={handleChange}
            name="apple"
          />
        }
        label="りんご"
      />
      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            checked={state.banana}
            onChange={handleChange}
            name="banana"
            size={60}
          />
        }
        label="ばなな"
      />
    </div>
  );
};

const acceptSchema = Yup.object().shape({
  accept: Yup.boolean()
    .oneOf([true], '同意する必要があります')
    .required('Required')
});

export const withFormik = (): JSX.Element => {
  return (
    <Formik
      initialValues={{ accept: false }}
      onSubmit={(values, actions): void => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 100);
      }}
      validationSchema={acceptSchema}
    >
      {({ errors }): JSX.Element => {
        return (
          <Form>
            <FormControlLabel
              label="同意します"
              control={<Field name="accept" component={FormikCheckbox} />}
            />
            {/* NOTE: ラベル位置の関係でエラー表示はatomsに含めない */}
            {errors['accept'] && (
              <FormHelperText error>{errors['accept']}</FormHelperText>
            )}
          </Form>
        );
      }}
    </Formik>
  );
};
