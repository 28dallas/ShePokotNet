export default function Loading({ message = 'Loading...' }) {
  return (
    <div className="loading-container" role="status" aria-live="polite">
      <div className="loading-spinner"></div>
      <p className="loading-message">{message}</p>
      
      <style jsx>{`
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          padding: 2rem;
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(59, 107, 55, 0.2);
          border-top-color: var(--earthy-green);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .loading-message {
          margin-top: 1rem;
          color: #666;
          font-size: 1rem;
        }
      `}</style>
    </div>
  )
}

