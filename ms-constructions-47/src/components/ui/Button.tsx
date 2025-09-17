function cnSimple(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ')
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variants = {
    primary: "bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 shadow-md hover:shadow-lg",
    secondary: "bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 shadow-md hover:shadow-lg",
    outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500",
    ghost: "text-primary-500 hover:bg-primary-50 focus:ring-primary-500",
    cta: "bg-gradient-to-r from-[#E53935] to-[#D32F2F] text-white shadow-lg hover:shadow-xl hover:from-[#F44336] hover:to-[#C62828] focus:ring-[#E53935]"
  }
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl"
  }
  
  return (
    <button 
      className={cnSimple(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button