import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#1E5175] text-white py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs text-blue-200">
          © 2026 Data Bench Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
