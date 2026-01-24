// export const DataFinancialReportingServicesSection = [
//   {
//     id: 1,
//     logo: "logo/financial1.png",
//     title: "Profit & Loss Statement",
//     description: "Understand revenues, costs, and profitability",
//   },
//   {
//     id: 2,
//     logo: "logo/financial2.png",
//     title: "Balance Sheets & Cash Flow Reports",
//     description: "Get a full picture of assets, liabilities, & cash management",
//   },
//   {
//     id: 3,
//     logo: "logo/financial3.png",
//     title: "Custom & Ad-Hoc Reports",
//     description: "Tailored financial reports to meet your unique business eeds",
//   },
//   {
//     id: 4,
//     logo: "logo/financial4.png",
//     title: "Financial Dashboards",
//     description: "Interactive dashboards showing interesting key performance",
//   },
//   {
//     id: 5,
//     logo: "logo/financial5.png",
//     title: "KPI Dashboards",
//     description: "Understand revenues, costs, and profitability",
//   },
//   {
//     id: 6,
//     logo: "logo/financial6.png",
//     title: "Budgeting & Forcasting Reports",
//     description: "Understand revenues, costs, and profitability",
//   }
// ];
















export const DataFinancialReportingServicesSection = {
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
        <span className="text-charcoalGray">Our financial reporting services tailored to meet the needs of small business. SMEs & enterprises</span>
      </>
    ),
  },
  services: [
    {
      id: 1,
      logo: "logo/financial1.png",
      title: "Profit & Loss Statement",
      description: "Understand revenues, costs, and profitability",
    //   buttonProps: {
    //     text: "Learn More",
    //     textColor: "text-white",
    //     bgColor: "bg-darkOrange",
    //     rounded: "rounded-sm",
    //     padding: "px-7",
    //     hoverTextColor: "text-darkOrange",
    //     hoverBgColor: "bg-white",
    //     link: "/insight",
    //     border: "border-b-[3px] border-transparent hover:border-darkOrange",
    //   }
    },
    {
      id: 2,
      logo: "logo/financial2.png",
      title: "Balance Sheets & Cash Flow Reports",
      description: "Get a full picture of assets, liabilities, & cash management",
      // No buttonProps - button won't show
    },
    {
      id: 3,
      logo: "logo/financial3.png",
      title: "Custom & Ad-Hoc Reports",
      description: "Tailored financial reports to meet your unique business needs",
    },
    {
      id: 4,
      logo: "logo/financial4.png",
      title: "Financial Dashboards",
      description: "Interactive dashboards showing interesting key performance",
    },
    {
      id: 5,
      logo: "logo/financial5.png",
      title: "KPI Dashboards",
      description: "Understand revenues, costs, and profitability",
    },
    {
      id: 6,
      logo: "logo/financial6.png",
      title: "Budgeting & Forecasting Reports",
      description: "Understand revenues, costs, and profitability",
    }
  ]
};