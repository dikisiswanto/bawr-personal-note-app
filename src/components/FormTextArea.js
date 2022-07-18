export default function FormTextArea({
  label, className, value, onInput, isError, rows,
}) {
  return (
    <textarea
      id={label}
      className={`rounded-md border bg-gray-200/50 px-3 py-2 focus:outline-none ${className ?? ''} ${
        isError ? 'border-red-500' : 'border-gray-300/90 focus:border-primary'
      }`}
      value={value}
      onInput={({ target }) => onInput(target.value)}
      rows={rows}
    />
  );
}
