import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from 'components/schema';

import { nanoid } from 'nanoid';

import {
  Form,
  SubTitle,
  Label,
  Input,
  FormBtn,
  ErrorMessage,
} from './AddContactForm.styled';

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
    mode: 'onBlur',
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
      <Label htmlFor={inputNameId} error={errors.name}>
        Name
      </Label>
      <Input
        id={inputNameId}
        type="text"
        {...register('name', { required: true })}
        error={errors.name}
      />
      {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

      <Label htmlFor={inputNumberId} error={errors.number}>
        Number
      </Label>
      <Input
        id={inputNumberId}
        type="tel"
        {...register('number', { required: true })}
        error={errors.number}
      />
      {errors.number && <ErrorMessage>{errors.number.message}</ErrorMessage>}
      <FormBtn type="submit">Add contact</FormBtn>
    </Form>
  );
};

export default AddContactForm;
