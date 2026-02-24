export default function SkipLink() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <style jsx>{`
        .skip-link {
          position: absolute;
          top: -40px;
          left: 0;
          background: var(--earthy-green);
          color: white;
          padding: 8px 16px;
          z-index: 10000;
          transition: top 0.3s;
          text-decoration: none;
          font-weight: 600;
          border-radius: 0 0 4px 0;
        }

        .skip-link:focus {
          top: 0;
          outline: 3px solid var(--burnt-ochre);
          outline-offset: 2px;
        }
      `}</style>
    </>
  )
}

