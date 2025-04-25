import React from 'react';
import styles from './buttonSubmit.module.scss';

interface ButtonSubmitProps {
  children: React.ReactNode;
  disabled: boolean;
}

const ButtonSubmit = React.forwardRef<HTMLButtonElement, ButtonSubmitProps>(
  ({ disabled, children }, ref) => {
    return (
      <button className={styles.item} type="submit" disabled={disabled} ref={ref}>
        {children}
      </button>
    );
  }
);

export default ButtonSubmit;
