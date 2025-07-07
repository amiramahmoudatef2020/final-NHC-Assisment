import React, { Suspense } from 'react';
import ProductsPage from './products/ProductsPageClient';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsPage />
    </Suspense>
  );
}
