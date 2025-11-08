import React from 'react';


interface LogoProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'medium', 
  showText = true,
  className = '' 
}) => {
  // Updated larger size classes
  const sizeClasses = {
    small: 'logo-small',
    medium: 'logo-medium',
    large: 'logo-large',
    xlarge: 'logo-xlarge'
  };

  // Updated larger logo image sizes
  const logoSize = {
    small: { width: 56, height: 48 },   // Increased from 32
    medium: { width: 68, height: 64 },  // Increased from 40
    large: { width: 90, height: 85 },   // Increased from 48
    xlarge: { width: 120, height: 120 } // New extra large size
  };

  return (
    <div className={`logo ${sizeClasses[size]} ${className}`}>
      {/* Logo Image */}
      <div className="logo-image">
        <img 
          src="/logo.jpg" 
          alt="Millimani United Logo" 
          width={logoSize[size].width}
          height={logoSize[size].height}
          className="logo-img"
        />
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="logo-text">
          <div className="logo-primary">Millimani United</div>
          <div className="logo-subtitle">Community Empowerment</div>
        </div>
      )}
    </div>
  );
};

export default Logo;