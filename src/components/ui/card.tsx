import React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", title, description, children, ...props }, ref) => {
    return (
      <div ref={ref} className={`shadcn-card ${className}`} {...props}>
        {title && <div className="shadcn-card-title">{title}</div>}
        {description && <div className="shadcn-card-desc">{description}</div>}
        <div>{children}</div>
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
