import React, { useContext } from 'react'
import { shopcontext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadcrums } from '../Components/Breadcrums/Breadcrums';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProduct } from '../Components/RelatedProduct/RelatedProduct';

export const Product = () => {
  const {all_product} = useContext(shopcontext)
  const {productId} = useParams();
  const Product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={Product} />
      <ProductDisplay product={Product}  />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  )
}
 export default  Product;