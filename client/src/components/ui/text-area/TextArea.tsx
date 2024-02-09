import { forwardRef } from 'react';
import styles from './text-area.module.scss';
import ErrorText from '../field/error-text/ErrorText';

interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  error?: string;
  placeholder?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ placeholder, error, ...rest }, ref) => {
    return (
      <div className={styles.container}>
        <textarea {...rest} className={styles.textarea} ref={ref}></textarea>
        {error && <ErrorText>{error}</ErrorText>}
      </div>
    );
  },
);

export default TextArea;
