interface PageTitleProps {
  children: React.ReactNode;
}

const PageTitle = ({ children }: PageTitleProps) => (
  <h1 className="page-title">
    {children}
  </h1>
);

export default PageTitle;
