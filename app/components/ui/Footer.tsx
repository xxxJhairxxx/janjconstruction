/** @format */

import { baseApi } from '@/lib/baseApi'
import { emailPattern } from '@/lib/formUtils'
import { Loader } from '@atoms/Loader'
import { useGenerals } from '@context/generals.context'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Footer = () => {
  const {
    general,
    multilanguage: { labels_buttons, footer_form, contact_form },
  } = useGenerals()

  const [successForm, setSuccessForm] = useState(false)
  const [sending, setSending] = useState(false)
  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    phone: '',
    services: '',
    message: '',
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({ mode: 'onChange', shouldUnregister: false })

  const messages = contact_form.messages

  const emailValue = watch('email')
  const messageValue = watch('message')

  const sendForm = async () => {
    try {
      await baseApi.post('/ezforms/submit', {
        formData: dataForm,
      })

      setTimeout(() => {
        setSending(false)
        reset()
        setSuccessForm(true)
      }, 2500)

      setTimeout(() => {
        setSuccessForm(false)
      }, 5000)
    } catch (error) {
      console.error(error)
    }
  }

  const onSubmit = async (data: any) => {
    try {
      // if (!captchaResponse) {
      //   setShowCaptchaError(true)

      //   return
      // }

      setSending(true)

      setDataForm((prevDataForm: any) => ({
        ...prevDataForm,
        email: data.email,
        message: data.message,
      }))
    } catch (error) {
      // setCaptchaResponse('')
    }
  }

  useEffect(() => {
    if (dataForm.email !== '') {
      sendForm()
    } else {
    }
  }, [dataForm])

  console.log(dataForm)

  return (
    <footer className={'Footer'}>
      <div className='Footer__title'>
        <h2>{footer_form.title}</h2>
        <p>{footer_form.text}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='Footer__form'>
        <div className='Footer__form__inputs'>
          <input
            {...register('email', {
              required: true,
              pattern: {
                value: emailPattern,
                message: messages.invalid_email,
              },
            })}
            placeholder={footer_form.email.placeholder}
          />
          <input
            {...register('message', {
              required: false,
            })}
            placeholder={footer_form.message.placeholder}
          />
        </div>

        <button>
          {sending ? (
            <Loader />
          ) : (
            <>
              <span className='btn-span'>{labels_buttons.lbl_send}</span>
              <i className='icon-arrow'></i>
            </>
          )}
        </button>
      </form>
      <div className='Footer__info'>
        <a href={general.address_url}>
          <address>{general.address}</address>
        </a>
        <a className='Footer__info-email' href={`emailto:${general.email}`}>
          {general.email}
        </a>
        <a className='Footer__info-phone' href={`tel:+${general.phone}`}>
          {general.phone}
        </a>
      </div>
    </footer>
  )
}

export default Footer
