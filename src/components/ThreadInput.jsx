import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function ThreadInput({ addThread }) {
  const [content, setContent] = useState(
    {
      title: '',
      category: '',
      body: ''
    });

  const [validate, setValidate] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent(prevContent => ({
      ...prevContent,
      [name]: value
    }));
  };

  // Use useEffect to validate inputs on content change
  useEffect(() => {
    const isValid = content.title !== '' && content.category !== '' && content.body !== '';
    setValidate(isValid);
  }, [content]);

  return (
    <form className='thread-input'>
      <input
        name='title'
        type='text'
        value={content.title}
        onChange={handleChange}
        placeholder='Title'
      />
      <input
        name='category'
        type='text'
        value={content.category}
        onChange={handleChange}
        placeholder='Category'
      />
      <textarea
        name='body'
        type='text'
        value={content.body}
        onChange={handleChange}
        placeholder='Body content'
      />
      <button
        type='button'
        onClick={() => addThread({ content })}
        disabled={!validate}
      >
        Create Thread
      </button>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func
}

export default ThreadInput;
