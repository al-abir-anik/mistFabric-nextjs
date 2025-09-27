import Image from "next/image";

const PopularCategory = () => {
  const popularCategory = [
    {
      id: 1,
      image: "/images/p1_product_i4.png",
      title: "Men",
      description:
        "Discover trendy shirts, jackets, and accessories designed for modern men.",
    },
    {
      id: 2,
      image: "/images/p1_product_i4.png",
      title: "Women",
      description:
        "Explore elegant dresses, stylish tops, and everyday essentials for women.",
    },
    {
      id: 3,
      image: "/images/p1_product_i4.png",
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
            <Image
              src={image}
              alt={title}
              width={1000}
              height={1000}
              className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
            />
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-3">
              <p className="font-medium text-xl lg:text-2xl">{title}</p>
              <p className="text-xs lg:text-sm leading-5">
                {description}
              </p>
              <button className="flex items-center gap-1.5 bg-primary px-4 py-2 rounded cursor-pointer">
                Explore now{" "}
                {/* <Image
                  className="h-3 w-3"
                  src={assets.redirect_icon}
                  alt="Redirect Icon"
                /> */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategory;
