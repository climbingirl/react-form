import { RegistrationFormState } from '../types/form';
import * as yup from 'yup';
export interface ValidationRule {
  regex: RegExp;
  error: string;
}

const emailValidationRule: ValidationRule = {
  regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  error: 'Incorrect email',
};

const passwordValidationRule: ValidationRule = {
  regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  error:
    'Password must contain at least 8 characters, including numeric, uppercase and lowercase letters, and special character',
};

const validationRules: Record<keyof RegistrationFormState, ValidationRule | null> = {
  email: emailValidationRule,
  password: passwordValidationRule,
  passcheck: null,
};

export const validateField = (
  field: keyof RegistrationFormState,
  value: string,
  allValues: RegistrationFormState
): string | null => {
  const rule = validationRules[field];

  if (rule && !rule.regex.test(value)) {
    return rule.error;
  }

  if (field === 'passcheck' && value !== allValues.password) {
    return 'Passwords must match';
  }

  return null;
};

export const registrationShema = yup.object().shape({
  email: yup.string().email(emailValidationRule.error).required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(passwordValidationRule.regex, passwordValidationRule.error),
  passcheck: yup
    .string()
    .required('Password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});
