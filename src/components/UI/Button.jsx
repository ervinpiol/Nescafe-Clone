import React from "react";

const Button = (props) => {
  const { children, className, ...rest } = props;

  const defaultClasses = `font-GothamRoundedMedium px-5 py-3 rounded-br-3xl button_animation`;

  const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

  return (
    <button className={`${classes} `} {...rest}>
      {children}
    </button>
  );
};

export default Button;
