import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'magenta' | 'teal-outline' | 'ink-outline' | 'ghost';

const variantClass: Record<Variant, string> = {
  magenta: 'btn-magenta',
  'teal-outline': 'btn-teal-outline',
  'ink-outline': 'btn-ink-outline',
  ghost: 'btn-ghost',
};

interface BaseProps {
  variant: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonProps = BaseProps &
  ({ as?: 'button' } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>);

type AnchorProps = BaseProps &
  ({ as: 'a' } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>);

type Props = ButtonProps | AnchorProps;

export function Button({ variant, children, className = '', ...rest }: Props) {
  const classes = `btn ${variantClass[variant]} ${className}`.trim();

  if ((rest as AnchorProps).as === 'a') {
    const { as: _as, ...aProps } = rest as AnchorProps;
    return (
      <a className={classes} {...aProps}>
        {children}
      </a>
    );
  }

  const { as: _as, ...btnProps } = rest as ButtonProps;
  return (
    <button className={classes} {...btnProps}>
      {children}
    </button>
  );
}
