import React from "react";
import Container from "../global/Container";
import Image from "next/image";

const ProductAd = () => {
  return (
    <Container className="md:grid md:grid-cols-2  bg-white pb-20">
      <Image
        src="/img/product.jpeg"
        width={500}
        height={700}
        alt="promotional"
        className="hidden md:block w-full col-span-1 rounded-xl"
      />
      <div className="col-span-1 relative flex items-center justify-center">
        <div className="max-md:py-20 px-6 md:px-10 text-center">
          <h1 className="text-3xl font-bold">
            <span className="text-blue-600">Don’t miss out</span> on our
            discounted products.
          </h1>
          <p className="mt-4 text-gray-500">
            Don't miss out on amazing discounts—shop now before they're gone!
          </p>
          <button className="rounded-lg bg-blue-600 text-sm px-14 py-3 mt-4 text-white">
            Check out the products
          </button>
          <button className="px-8 py-3 mt-4 text-sm text-gray-800">
            No thanks, I don’t want the discounts.
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ProductAd;
