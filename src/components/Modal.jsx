import React from 'react'
import "../assets/styles/components/Modal.scss"
import { ReactComponent as SVGClose } from "../assets/static/icons/close.svg"
import { createPortal } from 'react-dom'

const Modal = (props) => (
  props.isOpen
  ? createPortal(
    <div className='modal'>
      <figure onClick={props.onClose} className='modal__close'>
        <SVGClose className="modal__close-icon" />
      </figure>
      <div>{ props.children }</div>
    </div>,
    document.getElementById("modal")
  )
  : null
)

export default Modal