export default function ErrorMessage({ message }) {
  return (
    <div className="alert alert-danger my-5" role="alert">
      {message}
    </div>
  );
}
