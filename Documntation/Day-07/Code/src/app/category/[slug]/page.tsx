
import React from "react";
import { client } from "@/sanity/lib/client";
import CategoryProducts from "../page";

// Fetch category products from Sanity
const fetchCategoryProducts = async (slug: string) => {
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

  try {
    const products = await client.fetch(query, { slug });
    return products;
  } catch (error) {
    console.error("Error fetching products from Sanity:", error);
    return [];
  }
};

// Dynamic category page component
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    // Await the resolved params
    const resolvedParams = await params;

    // Debug: Log resolved parameters
    console.log("Resolved params:", resolvedParams);

    // Validate slug
    if (!resolvedParams?.slug) {
      return <div>Error: No category slug provided.</div>;
    }

    // Fetch products for the resolved slug
    const products = await fetchCategoryProducts(resolvedParams.slug);

    // Render the category products component
    return (
      <div>
        <CategoryProducts
          products={products}
          slug={{ current: resolvedParams.slug }}
        />
      </div>
    );
  } catch (error) {
    console.error("Error in CategoryPage:", error);
    return <div>Failed to load category page.</div>;
  }
}
