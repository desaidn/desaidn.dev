import React, { useCallback, useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import type { Experience } from 'types';
import ResumePDFDocument from '../components/experience/ResumePDFDocument';

interface UseResumePDFReturn {
  generatePDF: () => Promise<void>;
  isGenerating: boolean;
  error: string | null;
}

export default function useResumePDF(
  experiences: Experience[]
): UseResumePDFReturn {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generatePDF = useCallback(async (): Promise<void> => {
    setIsGenerating(true);
    setError(null);

    try {
      // Generate PDF blob
      const blob = await pdf(
        <ResumePDFDocument experiences={experiences} />
      ).toBlob();

      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Dhairya_Desai_Resume.pdf';

      // Trigger download
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate PDF');
    } finally {
      setIsGenerating(false);
    }
  }, [experiences]);

  return {
    generatePDF,
    isGenerating,
    error,
  };
}
