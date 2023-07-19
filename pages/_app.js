import React from 'react';

import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

function clearModuleCache(modulePath) {
  // Resolve the absolute path of the module
  const resolvedPath = require.resolve(modulePath);

  // Delete the module from the cache
  delete require.cache[resolvedPath];
}


export default MyApp;
