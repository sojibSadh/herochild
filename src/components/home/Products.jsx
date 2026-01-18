import React from "react";
import ProductCard from "../carrds/ProductCard";
import { getProducts } from "@/actions/server/product";

const Products = async () => {
  const products = await getProducts();
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Products</h2>

      <div className="grid md:grid-cols-3  gap-3">
        {products.map((product) => (
          <ProductCard key={product.title} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
