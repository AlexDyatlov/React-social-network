import React from 'react'
import s from './FormsControls.module.scss'

const FormControl = ({input, child, meta: {touched, error}, children}) => {
  const hasError = touched && error
  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
      {children}
      { hasError && <span>{error}</span> }
    </div>
  )
}

export const Textarea = (props) => {
  const {input, child, meta, ...restProps} = props;
  return <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
  const {input, child, meta, ...restProps} = props;
  return <FormControl {...props}> <input {...input} {...restProps} /></FormControl>
}