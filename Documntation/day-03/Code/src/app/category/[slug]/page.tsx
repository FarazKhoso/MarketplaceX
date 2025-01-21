import React from "react";
import { client } from "@/sanity/lib/client";
import CategoryProducts from "../page";

const fetchCategoryProducts = async (slug: {current:string}) => {
  const query = `
    *[_type == "product" && category->slug.current == $slug] {
      _id,
      name,
      price,
      slug,
      description,
      image {
        asset->{
          url
        }
      }
    }
  `;
  return await client.fetch(query, { slug });
};

export default async function CategoryPage({ params }: { params: { slug: {current: string}} }) {
  const products = await fetchCategoryProducts(params.slug);

  return (
    <div>
      <CategoryProducts products={products} slug ={params.slug} />
    </div>
  );
}
