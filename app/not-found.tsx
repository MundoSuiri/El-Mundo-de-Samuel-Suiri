export default function NotFound() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <h2>Página no encontrada</h2>
      <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '2rem' }}>
        Lo sentimos, la página que buscas no existe.
      </p>
      <a 
        href="/" 
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#3498db',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          transition: 'background-color 0.3s'
        }}
      >
        Volver al inicio
      </a>
    </div>
  );
}
