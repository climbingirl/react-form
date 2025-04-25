import React, { FormEvent } from 'react';
import styles from './form.module.scss';

interface FormProps {
  children: React.ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <form className={styles.item} onSubmit={onSubmit} noValidate>
      {children}
    </form>
  );
};

export default Form;
