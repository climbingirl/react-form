import { InputHTMLAttributes } from 'react';
import styles from './input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | null;
  name: string;
}

const Input = ({ label, error, name, type = 'text', ...rest }: InputProps) => {
  return (
    <div className={styles.control}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <input className={styles.item} id={name} name={name} type={type} {...rest} />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
