import React from "react";

export default function PopupWithForm({
  title,
  name,
  children,
  isOpen,
  onClose,
  onSubmit,
  isValid,
  isDirty,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          className={`popup__form popup__edit-form_${name}`}
          name={`form-${name}`}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button
            type="submit"
            aria-label="Сохранение изменений"
            className={`popup__save-form ${
              !isValid || !isDirty ? "popup__submit-btn_inactive" : ""
            }`}
            disabled={!isValid || !isDirty}
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}
