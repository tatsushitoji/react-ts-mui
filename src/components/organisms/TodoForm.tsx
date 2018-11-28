import * as React from 'react';
import { pure } from 'recompose';
import { withFormik, InjectedFormikProps } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface Props {
  addTodo: (_: string) => void;
  asyncAddTodo: (_: string) => void;
}

interface FormProps {
  addTodo: Props['addTodo'];
  asyncAddTodo: Props['asyncAddTodo'];
}

interface FormValues {
  text: string;
}

const InnerForm: React.SFC<
  InjectedFormikProps<FormProps, FormValues>
> = props => {
  const clickAdd = (_: React.MouseEvent) => {
    props.addTodo(props.values.text);
    props.submitForm();
  };
  const clickAsyncAdd = (_: React.MouseEvent) => {
    props.asyncAddTodo(props.values.text);
    props.submitForm();
  };
  return (
    <form>
      <TextField
        label="add todo"
        name="text"
        value={props.values.text}
        placeholder="input text"
        // InputLabelProps={{
        //   shrink: true,
        // }}
        onChange={props.handleChange}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={clickAdd}
        disabled={props.values.text.length <= 0 || props.isSubmitting}
      >
        add
      </Button>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={clickAsyncAdd}
        disabled={props.values.text.length <= 0 || props.isSubmitting}
      >
        async add
      </Button>
      <Button variant="contained" color="secondary" onClick={props.handleReset}>
        reset
      </Button>
    </form>
  );
};

const EnhancedForm = withFormik<FormProps, FormValues>({
  mapPropsToValues: () => ({ text: '' }),
  handleSubmit: (values, { setSubmitting, resetForm }) => {
    if (values.text.trim().length <= 0) return;
    resetForm();
    setSubmitting(false);
  },
})(InnerForm);

export const TodoForm = pure(EnhancedForm);
