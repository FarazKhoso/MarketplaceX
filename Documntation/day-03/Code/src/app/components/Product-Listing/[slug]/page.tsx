import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
  image: {
    asset: {
      url: string;
    };
  };
}

interface ProductPageProps {
  params: { slug: string };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug } = params;

  const query = `
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      price,
      description,
      quantity,
      dimensions {
        height,
        width,
        depth
      },
      image {
        asset->{
          url
        }
      }
    }
  `;
  const product: Product | null = await client.fetch(query, { slug });

  if (!product) {
    return <div className="text-center py-20">Product not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Product Image */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            {product.image?.asset?.url && (
              <Image
                src={product.image.asset.url}
                alt={product.name}
                width={400}
                height={400}
                className="rounded-md shadow-md"
              />
            )}
          </div>
          {/* Product Details */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-lg text-gray-600 mt-2">{product.description}</p>
            <div className="mt-4">
              <p className="text-lg font-semibold text-gray-700">
                Price: <span className="text-green-600">${product.price}</span>
              </p>
              <p className="text-lg font-semibold text-gray-700">
                Quantity Available: <span>{product.quantity}</span>
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-700">Dimensions:</h3>
              <p className="text-gray-600">
                Height: {product.dimensions?.height || "N/A"} cm
              </p>
              <p className="text-gray-600">
                Width: {product.dimensions?.width || "N/A"} cm
              </p>
              <p className="text-gray-600">
                Depth: {product.dimensions?.depth || "N/A"} cm
              </p>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Add to Cart
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;





