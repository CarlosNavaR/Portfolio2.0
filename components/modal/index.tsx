import React from 'react';
import { motion } from 'framer-motion';
import { ModalPropsType } from '@/types/modal';
import Styles from './index.module.scss';

const dropIn = {
  hidden: {
    y: '100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

export default function index(props: ModalPropsType) {
  return (
    <>
      {props.visible && (
        <motion.div
          className={`${Styles.modal} ${
            props.hasOverlay ? Styles.overlay : ''
          }`}
          onClick={props.hasOverlay ? props.onClose : () => {}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={Styles.modal_content}
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
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
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
