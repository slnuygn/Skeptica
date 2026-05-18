import React, { useState, useRef } from 'react';

function App() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (selectedFile: File) => {
    setFile(selectedFile);
    if (selectedFile.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <div style={{ 
      backgroundColor: 'white', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px'
    }}>
      <h1 style={{ 
        fontSize: '3.5rem', 
        fontWeight: '900', 
        color: '#111', 
        textAlign: 'center', 
        marginBottom: '10px',
        letterSpacing: '-1px'
      }}>
        Skeptica.
      </h1>
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: '400', 
        color: '#555', 
        textAlign: 'center', 
        marginBottom: '50px'
      }}>
        Debunk articles in a matter of minutes.
      </h2>

      <div 
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        style={{ 
          border: '2px dashed ' + (isDragging ? '#111' : '#d1d5db'), 
          borderRadius: '16px', 
          padding: '60px 40px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          backgroundColor: isDragging ? '#f3f4f6' : '#f9fafb',
          width: '100%',
          maxWidth: '600px',
          transition: 'all 0.2s ease-in-out'
      }}>
        {file ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            {preview ? (
              <img src={preview} alt="" style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px', objectFit: 'contain' }} />
            ) : (
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            )}
            <div style={{ fontSize: '1.25rem', fontWeight: '500', color: '#374151', textAlign: 'center', wordBreak: 'break-all' }}>
              {file.name}
            </div>
            <button 
              onClick={() => { setFile(null); setPreview(null); }}
              style={{ 
                marginTop: '12px',
                padding: '8px 16px', 
                fontSize: '0.875rem', 
                color: '#ef4444', 
                backgroundColor: '#fee2e2', 
                border: 'none', 
                borderRadius: '6px', 
                cursor: 'pointer',
                fontWeight: '600'
              }}>
                Remove file
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#6b7280',
              margin: 0,
              fontWeight: '500'
            }}>
              Drag and drop your article here or
            </p>
            
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              style={{ display: 'none' }} 
            />
            <button 
              onClick={handleBrowseClick}
              style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              fontSize: '1rem',
              fontWeight: '600',
              color: 'white',
              backgroundColor: '#111827',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              Browse
            </button>
          </div>
        )}
      </div>

      <div style={{
        marginTop: '60px',
        maxWidth: '800px',
        textAlign: 'left',
        color: '#4b5563',
        lineHeight: '1.6',
        padding: '0 20px'
      }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111', marginBottom: '16px' }}>
          What metrics are used to determine the significance of an article?
        </h3>
        <p style={{ fontSize: '1.125rem', marginBottom: '16px' }}>
          To provide you with a comprehensive and reliable analysis, Skeptica evaluates both the inner methodology and the broader impact of every article. We begin by looking at <strong>Intrinsic Methodological Metrics</strong> to assess validity and robustness, which includes examining the study design and evidence tier, biological model, sample size and effect size, adherence to reporting guidelines, and preregistration status.
        </p>
        <p style={{ fontSize: '1.125rem', marginBottom: '16px' }}>
          Additionally, we analyze <strong>Extrinsic Article-Level Metrics</strong> to understand the paper's reach and relevance within the scientific community. This involves calculating the Relative Citation Ratio (RCR), Field-Weighted Citation Impact (FWCI), Altmetric Attention Score, and analyzing raw usage data. 
        </p>
        <p style={{ fontSize: '1.125rem' }}>
          <em>Please note that we explicitly exclude the Journal Impact Factor (JIF) from our evaluations. This ensures our assessment is firmly based on the individual merit of the paper itself rather than the publication it appears in.</em>
        </p>
      </div>
    </div>
  );
}

export default App;
