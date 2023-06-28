import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from 'components/schema';

import { nanoid } from 'nanoid';

import { Form, SubTitle, Label, Input, FormBtn } from './AddContactForm.styled';

const AddContactForm = ({ checkingForMatches }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
    resolver: yupResolver(schema),
  });
  const inputNameId = nanoid(6);
  const inputNumberId = nanoid(6);

  const handleSubmitForm = data => {
    checkingForMatches(data);
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <SubTitle>Add</SubTitle>
      <Label htmlFor={inputNameId}>Name</Label>
      <Input
        id={inputNameId}
        type="text"
        {...register('name', { required: true })}
      />
      {errors.name && <span>{errors.name.message}</span>}
      <Label htmlFor={inputNumberId}>Number</Label>
      <Input
        id={inputNumberId}
        type="tel"
        {...register('number', { required: true })}
      />
      {errors.number && <span>{errors.number.message}</span>}
      <FormBtn type="submit">Add contact</FormBtn>
    </Form>
  );
};

export default AddContactForm;
