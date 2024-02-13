import React, { useEffect, useRef, useState } from 'react'
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHAType } from 'react-google-recaptcha'
import { Loader } from '../atoms/Loader'
import { useGenerals } from '@/context/generals.context'
import { useForm } from 'react-hook-form'
import {
  emailPattern,
  formatPhoneNumber,
  namePattern,
  phonePattern,
} from '@/lib/formUtils'
import { baseApi } from '@/lib/baseApi'
import { useNavbarContext } from '@context/navbar.context'

interface ContactFormProps {
  title: string
  form: any
}

export default function ContactForm({ title, form }: ContactFormProps) {
  const { name, phone, email, message } = form
  const messages = form.messages

  const [captchaResponse, setCaptchaResponse] = useState('')
  const [showCaptchaError, setShowCaptchaError] = useState(false)
  const captchaRef = useRef<ReCAPTCHAType>(null)
  const captchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY as string

  const [successForm, setSuccessForm] = useState(false)
  const [sending, setSending] = useState(false)
  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const { multilanguage } = useGenerals()
  const { showContact, setShowContact } = useNavbarContext()

  const onChangeRecaptcha = (response: any) => {
    setCaptchaResponse(response)
    setShowCaptchaError(false)
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    reset,
  } = useForm({ mode: 'onChange', shouldUnregister: false })

  const nameValue = watch('name')
  const phoneValue = watch('phone')
  const emailValue = watch('email')
  const messageValue = watch('message')

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(event.target.value)
    setValue('phone', formattedPhoneNumber)
  }

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
      if (!captchaResponse) {
        setShowCaptchaError(true)

        return
      }

      setSending(true)

      setDataForm((prevDataForm: any) => ({
        ...prevDataForm,
        name: data.name,
        last_name: data.last_name,
        phone: data.phone,
        email: data.email,
        message: data.message,
      }))
    } catch (error) {
      setCaptchaResponse('')
    }
  }

  const handleClose = () => {
    setShowContact(false)
    document.body.style.overflow = ''
  }

  useEffect(() => {
    if (
      dataForm.name !== '' &&
      dataForm.phone !== '' &&
      dataForm.email !== ''
    ) {
      sendForm()
    } else {
    }
  }, [dataForm])

  return (
    <div className={`contact ${showContact ? 'show' : ''}`}>
      <button className='contact-close' onClick={handleClose}>
        <i className='icon-cross'></i>
      </button>

      <h4 className='contact-title'>{title}</h4>

      <form onSubmit={handleSubmit(onSubmit)} className='contactForm'>
        <div className='contactForm-input'>
          <label htmlFor={name.name}>{name.label}</label>
          <input
            {...register('name', {
              required: true,
              pattern: {
                value: namePattern,
                message: messages.invalid_name,
              },
            })}
            className={`contactForm-input-input ${errors.name ? 'error' : ''}`}
          />

          <div className={`error-group ${errors.name && 'error'} `}>
            {errors.name && nameValue?.length > 0 && (
              <span>{String(errors.name.message)}</span>
            )}
          </div>
        </div>

        <div className='contactForm-input'>
          <label htmlFor={email.name}>{email.label}</label>
          <input
            {...register('email', {
              required: true,
              pattern: {
                value: emailPattern,
                message: messages.invalid_email,
              },
            })}
            className={`contactForm-input-input ${errors.email ? 'error' : ''}`}
          />
          <div className={`error-group ${errors.email && 'error'} `}>
            {errors.email && emailValue?.length > 0 && (
              <span>{String(errors.email.message)}</span>
            )}
          </div>
        </div>

        <div className='contactForm-input'>
          <label htmlFor={phone.name}>{phone.label}</label>
          <input
            {...register('phone', {
              required: true,
              pattern: {
                value: phonePattern,
                message: messages.invalid_tel,
              },
            })}
            onChange={handlePhoneChange}
            className={`contactForm-input-input ${errors.phone ? 'error' : ''}`}
          />
          <div className={`error-group ${errors.phone && 'error'} `}>
            {errors.phone && phoneValue?.length > 0 && (
              <span>{String(errors.phone.message)}</span>
            )}
          </div>
        </div>

        <div className='contactForm-input'>
          <label htmlFor={message.name}>{message.label}</label>
          <textarea
            {...register('message', {
              required: false,
            })}
            className={`contactForm-input-input textarea ${
              errors.message ? 'error' : ''
            }`}
          />
          <div className={`error-group ${errors.message && 'error'} `}>
            {errors.message && messageValue?.length > 0 && (
              <span>{String(errors.message.message)}</span>
            )}
          </div>
        </div>

        {/* <div className='relative recaptcha'>
          <ReCAPTCHA
            sitekey={captchaKey}
            onChange={onChangeRecaptcha}
            ref={captchaRef}
          />
          {showCaptchaError && (
            <div className={`error-captcha`}>
              <span className='text-red-500'>
                <i className='icon-warning'></i>
                {multilanguage.lbl_error_recaptcha}
              </span>
            </div>
          )}
        </div> */}

        <div className='form-buttom'>
          <button type='submit'>
            {sending ? <Loader /> : multilanguage.labels_buttons.lbl_send}
          </button>
        </div>

        <div className='messages'>
          {successForm && (
            <span className={`feedback-message init`}>
              {messages.mail_sent_ok}
            </span>
          )}
        </div>
      </form>
    </div>
  )
}
