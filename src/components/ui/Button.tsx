interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const Button = ({ href, children }: ButtonProps) => (
  <a href={href} className="btn">
    {children}
  </a>
);

export default Button;
