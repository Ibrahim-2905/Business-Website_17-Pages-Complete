import React from 'react';
import { Users, TrendingUp, DollarSign, Check } from 'lucide-react';

export const StatisticsAccountingCard = ({ data }) => {
  const getIcon = (iconName) => {
    const icons = {
      Users: Users,
      TrendingUp: TrendingUp,
      DollarSign: DollarSign
    };
    const IconComponent = icons[iconName] || Users;
    return <IconComponent className="w-6 h-6" />;
  };

  return (
    <div className="bg-lightGray rounded-lg p-6 shadow-lg">
      <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-3 mb-4">
        <div className={`${data.color} ${data.iconColor} p-2 rounded-lg`}>
          {getIcon(data.icon)}
        </div>

        <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-5">
          {data.statistic && (
            <div className={`text-3xl font-bold ${data.iconColor}`}>
              {data.statistic}
            </div>
          )}
          <div className="text-charcoalGray text-base font-medium">
            {data.label}
          </div>
        </div>
      </div>

      <div className="space-y-2 text-center sm:text-left">
        {data.features.map((feature, index) => (
          <div
            key={index}
            className="flex justify-center sm:justify-start items-start gap-2"
          >
            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-charcoalGray">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
