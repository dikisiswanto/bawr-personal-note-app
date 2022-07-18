export default function Toast({ message, show }) {
  return <div className={`toast success ${show && 'show'}`}>{message}</div>;
}
