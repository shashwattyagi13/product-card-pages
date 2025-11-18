"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useCart } from "./CartProvider";
import { useRouter } from "next/router";
import type { Product } from "../pages/api/products";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const router = useRouter();

  function handleAddToCart() {
    if (product.outOfStock) return;
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      qty: 1,
      image: product.image,
    });
    setAdded(true);

  }

  function handleBuyNow() {
    if (product.outOfStock) return;
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      qty: 1,
      image: product.image,
    });
    router.push("/checkout");
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.18 }}
      className="w-full max-w-xs mx-auto bg-white dark:bg-gray-800 rounded-2xl overflow-hidden card-transition shadow-sm hover:shadow-lg focus-within:shadow-lg"
      role="article"
      aria-labelledby={`title-${product.id}`}
    >
      <figure className="relative h-52 w-full mx-auto bg-gray-100 dark:bg-gray-700">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 100vw, 300px"
            priority={false}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            No Image
          </div>
        )}

        <div className="absolute top-3 left-3 flex gap-2">
          {product.sale && (
            <span className="text-xs px-2 py-1 rounded-full bg-red-600 text-white shadow-sm">
              Sale
            </span>
          )}
          {product.outOfStock && (
            <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-white shadow-sm">
              Out of Stock
            </span>
          )}
        </div>
      </figure>

      <div className="p-4 flex flex-col gap-3">
        <h3
          id={`title-${product.id}`}
          className="text-center text-lg font-semibold text-gray-900 dark:text-gray-100"
        >
          {product.title}
        </h3>

        {product.description && (
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            {product.description}
          </p>
        )}

        <div className="flex items-center justify-between">
          <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
            {product.price}
          </span>
          {product.rating && (
            <span className="text-xs text-gray-500">{product.rating} ⭐</span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          aria-label={`Add ${product.title} to cart`}
          disabled={product.outOfStock}
          className={`w-full py-2 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 transition
            ${
              product.outOfStock
                ? "bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600 focus:ring-gray-300"
            }`}
        >
          {product.outOfStock
            ? "Out of Stock"
            : added
            ? "Added ✓"
            : "Add to Cart"}
        </button>

        <button
          aria-label={`View more about ${product.title}`}
          className="w-full py-2 rounded-lg text-sm font-semibold bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          View More
        </button>

        <button
          onClick={handleBuyNow}
          aria-label={`Buy now ${product.title}`}
          disabled={product.outOfStock}
          className={`w-full py-2 rounded-lg text-white text-sm font-semibold focus:outline-none focus:ring-2 transition
            ${
              product.outOfStock
                ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 dark:focus:ring-blue-500"
            }`}
        >
          {product.outOfStock ? "Unavailable" : "Buy Now"}
        </button>
      </div>
    </motion.article>
  );
}
