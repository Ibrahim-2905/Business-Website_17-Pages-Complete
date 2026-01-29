export const TechTools = ({ tools }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-semibold text-center mb-8 text-darkNavyBlue">
        Tools & Technologies We Use
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {tools.map((tool, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-xl">{tool.icon}</span>
            <span className="text-charcoalGray text-base">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
