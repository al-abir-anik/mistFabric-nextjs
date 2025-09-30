import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link
      href={`collection/${product._id}`}
      className="flex flex-col items-start gap-0.5 max-w-[200px] w-full cursor-pointer"
    >
      <div className="group relative bg-gray-500/10 rounded-lg w-full h-60 flex items-center justify-center overflow-hidden cursor-pointer ">
        <Image
          src={product.images[0]}
          alt={product.name}
          className="w-4/5 h-4/5 md:w-full md:h-full group-hover:scale-105 transition object-cover"
          width={800}
          height={100}
        />
      </div>

      <p className="w-full pt-2 text-xs md:text-sm hover:text-primary/90 transition-colors truncate">
        {product.name}
      </p>

      <div className="flex items-end justify-between w-full mt-1">
        <p className="text-base font-medium">
          Tk. {product.offerPrice}
          <span className="pl-1.5 text-sm text-gray-500/70 line-through">
            {product.regularPrice}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
