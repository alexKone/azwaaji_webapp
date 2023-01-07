import styles from './button-form.module.scss';

/* eslint-disable-next-line */
export interface ButtonFormProps {
  type: 'submit' | 'button' | 'reset';
  label: string;
}

export function ButtonForm(props: ButtonFormProps) {
  return (
    <div className={styles['container']}>
      <button type={props.type}>{props.label}</button>
    </div>
  );
}

export default ButtonForm;
