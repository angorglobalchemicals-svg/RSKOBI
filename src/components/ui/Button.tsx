import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  showArrow?: boolean;
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variants = {
  primary: 'bg-grey-900 text-white hover:bg-black',
  outline: 'border border-grey-900 text-grey-900 hover:bg-grey-900 hover:text-white',
  ghost: 'text-grey-900 hover:text-grey-400',
};

export function Button({ children, className, variant = 'primary', showArrow = true, href, ...rest }: ButtonProps) {
  const classes = cn(
    'group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300',
    variants[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
