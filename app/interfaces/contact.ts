export interface ContactForm {
  id: number
  title: string
  name: InputForm
  email: InputForm
  phone: InputForm
  services: InputForm
  message: InputForm
  messages: Messages
}

export interface InputForm {
  id: number
  name: string
  label: string
  placeholder: string
}

export interface FooterForm {
  id: number
  title: string
  text: string
  email: InputForm
  message: InputForm
}

export interface Messages {
  invalid_tel: string
  invalid_name: string
  mail_sent_ok: string
  invalid_email: string
  invalid_number: string
  invalid_required: string
  validation_error: string
  invalid_recaptcha: string
}
