import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { ACRIL_COLORS } from '../constants/brandColors';
import { PRODUCT_LINES } from '../constants/colors';

interface SearchResult {
  id: string;
  name: string;
  line: string;
  type: string;
  description: string;
  colors: string[];
  pdfUrl?: string;
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Función para buscar productos
  const searchProducts = (searchQuery: string): SearchResult[] => {
    if (!searchQuery.trim()) return [];

    const searchTerm = searchQuery.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const allResults: SearchResult[] = [];

    PRODUCT_LINES.forEach(line => {
      line.products.forEach(product => {
        // Buscar en nombre del producto
        const productName = product.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const lineName = line.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        // Buscar coincidencias
        const matchesProduct = productName.includes(searchTerm) ||
                             product.name.toLowerCase().includes(searchTerm);
        const matchesLine = lineName.includes(searchTerm) ||
                           line.name.toLowerCase().includes(searchTerm);
        const matchesDescription = product.description?.toLowerCase().includes(searchTerm);
        const matchesColor = product.colors.some(color =>
          color.name.toLowerCase().includes(searchTerm) ||
          color.types.some(type => type.toLowerCase().includes(searchTerm))
        );

        if (matchesProduct || matchesLine || matchesDescription || matchesColor) {
          allResults.push({
            id: `${line.name}-${product.name}`,
            name: product.name,
            line: line.name,
            type: line.name,
            description: product.description || '',
            colors: product.colors.map(color => color.name),
            pdfUrl: undefined
          });
        }
      });
    });

    return allResults.slice(0, 8); // Limitar a 8 resultados
  };

  // Efecto para buscar cuando cambia el query
  useEffect(() => {
    if (query.length > 1) {
      setIsLoading(true);
      const searchResults = searchProducts(query);
      setResults(searchResults);
      setIsOpen(true);
      setIsLoading(false);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResultClick = (result: SearchResult) => {
    setQuery(result.name);
    setIsOpen(false);
    // Aquí podrías navegar a la página del producto
    console.log('Navegar a producto:', result);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Navegar a página de resultados completa
      window.location.href = `/busqueda?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <div className="relative w-full max-w-md" ref={searchRef}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4"
            style={{ color: ACRIL_COLORS.bloodRed600 }}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar productos, colores, tipos..."
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
            style={{
              '--tw-ring-color': ACRIL_COLORS.bloodRed600
            } as React.CSSProperties}
            onFocus={() => query.length > 1 && setIsOpen(true)}
          />
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          )}
          {isLoading && (
            <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 animate-spin" style={{ color: ACRIL_COLORS.bloodRed600 }} />
          )}
        </div>
      </form>

      {/* Dropdown de resultados */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          {results.map((result, index) => (
            <button
              key={`${result.id}-${index}`}
              onClick={() => handleResultClick(result)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-gray-900">{result.name}</span>
                    <span
                      className="px-2 py-1 text-xs rounded-full text-white"
                      style={{ backgroundColor: ACRIL_COLORS.bloodRed600 }}
                    >
                      {result.line}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{result.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {result.colors.slice(0, 3).map((color, colorIndex) => (
                      <span
                        key={colorIndex}
                        className="px-2 py-1 text-xs bg-gray-100 rounded text-gray-700"
                      >
                        {color}
                      </span>
                    ))}
                    {result.colors.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 rounded text-gray-700">
                        +{result.colors.length - 3} más
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))}
          <div className="px-4 py-2 border-t border-gray-100">
            <button
              onClick={handleSubmit}
              className="w-full text-sm text-center py-2 rounded hover:bg-gray-50 transition-colors"
              style={{ color: ACRIL_COLORS.bloodRed600 }}
            >
              Ver todos los resultados ({results.length}+)
            </button>
          </div>
        </div>
      )}

      {/* Sin resultados */}
      {isOpen && query.length > 1 && results.length === 0 && !isLoading && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
          <p className="text-sm text-gray-500 text-center">
            No se encontraron productos para "{query}"
          </p>
          <button
            onClick={handleSubmit}
            className="w-full text-sm text-center py-2 mt-2 rounded hover:bg-gray-50 transition-colors"
            style={{ color: ACRIL_COLORS.bloodRed600 }}
          >
            Buscar en todas las líneas de productos
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
