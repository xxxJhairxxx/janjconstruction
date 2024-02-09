import { FC } from 'react'

interface InputProps {
  label: string
  name: string
  type: string
  inputType?: 'select' | 'textarea'
}

export const InputType: FC<InputProps> = ({
  name,
  label,
  type,
  inputType = 'input',
}) => {
  const inputElement =
    inputType === 'select' ? (
      <select name={name} className='input-field'></select>
    ) : inputType === 'textarea' ? (
      <textarea name={name} className='input-field'></textarea>
    ) : (
      <input name={name} type={type} className='input-field' />
    )
  return (
    <div className='input-item'>
      <label htmlFor={name}>{label}</label>
      {inputElement}
    </div>
  )
}
