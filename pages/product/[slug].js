import Layout from "@/components/Layout";
import data from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function ProductDetails() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((product) => product.slug === slug);
  if (!product) {
    return <div>Product not found </div>;
  }
  return (
    <Layout title={product.name}>
      <div className="p-2">
        <Link href="/">Back to home page </Link>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            height={640}
            width={640}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <h1>{product.brand}</h1>
            </li>
            <li>
              <h1>
                {product.rating} of {product.numReviews}
              </h1>
            </li>
            <li>
              <h1>{product.description}</h1>
            </li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>$ {product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>
                $ {product.countInStock > 0 ? "In stock" : "Unavailable"}
              </div>
            </div>

            <button className="primary-button w-full">Add to cart</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
