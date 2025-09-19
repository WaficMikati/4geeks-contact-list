import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useState } from 'react';

export default function DisplayEntry({ icon, text, size, edit, name }) {
  const [currText, setCurrText] = useState(text)

  useEffect(() => {
    setCurrText(text)
  }, [edit, text])

  const updateText = (e) => {
    setCurrText(e.target.textContent)
  }

  return (
    <div className='input-group flex-nowrap mb-1'>
      <span
        id='basic-addon1'
        className='input-group-text flex-shrink-0 bg-transparent border-0'
      >
        <FontAwesomeIcon icon={icon} />
      </span>
      <div
        {...(edit && { contentEditable: true })}
        {...(edit && { suppressContentEditableWarning: true })}
        className={`form-control text-wrap flex-shrink-1 text-start border-0 rounded-3 fs-${size} ${edit ? '' : 'bg-transparent'}`}
        onInput={updateText}
      >
        {edit ? text : currText}
      </div>
      <input type="hidden" name={name} value={currText} />
    </div>
  )
}