import React, { Suspense } from 'react';
import ProductsPage from './ProductsPageClient';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsPage />
    </Suspense>
  );
}
