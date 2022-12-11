import styles from './button-form.module.scss';

/* eslint-disable-next-line */
export interface ButtonFormProps {}

export function ButtonForm(props: ButtonFormProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ButtonForm!</h1>
    </div>
  );
}

export default ButtonForm;
