interface PageDescriptionProps {
  children: React.ReactNode;
}

const PageDescription = ({ children }: PageDescriptionProps) => (
  <p className="page-description">
    {children}
  </p>
);

export default PageDescription;
