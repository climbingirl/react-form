import Form from '../../components/form/form';
import Input from '../../components/form/input/input';
import ButtonSubmit from '../../components/form/buttonSubmit/buttonSubmit';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationShema } from '../../shared/utils/validation';

export interface RegistrationFormState {
  email: string;
  password: string;
  passcheck: string;
}

const RegistrationHookForm = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { touchedFields, errors, isValid },
  } = useForm<RegistrationFormState>({
    mode: 'onTouched',
    resolver: yupResolver(registrationShema),
    defaultValues: {
      email: '',
      password: '',
      passcheck: '',
    },
  });

  const submitButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isValid && submitButtonRef.current) {
      submitButtonRef.current.focus();
    }
  }, [isValid]);

  const onSubmit = (values: RegistrationFormState) => {
    console.log('Submitted values:', values);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          {...register('email')}
          placeholder="Enter email"
          error={errors.email?.message}
        />
        <Input
          label="Password"
          {...register('password', {
            onChange: () => touchedFields.passcheck && trigger('passcheck'),
          })}
          placeholder="Enter password"
          type="password"
          error={errors.password?.message}
        />
        <Input
          label="Confirm password"
          {...register('passcheck')}
          type="password"
          placeholder="Enter password"
          error={errors.passcheck?.message}
        />
        <ButtonSubmit disabled={!isValid} ref={submitButtonRef}>
          Submit
        </ButtonSubmit>
      </Form>
    </section>
  );
};

export default RegistrationHookForm;
