'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './AdminDashboard.module.css';
import type { ContentData, FooterContent, ProductContent, ForWhomContent, AboutUsContent, SupportContent } from '@/types/content';

// Або якщо типи в тій же папці:
// import type { ContentData, FooterContent, ProductContent, ForWhomContent, AboutUsContent, SupportContent } from './types';

const AdminDashboard = () => {
  const { language } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'footer' | 'products' | 'forWhom' | 'aboutUs' | 'support'>('footer');
  const [contentData, setContentData] = useState<ContentData | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  // Завантаження даних
  useEffect(() => {
    if (isAuthenticated) {
      fetchContent();
    }
  }, [isAuthenticated]);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/admin/content');
      const data = await response.json();
      setContentData(data);
    } catch (error) {
      console.error('Error fetching content:', error);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // У production використовуйте реальну аутентифікацію
    if (password === 'admin2025') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
    } else {
      alert('Невірний пароль');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
    setPassword('');
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage('');

    try {
      const response = await fetch('/api/admin/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contentData),
      });

      if (response.ok) {
        setSaveMessage('✓ Збережено успішно!');
        setTimeout(() => setSaveMessage(''), 3000);
      } else {
        setSaveMessage('✗ Помилка збереження');
      }
    } catch (error) {
      console.error('Error saving:', error);
      setSaveMessage('✗ Помилка збереження');
    } finally {
      setIsSaving(false);
    }
  };

  // Форма логіну
  if (!isAuthenticated) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h1 className={styles.loginTitle}>🔐 Адмін панель</h1>
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <input
              type="password"
              placeholder="Введіть пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.loginInput}
              required
            />
            <button type="submit" className={styles.loginButton}>
              Увійти
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (!contentData) {
    return <div className={styles.loading}>Завантаження...</div>;
  }

  return (
    <div className={styles.dashboard}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Адміністративна панель</h1>
        <div className={styles.headerActions}>
          <button onClick={handleSave} className={styles.saveButton} disabled={isSaving}>
            {isSaving ? 'Збереження...' : '💾 Зберегти зміни'}
          </button>
          <button onClick={handleLogout} className={styles.logoutButton}>
            🚪 Вийти
          </button>
        </div>
      </header>

      {saveMessage && (
        <div className={`${styles.saveMessage} ${saveMessage.includes('✓') ? styles.success : styles.error}`}>
          {saveMessage}
        </div>
      )}

      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'footer' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('footer')}
        >
          📧 Footer
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'products' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('products')}
        >
          🤖 Products
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'forWhom' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('forWhom')}
        >
          👥 For Whom
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'aboutUs' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('aboutUs')}
        >
          ℹ️ About Us
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'support' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('support')}
        >
          🤝 Support
        </button>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {activeTab === 'footer' && (
          <FooterEditor data={contentData.footer} onChange={(data) => setContentData({ ...contentData, footer: data })} />
        )}
        {activeTab === 'products' && (
          <ProductsEditor data={contentData.products} onChange={(data) => setContentData({ ...contentData, products: data })} />
        )}
        {activeTab === 'forWhom' && (
          <ForWhomEditor data={contentData.forWhom} onChange={(data) => setContentData({ ...contentData, forWhom: data })} />
        )}
        {activeTab === 'aboutUs' && (
          <AboutUsEditor data={contentData.aboutUs} onChange={(data) => setContentData({ ...contentData, aboutUs: data })} />
        )}
        {activeTab === 'support' && (
          <SupportEditor data={contentData.support} onChange={(data) => setContentData({ ...contentData, support: data })} />
        )}
      </div>
    </div>
  );
};

// Footer Editor
interface FooterEditorProps {
  data: FooterContent;
  onChange: (data: FooterContent) => void;
}

const FooterEditor = ({ data, onChange }: FooterEditorProps) => (
  <div className={styles.editor}>
    <h2>Редагування Footer</h2>
    
    <div className={styles.formGroup}>
      <label>Заголовок (UA):</label>
      <input
        type="text"
        value={data.heading_uk}
        onChange={(e) => onChange({ ...data, heading_uk: e.target.value })}
        className={styles.input}
      />
    </div>

    <div className={styles.formGroup}>
      <label>Заголовок (EN):</label>
      <input
        type="text"
        value={data.heading_en}
        onChange={(e) => onChange({ ...data, heading_en: e.target.value })}
        className={styles.input}
      />
    </div>

    <div className={styles.formGroup}>
      <label>Опис (UA):</label>
      <textarea
        value={data.description_uk}
        onChange={(e) => onChange({ ...data, description_uk: e.target.value })}
        className={styles.textarea}
        rows={3}
      />
    </div>

    <div className={styles.formGroup}>
      <label>Опис (EN):</label>
      <textarea
        value={data.description_en}
        onChange={(e) => onChange({ ...data, description_en: e.target.value })}
        className={styles.textarea}
        rows={3}
      />
    </div>

    <div className={styles.formGroup}>
      <label>Email:</label>
      <input
        type="email"
        value={data.email}
        onChange={(e) => onChange({ ...data, email: e.target.value })}
        className={styles.input}
      />
    </div>
  </div>
);

