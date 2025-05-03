import React, { useEffect, useRef, useState } from 'react';
import ButtonSubmit from '../../components/form/buttonSubmit/buttonSubmit';
import Form from '../../components/form/form';
import Input from '../../components/form/input/input';
import { validateField } from '../../shared/utils/validation';
import { RegistrationFormState } from '../../shared/types/form';

export type FormErrors = { [K in keyof RegistrationFormState]?: string | null };

const RegistrationBasic = () => {
  const [values, setValues] = useState<RegistrationFormState>({
    email: '',
    password: '',
    passcheck: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const newErrors: FormErrors = {};
    (Object.keys(values) as (keyof RegistrationFormState)[]).forEach((field) => {
      const value = values[field];
      let error;
      if (!value) {
        error = null;
      } else {
        error = validateField(field, value, values);
      }
      newErrors[field] = error;
    });
    setErrors(newErrors);

    const allFieldsFilled = (
      Object.keys(values) as (keyof RegistrationFormState)[]
    ).every((field) => values[field].trim() !== '');
    const hasErrors = Object.values(newErrors).some(Boolean);
    setIsFormValid(allFieldsFilled && !hasErrors);
  }, [values]);

  useEffect(() => {
    if (isFormValid && submitButtonRef.current) {
      submitButtonRef.current.focus();
    }
  }, [isFormValid]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted values:', values);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Input
          label="Email"
          name="email"
          value={values.email}
          placeholder="Enter email"
          error={errors.email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={values.password}
          placeholder="Enter password"
          error={errors.password}
          onChange={handleChange}
        />
        <Input
          label="Confirm password"
          name="passcheck"
          type="password"
          value={values.passcheck}
          placeholder="Confirm password"
          error={errors.passcheck}
          onChange={handleChange}
        />
        <ButtonSubmit disabled={!isFormValid} ref={submitButtonRef}>
          Submit
        </ButtonSubmit>
      </Form>
    </section>
  );
};

export default RegistrationBasic;
