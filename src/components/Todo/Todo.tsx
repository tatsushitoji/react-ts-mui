import * as React from 'react';
import { withFormik, InjectedFormikProps } from 'formik';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// tslint:disable-next-line
import styled from '../../theme';
import { TodoList } from './TodoList';

import { Todo } from '../../modules/todo';

export interface Props {
  todos: Todo[];
  add: (id: Todo['text']) => void;
  toggle: (id: Todo['id']) => (event: React.ChangeEvent) => void;
}

interface FormProps {
  add: Props['add'];
}

interface FormValues {
  text: Todo['text'];
}

const TodoPaper = styled(Paper)`
  max-width: 25rem;
  padding: 20px;
  margin: 20px;
`;

const InnerForm: React.SFC<
  InjectedFormikProps<FormProps, FormValues>
> = props => {
  const submitOnClick = (_: React.MouseEvent) => props.submitForm();
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
        onClick={submitOnClick}
        disabled={props.values.text.length <= 0 || props.isSubmitting}
      >
        add
      </Button>
      <Button variant="contained" color="secondary" onClick={props.handleReset}>
        reset
      </Button>
    </form>
  );
};

export const TodoForm = withFormik<FormProps, FormValues>({
  mapPropsToValues: () => ({ text: '' }),
  handleSubmit: (values, { setSubmitting, resetForm, props }) => {
    console.log('handle');
    if (values.text.trim().length <= 0) return;
    props.add(values.text);
    resetForm();
    setSubmitting(false);
  },
})(InnerForm);

export const TodoComponent: React.SFC<Props> = ({ todos, add, toggle }) => (
  <TodoPaper>
    {todos.length > 0 && <TodoList todos={todos} toggle={toggle} />}
    <TodoForm add={add} />
  </TodoPaper>
);
