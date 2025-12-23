'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import type { ContentData } from '@/types/content';

// Якщо типи в іншому місці, змініть шлях:
// import type { ContentData } from '../types/content';

export function useContent() {
  const { language } = useLanguage();
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/content');
      
      if (!response.ok) {
        throw new Error('Failed to fetch content');
      }

      const data = await response.json();
      setContent(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      console.error('Error fetching content:', err);
    } finally {
      setLoading(false);
    }
  };

  // Хелпер функція для отримання перекладу
  const t = (section: string, key: string) => {
    if (!content) return '';
    
    const sectionData = (content as any)[section];
    if (!sectionData) return '';

    const fieldKey = `${key}_${language}`;
    return sectionData[fieldKey] || sectionData[key] || '';
  };

  return {
    content,
    loading,
    error,
    t,
    refetch: fetchContent,
  };
}