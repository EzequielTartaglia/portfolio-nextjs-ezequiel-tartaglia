export default function ConfirmModal({ isOpen, onClose, onConfirm, message }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-primary p-6 rounded-lg shadow-lg text-center">
        <span className="mb-4 text-white">{message}</span>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onClose}
            className="button-primary-bg px-4 py-2 rounded"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="button-delete-bg text-primary px-4 py-2 rounded"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
