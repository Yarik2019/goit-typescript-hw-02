import s from "./ErrorMessage.module.css";
function ErrorMessage({ message }) {
  return (
    <div>
      <p className={s.error}>{message}</p>
    </div>
  );
}

export default ErrorMessage;
