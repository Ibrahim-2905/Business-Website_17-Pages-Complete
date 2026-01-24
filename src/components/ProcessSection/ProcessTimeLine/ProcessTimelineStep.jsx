export const ProcessTimelineStep = ({ step, title, isFirst, isLast }) => {
  return (
    <div className="flex flex-col items-center flex-1 relative">
      {/* Circle and Line Container */}
      <div className="flex items-center w-full">
        {/* Line before (left side) - invisible spacer if first */}
        <div className={`flex-1 h-1 ${!isFirst ? 'bg-teal-700' : ''}`}></div>
        {/* Circle */}
        <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-teal-700 text-white font-bold text-lg md:text-xl flex-shrink-0 z-10">
          {step}
        </div>
        {/* Line after (right side) - invisible spacer if last */}
        <div className={`flex-1 h-1 ${!isLast ? 'bg-teal-700' : ''}`}></div>
      </div>
      {/* Title - Centered below circle */}
      <div className="mt-4 text-center px-2 w-full">
        <p className="text-sm md:text-base font-medium whitespace-pre-line text-gray-800 leading-tight">
          {title}
        </p>
      </div>
    </div>
  );
};