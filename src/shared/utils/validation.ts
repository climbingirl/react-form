import { RegistrationFormState } from '../types/form';

export interface ValidationRule {
  regex: RegExp;
  error: string;
}

export const emailValidationRule: ValidationRule = {
  regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  error: 'Incorrect email. Example of correct format: user@example.com',
};

export const passwordValidationRule: ValidationRule = {
  regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  error:
    'Weak password. It must contain at least 8 characters, including numeric, uppercase and lowercase letters, and special character',
};

export const validateField = (
  field: keyof RegistrationFormState,
  vals: RegistrationFormState
): string | undefined => {
  const value = vals[field].trim();

  switch (field) {
    case 'email':
      if (!value) return undefined;
      if (!emailValidationRule.regex.test(vals.email)) return emailValidationRule.error;
      return undefined;

    case 'password':
      if (!value) return undefined;
      if (!passwordValidationRule.regex.test(vals.password))
        return passwordValidationRule.error;
      return undefined;

    case 'confirmPassword':
      if (!value) return undefined;
      if (vals.confirmPassword !== vals.password) return 'Passwords must match';
      return undefined;

    default:
      return undefined;
  }
};
