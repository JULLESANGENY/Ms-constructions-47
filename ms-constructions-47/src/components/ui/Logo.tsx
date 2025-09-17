'use client'

interface LogoProps {
  className?: string
  variant?: 'full' | 'icon'
  size?: 'sm' | 'md' | 'lg'
}

const Logo = ({ className = '', variant = 'full', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: variant === 'full' ? 'w-8 h-8' : 'w-6 h-6',
    md: variant === 'full' ? 'w-12 h-12' : 'w-8 h-8',
    lg: variant === 'full' ? 'w-16 h-16' : 'w-12 h-12'
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      {/* Logo SVG authentique basé sur votre design */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fond blanc du cercle */}
        <circle cx="50" cy="50" r="48" fill="white" />
        
        {/* Bordure rouge du cercle */}
        <circle 
          cx="50" 
          cy="50" 
          r="47" 
          fill="none" 
          stroke="#dc2626" 
          strokeWidth="2"
        />
        
        {/* Texte CONSTRUCTION en arc supérieur */}
        <defs>
          <path id="topArc" d="M 18,50 A 32,32 0 0,1 82,50" />
        </defs>
        <text fontSize="7" fontWeight="bold" fill="#dc2626" fontFamily="Arial, sans-serif">
          <textPath href="#topArc" startOffset="50%" textAnchor="middle">
            CONSTRUCTION
          </textPath>
        </text>
        
        {/* MS en gras à gauche */}
        <text x="16" y="72" fontSize="14" fontWeight="900" fill="#2563eb" fontFamily="Arial, sans-serif">MS</text>
        
        {/* Truelle au centre - version simplifiée et moderne */}
        <g transform="translate(50,40)">
          {/* Manche de la truelle */}
          <rect x="-1.5" y="0" width="3" height="18" fill="#2563eb" rx="1" />
          {/* Partie métallique de la truelle */}
          <path 
            d="M-10,18 L-6,12 L6,12 L10,18 L8,25 L-8,25 Z" 
            fill="#2563eb" 
            stroke="#1d4ed8"
            strokeWidth="0.5"
          />
          {/* Mortier rouge sur la truelle */}
          <ellipse cx="0" cy="20" rx="6" ry="3" fill="#dc2626" />
        </g>
        
        {/* Texte MAÇONNERIE en arc inférieur */}
        <defs>
          <path id="bottomArc" d="M 82,50 A 32,32 0 0,1 18,50" />
        </defs>
        <text fontSize="7" fontWeight="bold" fill="#2563eb" fontFamily="Arial, sans-serif">
          <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
            MAÇONNERIE
          </textPath>
        </text>
      </svg>
    </div>
  )
}

export default Logo