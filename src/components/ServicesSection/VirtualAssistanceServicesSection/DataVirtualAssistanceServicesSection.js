export const DataVirtualAssistanceServicesSection = {
    titleProps: {
        title: (
            <>
                <span className="text-darkNavyBlue">Our</span>
                <span className="text-darkOrange"> Virtual Assistance</span>
                <span className="text-darkNavyBlue"> Services</span>
            </>
        ),
    },

    services: [
        {
            id: 1,
            logo: "logo/virtualAssistanceLogo1.png",
            title: "Administrative Support",
            points: [
                "Email & calendar management",
                "File organization",
                "Office coordination",
                "Data entry & documentation",
                "Appointment scheduling",
            ],
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
            logo: "logo/virtualAssistanceLogo2.png",
            title: "SAP Optimization",
            points: [
                "CRM & ERP data management",
                "Process documentation",
                "Order & invoice support",
                "Reporting assistance",
                "Daily operational tasks",
            ],
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
            logo: "logo/virtualAssistanceLogo3.png",
            title: "SAP Implementation",
            points: [
                "Market & business research",
                "Data collection & analysis",
                "Report preparation",
                "Data validation",
                "Insight generation",
            ],
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
            id: 4,
            logo: "logo/customDevelopmentLogo4.png",
            title: "SAP Support",
            points: [
                "Email & chat support",
                "Ticket handling",
                "Customer follow-ups",
                "Issue tracking",
                "Service coordination",
            ],
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
}