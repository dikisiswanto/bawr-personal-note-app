export default function ConfirmDialog({
  onConfirm, onCancel, title, message,
}) {
  return (
    <div role="alertdialog">
      <div className="dialog-content text-gray-700">
        <h3 className="text-lg font-bold capitalize">{title}</h3>
        <p>{message}</p>
        <div className="flex justify-end gap-x-3 pt-3">
          <button
            type="button"
            className="bg-red-400/20 px-3 py-2 text-red-700 rounded"
            onClick={() => onConfirm()}
          >
            Hapus
          </button>
          <button type="button" className="bg-slate-300 px-3 py-2 rounded" onClick={() => onCancel()}>
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}
