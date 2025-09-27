import ProductCard from "@/components/ProductCard";
import dbConnect, { collectionNames } from "@/lib/dbConnect";

const Collection = async () => {
  const allProducts = await dbConnect(collectionNames.allProductCollection)
    .find({})
    .toArray();

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 mt-12 mb-16">
      {/* Filter options */}
      <div className="min-w-60 hidden sm:block">
        <p className="my-2 text-xl flex items-center gap-2">FILTERS</p>
        {/* category filter */}
        <div className={`pl-5 py-3 mt-6 border border-gray-300`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                value={"Men"}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                value={"Women"}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                value={"Kids"}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        {/* subcategory filter */}
        <div className={`pl-5 py-3 my-5 border border-gray-300`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                value={"Topwear"}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                value={"Bottomwear"}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                value={"Winterwear"}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between mb-5">
          <div className="flex flex-col">
            <p className="text-base sm:text-2xl font-medium">All Collection</p>
            <div className="w-28 h-0.5 bg-primary mt-2"></div>
          </div>
          {/* sort option */}
          <select className="px-2 text-sm border border-gray-300 cursor-pointer">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10">
          {allProducts.map((product, index) => (
            <ProductCard key={index} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
