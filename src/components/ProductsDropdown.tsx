import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { PRODUCT_LINES } from '../constants/colors';

interface ProductsDropdownProps {
  onProductLineSelect?: (lineName: string) => void;
}

const ProductsDropdown: React.FC<ProductsDropdownProps> = ({ onProductLineSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleProductLineClick = (lineName: string) => {
    if (onProductLineSelect) {
      onProductLineSelect(lineName);
    }
    setIsOpen(false);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="font-medium px-2 py-1 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:text-red-800 text-gray-800 flex items-center gap-1"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Menú de productos"
      >
        Productos
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="py-2">
            {PRODUCT_LINES.map((line) => (
              <button
                key={line.name}
                onClick={() => handleProductLineClick(line.name)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900 text-sm">
                    {line.name}
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    {line.description}
                  </span>
                  <span className="text-xs text-blue-600 mt-1">
                    {line.products.length} producto{line.products.length !== 1 ? 's' : ''}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsDropdown;
