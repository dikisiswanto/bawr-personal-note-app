import { useEffect, useState } from 'react';

export default function NoteForm({
  activeTabContent, setNotes, notes, setNotification,
}) {
  const initialFormError = { title: '', content: '' };
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [formError, setFormError] = useState(initialFormError);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const onAddNote = (e) => {
    e.preventDefault();
    setFormError(initialFormError);

    if (title.trim() === '') {
      setTitle(title.trim());
      setFormError((prevErrorState) => ({ ...prevErrorState, title: 'Judul tidak boleh kosong' }));
    }
    if (content.trim() === '') {
      setContent(content.trim());
      setFormError((prevErrorState) => ({
        ...prevErrorState,
        content: 'Isi catatan tidak boleh kosong',
      }));
    }
    if (title.trim() !== '' && content.trim() !== '') {
      setFormError(initialFormError);
      setTitle('');
      setContent('');
      setNotes([...notes, { title: title.trim(), content: content.trim() }]);
      setNotification('Catatan berhasil ditambahkan');
    }
  };

  useEffect(() => {
    if (title && content) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [title, content]);

  return (
    <form
      action="#"
      method="post"
      className={`${activeTabContent === 'form' ? 'space-y-5' : 'hidden'}`}
      id="form"
      data-action="add"
      aria-labelledby="tab-form"
      role="tabpanel"
      tabIndex="0"
      onSubmit={(e) => onAddNote(e)}
    >
      <h2 className="text-xl font-bold" id="form-title">
        Tambah Catatan Baru
      </h2>
      <div className="flex flex-col space-y-3">
        <label htmlFor="title" className="text-sm text-gray-700/90">
          Judul
        </label>
        <input
          type="text"
          id="title"
          className="h-10 rounded-md border border-gray-300/90 bg-gray-200/50 px-3 focus:border-primary focus:outline-none"
          value={title}
          onInput={({ target }) => setTitle(target.value)}
        />
        {formError.title && <p className="text-xs text-red-500">{formError.title}</p>}
      </div>
      <div className="flex flex-col space-y-3">
        <label htmlFor="content" className="text-sm text-gray-700/90">
          Isi Catatan
        </label>
        <textarea
          id="content"
          rows={5}
          className="rounded-md border border-gray-300/90 bg-gray-200/50 px-3 py-2 focus:border-primary focus:outline-none"
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
        {formError.content && <p className="text-xs text-red-500">{formError.content}</p>}
      </div>
      <div className="py-3">
        <button
          type="submit"
          className="w-full rounded-md bg-primary py-3 px-5 text-white"
          disabled={buttonDisabled}
        >
          Tambahkan Catatan
        </button>
      </div>
    </form>
  );
}