// Products Editor
interface ProductsEditorProps {
  data: ProductContent[];
  onChange: (data: ProductContent[]) => void;
}

const ProductsEditor = ({ data, onChange }: ProductsEditorProps) => (
  <div className={styles.editor}>
    <h2>Редагування Products</h2>
    
    {data.map((product: ProductContent, index: number) => (
      <div key={product.id} className={styles.productItem}>
        <h3>Продукт #{index + 1}</h3>
        
        <div className={styles.formGroup}>
          <label>Назва (UA):</label>
          <input
            type="text"
            value={product.name_uk}
            onChange={(e) => {
              const newData = [...data];
              newData[index].name_uk = e.target.value;
              onChange(newData);
            }}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Опис (UA):</label>
          <textarea
            value={product.description_uk}
            onChange={(e) => {
              const newData = [...data];
              newData[index].description_uk = e.target.value;
              onChange(newData);
            }}
            className={styles.textarea}
            rows={3}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Зображення (URL):</label>
          <input
            type="text"
            value={product.image}
            onChange={(e) => {
              const newData = [...data];
              newData[index].image = e.target.value;
              onChange(newData);
            }}
            className={styles.input}
          />
        </div>
      </div>
    ))}
  </div>
);

// For Whom Editor
interface ForWhomEditorProps {
  data: ForWhomContent[];
  onChange: (data: ForWhomContent[]) => void;
}

const ForWhomEditor = ({ data, onChange }: ForWhomEditorProps) => (
  <div className={styles.editor}>
    <h2>Редагування "Для кого"</h2>
    
    {data.map((item: ForWhomContent, index: number) => (
      <div key={item.id} className={styles.categoryItem}>
        <h3>Категорія #{index + 1}</h3>
        
        <div className={styles.formGroup}>
          <label>Назва (UA):</label>
          <input
            type="text"
            value={item.title_uk}
            onChange={(e) => {
              const newData = [...data];
              newData[index].title_uk = e.target.value;
              onChange(newData);
            }}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Зображення (URL):</label>
          <input
            type="text"
            value={item.image}
            onChange={(e) => {
              const newData = [...data];
              newData[index].image = e.target.value;
              onChange(newData);
            }}
            className={styles.input}
          />
        </div>
      </div>
    ))}
  </div>
);

// About Us Editor
interface AboutUsEditorProps {
  data: AboutUsContent;
  onChange: (data: AboutUsContent) => void;
}

const AboutUsEditor = ({ data, onChange }: AboutUsEditorProps) => (
  <div className={styles.editor}>
    <h2>Редагування "Про нас"</h2>
    
    <div className={styles.formGroup}>
      <label>Заголовок (UA):</label>
      <textarea
        value={data.heading_uk}
        onChange={(e) => onChange({ ...data, heading_uk: e.target.value })}
        className={styles.textarea}
        rows={2}
      />
    </div>

    <div className={styles.formGroup}>
      <label>Опис 1 (UA):</label>
      <textarea
        value={data.description1_uk}
        onChange={(e) => onChange({ ...data, description1_uk: e.target.value })}
        className={styles.textarea}
        rows={3}
      />
    </div>

    <div className={styles.formGroup}>
      <label>Опис 2 (UA):</label>
      <textarea
        value={data.description2_uk}
        onChange={(e) => onChange({ ...data, description2_uk: e.target.value })}
        className={styles.textarea}
        rows={3}
      />
    </div>
  </div>
);

// Support Editor
interface SupportEditorProps {
  data: SupportContent;
  onChange: (data: SupportContent) => void;
}

const SupportEditor = ({ data, onChange }: SupportEditorProps) => (
  <div className={styles.editor}>
    <h2>Редагування "Підтримка"</h2>
    
    <div className={styles.formGroup}>
      <label>Заголовок (UA):</label>
      <input
        type="text"
        value={data.heading_uk}
        onChange={(e) => onChange({ ...data, heading_uk: e.target.value })}
        className={styles.input}
      />
    </div>

    <h3>Підрозділи:</h3>
    {data.units.map((unit: SupportUnit, index: number) => (
      <div key={unit.id} className={styles.unitItem}>
        <div className={styles.formGroup}>
          <label>Назва (UA):</label>
          <input
            type="text"
            value={unit.name_uk}
            onChange={(e) => {
              const newUnits = [...data.units];
              newUnits[index].name_uk = e.target.value;
              onChange({ ...data, units: newUnits });
            }}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Логотип (URL):</label>
          <input
            type="text"
            value={unit.logo}
            onChange={(e) => {
              const newUnits = [...data.units];
              newUnits[index].logo = e.target.value;
              onChange({ ...data, units: newUnits });
            }}
            className={styles.input}
          />
        </div>
      </div>
    ))}
  </div>
);

export default AdminDashboard;