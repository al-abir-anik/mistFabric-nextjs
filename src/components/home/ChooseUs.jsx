const ChooseUs = () => {
  return (
    <div className="w-full mx-auto py-10  rounded-2xl">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-start justify-around gap-8">
        <img
          className="w-2/6 rounded-xl"
          src="https://i.ibb.co.com/JwpH3XQG/about-img.png"
          alt="Fashion Clothing"
        />
        <div className="w-[45%]">
          <h2 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-primary mb-6">
            Why We Are the Best?
          </h2>

          <div className="flex flex-col gap-10 mt-10 space-y-4">
            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png"
                  alt="Fast Delivery"
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-900">
                  Fast & Reliable Delivery
                </h3>
                <p className="text-sm text-slate-500">
                  Get your favorite outfits delivered quickly and safely to your
                  doorstep.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png"
                  alt="Trendy Styles"
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-900">
                  Trendy & Stylish Designs
                </h3>
                <p className="text-sm text-slate-500">
                  Explore our modern collections that fit every occasion and
                  personality.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png"
                  alt="Easy Returns"
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-900">
                  Easy Returns & Exchange
                </h3>
                <p className="text-sm text-slate-500">
                  Hassle-free returns and exchanges to make your shopping
                  experience stress-free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
