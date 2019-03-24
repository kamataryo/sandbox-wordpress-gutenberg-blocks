export const edit = ({ attributes, setAttributes }) => {
  const onChange = event => setAttributes({ text: event.target.value })
  return (
    <div>
      <input value={attributes.text} onChange={onChange} type={'text'} />
    </div>
  )
}

export const save = ({ attributes }) => {
  return (
    <div>
      <span className={'my-text'}>{`saved: ${attributes.text}`}</span>
    </div>
  )
}
