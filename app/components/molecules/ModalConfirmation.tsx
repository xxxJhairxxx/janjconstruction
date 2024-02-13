import { useGenerals } from '@context/generals.context'
import React from 'react'

interface Props {
  closeModal: any
  showModal: boolean
}

const ModalConfimation = ({ closeModal, showModal }: Props) => {
  const {
    multilanguage: {
      contact_form: { messages },
      labels_buttons: { lbl_accept },
    },
  } = useGenerals()

  return (
    <div className='modal-overlayCreate' onClick={closeModal}>
      <div
        className={`modal confirmation ${
          showModal
            ? 'modal-container-enter-active'
            : 'modal-container-leave-active'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='modal-check'>
          <i className='icon-check'></i>
        </div>
        <p>{messages.mail_sent_ok}</p>
        <button onClick={closeModal}>{lbl_accept}</button>
      </div>
    </div>
  )
}

export default ModalConfimation
