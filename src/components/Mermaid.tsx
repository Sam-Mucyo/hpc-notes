'use client';

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      flowchart: {
        curve: 'basis',
        padding: 20,
        nodeSpacing: 50,
        rankSpacing: 50,
        htmlLabels: true,
        useMaxWidth: true,
      },
    });

    const renderChart = async () => {
      if (containerRef.current) {
        try {
          const { svg } = await mermaid.render('mermaid-svg', chart);
          containerRef.current.innerHTML = svg;
          
          // Add some styling to the SVG
          const svgElement = containerRef.current.querySelector('svg');
          if (svgElement) {
            svgElement.style.maxWidth = '100%';
            svgElement.style.height = 'auto';
            svgElement.style.backgroundColor = 'white';
            svgElement.style.borderRadius = '8px';
            svgElement.style.padding = '16px';
          }
        } catch (error) {
          console.error('Error rendering Mermaid chart:', error);
        }
      }
    };

    renderChart();
  }, [chart]);

  return (
    <div 
      className="mermaid-container w-full overflow-x-auto bg-white rounded-lg shadow-sm" 
      ref={containerRef} 
      style={{ minHeight: '300px' }}
    />
  );
};

export default Mermaid;
