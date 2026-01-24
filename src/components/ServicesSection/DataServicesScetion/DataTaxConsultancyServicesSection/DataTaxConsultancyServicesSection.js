export const DataTaxConsultancyServicesSection = {
  titleProps: {
    title: (
      <>
        <span className="text-darkNavyBlue">Our</span>
        <span className="text-darkOrange"> Tax Consultancy</span>
        <span className="text-darkNavyBlue"> Services</span>
      </>
    ),
  },
  descriptionProps: {
    description: (
      <>
        <span className="text-charcoalGray">Mirage Works provides comprehensive Tax Consultancy solutions, combining technology & expertise to help businesses navigate the complexities of taxation. Our goal is to maximize your tax benefits while ensuring full compliance</span>
      </>
    ),
  },
  services: [
    {
      id: 1,
      logo: "logo/tax1.png",
      title: "Tax Planning & Strategy",
      description: "Perform your ventures to maximize tax concepts",
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
      logo: "logo/tax2.png",
      title: "Tax Compliance & Filings",
      description: "Get a full picture of assets, financial and cash management",
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
      logo: "logo/tax3.png",
      title: "Tax Optimization & Savings",
      description: "Purchase the smartest filings , detailed tax concepts ",
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