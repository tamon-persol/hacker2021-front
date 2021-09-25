# TextField

## Usage
```jsx
import { FormikTextField } from 'components/atoms/Formik/TextField';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

// NOTE: A sample for Email validation.
const emailSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required')
});

<Formik
  initialValues={{ email: '' }}
  onSubmit={(values, actions): void => {
    ...
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
```

## Props

Formik Props: https://jaredpalmer.com/formik/docs/api/formik#props

## Note


`TextField` is useing Formik with validation by yup.

[FYI]

Formik: https://github.com/jaredpalmer/formik

yup: https://github.com/jquense/yup

Validation: https://jaredpalmer.com/formik/docs/guides/validation