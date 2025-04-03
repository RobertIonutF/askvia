interface NavLinkProps {
  className?: string;
  onClick?: () => void;
}

export function NavLinks({ className = '', onClick }: NavLinkProps) {
  const links = [
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#use-cases', label: 'Use Cases' },
    { href: '#pricing', label: 'Pricing' }
  ];

  return (
    <ul className={`flex ${className}`}>
      {links.map((link) => (
        <li key={link.href}>
          <a 
            href={link.href} 
            className="px-4 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 font-medium transition-colors"
            onClick={onClick}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
} 