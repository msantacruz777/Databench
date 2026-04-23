import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-emerald-950 text-white py-8 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs text-emerald-500">
          © 2026 Data Bench Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
