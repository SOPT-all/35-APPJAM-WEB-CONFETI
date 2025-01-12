import React from 'react';
import { cn } from '../../utils';
import { buttonVariants } from './button.css';
import SvgIcLink from '../../icons/src/IcLink';

interface ButtonProps {
  text: string;
  type?: 'add' | 'link' | 'default';
  disabled?: boolean;
  className?: string;
}

export default function Button({
  text,
  type = 'default',
  disabled = false,
  className,
}: ButtonProps) {
  const linkIcon = type === 'link' ? <SvgIcLink /> : null;

  return (
    <button
      className={cn(buttonVariants({ type, disabled }), className)}
      disabled={disabled}
    >
      {text}
      {linkIcon}
    </button>
  );
}
