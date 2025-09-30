import Link from "next/link";

const PopularCategory = () => {
  const popularCategory = [
    {
      id: 1,
      image: "https://i.ibb.co.com/zT9DHjFv/product-17.png",
      title: "Men",
      description:
        "Discover trendy shirts, jackets, and accessories designed for modern men.",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/DfKsSMwt/product-10.png",
      title: "Women",
      description:
        "Explore elegant dresses, stylish tops, and everyday essentials for women.",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/fYWbKRjR/product-28.png",
      title: "Kid",
      description:
        "Find comfy, colorful, and durable outfits perfect for active kids.",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Category Shop</p>
        <div className="w-28 h-0.5 bg-primary mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {popularCategory.map(({ id, image, title, description }) => (
          <div key={id} className="relative group">
            <img
              src={image}
              alt={title}
              className="brightness-80 group-hover:brightness-65 transition duration-300 w-full h-auto object-cover"
            />
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-3">
              <p className="font-medium text-xl lg:text-2xl">{title}</p>
              <p className="text-xs lg:text-sm leading-5">{description}</p>
              <Link
                href="/collection"
                className="w-fit flex items-center gap-1.5 bg-primary px-4 py-2 rounded cursor-pointer"
              >
                Explore now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategory;
