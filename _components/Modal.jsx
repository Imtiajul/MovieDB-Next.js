"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

const Modal = ({ children }) => {
  const modalRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current.showModal()
    }
  }, [])

  function onHideModal() {
    router.back()
  }
  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHideModal}
      className="shadow-teal-700 shadow-md border border-teal-200 flex flex-col p-3 rounded-lg w-10/12 bg-gray-50/90 dark:bg-gray-800/90 overflow-hidden"
    >
      <span
        className="inline-flex justify-end cursor-pointer"
        onClick={onHideModal}
      >
        <Image src="/xmark.svg" alt="close icon" width="30" height="30" className="bg-white rounded-md w-7" />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  )
}

export default Modal
