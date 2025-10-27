import { Component, ErrorInfo, ReactNode } from 'react';
import { ACRIL_COLORS } from '../constants/brandColors';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error capturado por ErrorBoundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div style={{ color: ACRIL_COLORS.bloodRed500 }} className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Algo salió mal
            </h2>
            <p className="text-gray-600 mb-6">
              Lo sentimos, ha ocurrido un error inesperado. Por favor, recarga la página 
              o contacta con nosotros si el problema persiste.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-900 transition-colors"
                style={{ backgroundColor: ACRIL_COLORS.bloodRed600 }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACRIL_COLORS.bloodRed700)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACRIL_COLORS.bloodRed600)}
              >
                Recargar Página
              </button>
              <a
                href={`tel:+${import.meta.env.VITE_WHATSAPP_NUMBER || '584244597443'}`}
                className="block w-full bg-gray-100 text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Llamar a ACRIL Pinturas
              </a>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  Detalles del error (desarrollo)
                </summary>
                <pre className="mt-2 text-xs bg-gray-100 p-3 rounded overflow-auto">
                  {this.state.error.message}
                  {'\n'}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
