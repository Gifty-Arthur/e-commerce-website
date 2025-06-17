import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../Pages/data.json";

import { useCart } from "../CartProvider";

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = data.find((item) => item.slug === slug);

  if (!product) return <div className="p-10">Product not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
      {/* Go Back Button */}
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-orange-500 font-medium uppercase tracking-wide"
        >
          Go Back
        </button>
      </div>

      {/* Product Overview */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <img
          src={product.image.desktop.replace("./", "/")}
          alt={product.name}
          className="w-full lg:w-1/2 rounded"
        />
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          {product.new && (
            <p className="tracking-widest text-sm text-orange-500 uppercase">
              New Product
            </p>
          )}
          <h2 className="text-3xl font-bold uppercase">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="font-bold text-xl">${product.price.toLocaleString()}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 px-6 py-3  text-white uppercase tracking-wide bg-primary hover:bg-custom3 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Features and Box Content */}
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-2/3 space-y-4">
          <h3 className="text-2xl font-bold uppercase">Features</h3>
          <p className="text-gray-600 whitespace-pre-line">
            {product.features}
          </p>
        </div>
        <div className="lg:w-1/3 space-y-4">
          <h3 className="text-2xl font-bold uppercase">In the Box</h3>
          <ul className="space-y-2">
            {product.includes.map((item, i) => (
              <li key={i} className="text-gray-600">
                <span className="text-orange-500 font-bold mr-2">
                  {item.quantity}x
                </span>
                {item.item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Gallery */}

      <div className="flex flex-col lg:flex-row md:flex-row gap-6 mt-20">
        <div className="flex flex-col gap-6 ">
          <img
            src={product.gallery.first.desktop.replace("./", "/")}
            alt="Gallery 1"
            className="w-full h-auto rounded-md object-cover"
          />
          <img
            src={product.gallery.second.desktop.replace("./", "/")}
            alt="Gallery 2"
            className="w-full h-auto rounded-md object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <img
            src={product.gallery.third.desktop.replace("./", "/")}
            alt="Gallery 3"
            className="w-full h-full rounded-md object-cover"
          />
        </div>
      </div>

      {/* You May Also Like */}
      <div className="text-center space-y-10">
        <h3 className="text-2xl font-bold uppercase">You May Also Like</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {product.others.map((other, i) => (
            <div key={i} className="space-y-4">
              <img
                src={other.image.desktop.replace("./", "/")}
                alt={other.name}
                className="w-full rounded"
              />
              <h4 className="text-lg font-bold uppercase">{other.name}</h4>
              <button
                onClick={() => navigate(`/product/${other.slug}`)}
                className="mt-2 px-6 py-3 bg-primary hover:bg-custom3  text-white uppercase tracking-wide  transition"
              >
                See Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
