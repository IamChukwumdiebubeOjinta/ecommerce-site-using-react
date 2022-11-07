import Product from "./Product";


export default function Products() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-6 sm:py-12 lg:max-w-none lg:py-16">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <Product />
        </div>
      </div>
    </div>
  );
}
