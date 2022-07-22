import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: 1,
  title: 'Product example  1',
  /* image: 'https://picsum.photos/200/300', */
};

const App = () => {
  return (
    <>
      <ProductCard product={product} InitialValues={{ count: 3, maxCount: 10 }}>
        {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
