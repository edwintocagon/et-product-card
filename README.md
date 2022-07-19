# ET-Product-Card

Este es un paquete de pruebas de despliegue en NPM.

### Edwin Tocagon

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle,ProductButtons} from 'et-product-card';
```

````
 <ProductCard
          product={product}
          initialValues={{ count: 3, maxCount: 10 }}
        >
          {({ reset, count, increasBy, isMaxCountReached, maxCount }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )}
</ProductCard>
        ```
````
