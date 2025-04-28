import Form from '../../components/form/form';
import Input from '../../components/form/input/input';
import ButtonSubmit from '../../components/form/buttonSubmit/buttonSubmit';
import { RegistrationFormState } from '../../shared/types/form';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationShema } from '../../shared/utils/validation';

const RegistrationHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegistrationFormState>({
    mode: 'onChange',
    resolver: yupResolver(registrationShema),
  });

  const submitButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isValid && submitButtonRef.current) {
      submitButtonRef.current.focus();
    }
  }, [isValid]);

  const onSubmit = (values: RegistrationFormState) => {
    if (isValid) {
      console.log('Submitted values:', values);
    }
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
          {...register('password')}
          placeholder="Enter password"
          error={errors.password?.message}
        />
        <Input
          label="Confirm password"
          {...register('confirmPassword')}
          placeholder="Enter password"
          error={errors.confirmPassword?.message}
        />
        <ButtonSubmit disabled={!isValid} ref={submitButtonRef}>
          Submit
        </ButtonSubmit>
      </Form>
    </section>
  );
};

export default RegistrationHookForm;
