import React from 'react';
import cx from 'classnames';
import { format as formatDate } from 'date-fns';

export function Button({ className, ...props }) {
     return <button className={['Button', className].join(' ')} {...props} />
};

export function Textarea({ className, ...props }) {
     return (
          <textarea className={['Textarea', className].join(' ')} {...props} />
     );
};

export function FormatD({ date, format='Do MMMM YYYY' }) {
    return formatDate(date, format)
}

export function Label({ className, ...props }) {
    return (
      <label className={cx('Label', className)} {...props} />
    )
  }
  
export const Input =  React.forwardRef(({ className, ...props }, ref) => {
    return (
      <input className={cx('Input', className)} type='text' ref={ref} {...props} />
    )
})
  
export function Required({ className, ...props }) {
     return (
          <span className={['Required', className].join(' ')} {...props}>
               &#42;
          </span>
     );
};
  
export function Section({ className, list, ...props }) {
     const classes = [
          'Section',
          list && 'Section--list',
          className,
     ].filter(Boolean).join(' ');
     return (
          <section className={classes} {...props} />
     );
};