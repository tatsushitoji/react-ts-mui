import * as React from 'react';
import { pure } from 'recompose';
import { withFormik, InjectedFormikProps } from 'formik';
import { PaperContainer } from '../../atoms/PaperContainer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { TodoList } from '../../organisms/TodoList';

import { Todo } from '../../../modules/todo';

export interface Props {
  todos: Todo[];
  add: (id: Todo['text']) => void;
  asyncAdd: (id: Todo['text']) => void;
  toggle: (event: React.ChangeEvent) => void;
}

interface FormProps {
  add: Props['add'];
  asyncAdd: Props['asyncAdd'];
}

interface FormValues {
  text: Todo['text'];
}

const InnerForm: React.SFC<
  InjectedFormikProps<FormProps, FormValues>
> = props => {
  const clickAdd = (_: React.MouseEvent) => {
    props.add(props.values.text);
    props.submitForm();
  };
  const clickAsyncAdd = (_: React.MouseEvent) => {
    props.asyncAdd(props.values.text);
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

const TodoForm = pure(EnhancedForm);

export const TodoComponent: React.SFC<Props> = ({
  todos,
  add,
  asyncAdd,
  toggle,
}) => (
  <PaperContainer>
    {todos.length > 0 && <TodoList todos={todos} toggle={toggle} />}
    <TodoForm add={add} asyncAdd={asyncAdd} />
  </PaperContainer>
);
