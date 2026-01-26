export const DataPayrollProcessingServicesSection = {
  titleProps: {
    title: (
      <>
        <span className="text-darkNavyBlue">Our</span>
        <span className="text-darkOrange"> Financial Reporting</span>
        <span className="text-darkNavyBlue"> Services</span>
      </>
    ),
  },
  descriptionProps: {
    description: (
      <>
        <span className="text-charcoalGray">Mirage Works, we provide comprehensive, technology-driven Payroll Processing solutions designed to save you time, reduce errors, and ensure compliance.</span>
      </>
    ),
  },
  services: [
    {
      id: 1,
      logo: "logo/payrollLogo1.png",
      title: "Payroll Setup & Configuration",
      description: "ERP-integrated payroll systems and employee data management",
      buttonProps: {
        text: "Learn More",
        textColor: "text-white",
        bgColor: "bg-darkOrange",
        rounded: "rounded-sm",
        padding: "px-7",
        hoverTextColor: "text-darkOrange",
        hoverBgColor: "bg-white",
        link: "/insight",
        border: "border-b-[3px] border-transparent hover:border-darkOrange",
      }
    },
    {
      id: 2,
      logo: "logo/payrollLogo2.png",
      title: "Salary Calculation & Processing",
      description: "Automated salaries, bonuses, deductions, and taxes",
      buttonProps: {
        text: "Learn More",
        textColor: "text-white",
        bgColor: "bg-darkOrange",
        rounded: "rounded-sm",
        padding: "px-7",
        hoverTextColor: "text-darkOrange",
        hoverBgColor: "bg-white",
        link: "/insight",
        border: "border-b-[3px] border-transparent hover:border-darkOrange",
      }
    },
    {
      id: 3,
      logo: "logo/payrollLogo3.png",
      title: "Compliance & Tax Filing",
      description: "Precise tax calculations and timely payroll-tax filing",
      buttonProps: {
        text: "Learn More",
        textColor: "text-white",
        bgColor: "bg-darkOrange",
        rounded: "rounded-sm",
        padding: "px-7",
        hoverTextColor: "text-darkOrange",
        hoverBgColor: "bg-white",
        link: "/insight",
        border: "border-b-[3px] border-transparent hover:border-darkOrange",
      }
    },
  ]
};