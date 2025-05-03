import React, { Ref } from 'react';
import styles from './buttonSubmit.module.scss';

interface ButtonSubmitProps {
  children: React.ReactNode;
  disabled: boolean;
  ref: Ref<HTMLButtonElement>;
}

const ButtonSubmit = ({ disabled, children, ref }: ButtonSubmitProps) => {
  return (
    <button className={styles.item} type="submit" disabled={disabled} ref={ref}>
      {children}
    </button>
  );
};

export default ButtonSubmit;
