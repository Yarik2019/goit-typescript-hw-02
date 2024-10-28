import s from "./ErrorMessage.module.css";
interface PropsErrorMessage {
  message: string;
}

const ErrorMessage: React.FC<PropsErrorMessage> = ({ message }) => {
  return (
    <div>
      <p className={s.error}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
