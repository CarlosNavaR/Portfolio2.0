export type ModalPropsType = {
  title?: string;
  content?: string | React.ReactNode;
  width?: number;
  closable?: boolean;
  className?: string;
  style?: React.CSSProperties;
  visible?: boolean;
  footer?: React.ReactNode;
  closeIcon?: React.ReactNode;
  onClose?: () => void;
  hasOverlay?: boolean;
};
