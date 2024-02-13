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
import axios from 'axios'
import ModalConfimation from './ModalConfirmation'

interface ContactFormProps {
  title: string
  form: any
}

export default function ContactForm({ title, form }: ContactFormProps) {
  const { name, phone, email, services, message } = form
  const messages = form.messages

  const [captchaResponse, setCaptchaResponse] = useState('')
  const [showCaptchaError, setShowCaptchaError] = useState(false)
  const captchaRef = useRef<ReCAPTCHAType>(null)
  const captchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY as string

  const [successForm, setSuccessForm] = useState(false)
  const [sending, setSending] = useState(false)
  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    phone: '',
    services: '',
    message: '',
  })
  const [servicesForm, setServicesForm] = useState([])
  const [showModal, setShowModal] = useState(false)

  const { multilanguage } = useGenerals()
  const { showContact, setShowContact, serviceSelected } = useNavbarContext()

  const onChangeRecaptcha = (response: any) => {
    setCaptchaResponse(response)
    setShowCaptchaError(false)
  }

  const openModal = () => {
    setShowModal(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setShowModal(false)
    setShowContact(false)
    document.body.style.overflow = ''
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({ mode: 'onChange', shouldUnregister: false })

  const nameValue = watch('name')
  const emailValue = watch('email')
  const phoneValue = watch('phone')
  const servicesValue = watch('services')
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
        // setSuccessForm(true)
        openModal()
      }, 2500)

      // setTimeout(() => {
      //   setSuccessForm(false)
      // }, 5000)
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
        name: data.name,
        email: data.email,
        phone: data.phone,
        services: data.services,
        message: data.message,
      }))
    } catch (error) {
      // setCaptchaResponse('')
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
      dataForm.email !== '' &&
      dataForm.services !== ''
    ) {
      sendForm()
    } else {
    }
  }, [dataForm])

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/services?populate=deep`)
      .then((response) => setServicesForm(response.data.data))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    setDataForm((prevState) => {
      return { ...prevState, services: serviceSelected }
    })
  }, [setDataForm, serviceSelected])

  const arrays = servicesForm.map((services: any) => services.title)

  const servicesList = [].concat(...(arrays as any))

  console.log(dataForm)
  console.log(serviceSelected)

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
            placeholder={name.placeholder}
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
            placeholder={email.placeholder}
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
            placeholder={phone.placeholder}
            className={`contactForm-input-input ${errors.phone ? 'error' : ''}`}
          />
          <div className={`error-group ${errors.phone && 'error'} `}>
            {errors.phone && phoneValue?.length > 0 && (
              <span>{String(errors.phone.message)}</span>
            )}
          </div>
        </div>

        <div className='contactForm-input'>
          <label htmlFor={services.name}>{services.label}</label>

          <select
            {...register('services', {
              required: true,
            })}
          >
            <option value='' disabled>
              Services
            </option>
            {servicesList.map((service: any) => (
              <option key={service.id}>{service}</option>
            ))}
          </select>

          <div className={`error-group ${errors.services && 'error'} `}>
            {errors.services && servicesValue?.length > 0 && (
              <span>{String(errors.services.message)}</span>
            )}
          </div>
        </div>

        <div className='contactForm-input'>
          <label htmlFor={message.name}>{message.label}</label>
          <textarea
            {...register('message', {
              required: false,
            })}
            placeholder={message.placeholder}
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
                {multilanguage.labels.lbl_error_recaptcha}
              </span>
            </div>
          )}
        </div> */}

        <div className='form-button'>
          <button type='submit'>
            {sending ? <Loader /> : multilanguage.labels_buttons.lbl_send}
          </button>
        </div>

        {/* <div className='messages'>
          {successForm && (
            <span className={`feedback-message`}>{messages.mail_sent_ok}</span>
          )}
        </div> */}
        {showModal && (
          <ModalConfimation closeModal={closeModal} showModal={showModal} />
        )}
      </form>
    </div>
  )
}
