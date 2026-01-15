const TestimonialCard = ({ review, picture, name, jobTitle, bgGradient }) => {
  return (
    <div
      style={{ background: bgGradient }}
      className="rounded-lg p-8 shadow-xl max-w-md text-center"
    >
      {/* Quote Icon */}
     <div className="">
  <span className="text-darkOrange text-6xl font-serif leading-none">“</span>
</div>


      {/* Review Text */}
      <p className="text-white text-sm leading-relaxed mb-3">
        {review}
      </p>

      {/* Badge */}
      <div className="mb-2">
        <span className="text-white text-xs font-semibold">
          Highly recommended!
        </span>
      </div>

      {/* Divider */}
      <div className="w-60 mx-auto h-[1px] bg-darkOrange mb-2"></div>

      {/* User Info */}
      <div className="flex flex-row  justify-center items-center gap-3">
        <img
          src={picture}
          alt={name}
          className="w-17 h-17 rounded-full object-cover"
        />
        <div className="flex flex-col justify-start  items-start">
          <h4 className="text-white font-semibold text-base">{name}</h4>
          <p className="text-gray-300 text-xs">{jobTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
