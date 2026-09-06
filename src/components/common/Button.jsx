export default function Button({
  children,
  variant = 'orange',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer select-none active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100';

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-bold shadow-md hover:shadow-lg',
  };

  const variants = {
    orange:
      'bg-[#e06d3b] hover:bg-[#c95726] text-white shadow-[#e06d3b]/30',
    purple:
      'bg-[#5c3b87] hover:bg-[#4a2e6f] text-white shadow-[#5c3b87]/30',
    green:
      'bg-[#5c9732] hover:bg-[#4b7c28] text-white shadow-[#5c9732]/30',
    blue:
      'bg-[#3c77b2] hover:bg-[#2f6091] text-white shadow-[#3c77b2]/30',
    red:
      'bg-[#8c2727] hover:bg-[#701e1e] text-white shadow-[#8c2727]/30',
    outline:
      'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50',
    ghost:
      'text-gray-700 hover:text-[#5c3b87] hover:bg-gray-100/60 shadow-none',
  };

  const combinedClasses = `${baseStyles} ${sizes[size] || sizes.md} ${variants[variant] || variants.orange} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}
