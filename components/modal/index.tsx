import React from 'react';
import { ModalPropsType } from '@/types/modal';
import Styles from './index.module.scss';

export default function index(props: ModalPropsType) {
  return (
    <>
      {props.visible && (
        <div
          className={`${Styles.modal} ${
            props.hasOverlay ? Styles.overlay : ''
          }`}
          onClick={props.hasOverlay ? props.onClose : () => {}}
        >
          <div className={Styles.modal_content}>
            <div className={Styles.modal_header}>
              <span className={Styles.modal_title}>{props.title}</span>
              {props.closable && (
                <span className={Styles.modal_close} onClick={props.onClose}>
                  X
                </span>
              )}
            </div>
            <div className={Styles.modal_body}>{props.content}</div>
            {props.footer && (
              <div className={Styles.modal_footer}>{props.footer}</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
