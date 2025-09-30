const ChooseUs = () => {
  return (
    <div className="w-full mx-auto md:py-10 rounded-2xl px-4 md:px-10">
      <div className="w-full md:w-[90%] mx-auto flex flex-col md:flex-row items-start justify-around gap-8">
        {/* Image */}
        <img
          className="w-full sm:w-3/4 md:w-2/6 rounded-xl mx-auto md:mx-0"
          src="https://i.ibb.co.com/JwpH3XQG/about-img.png"
          alt="Fashion Clothing"
        />

        {/* Text Content */}
        <div className="w-full md:w-[45%]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-primary mb-6 text-center md:text-left">
            Why We Are the Best?
          </h2>

          <div className="flex flex-col gap-6 md:gap-10 mt-6">
            {/* Feature 1 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png"
                  alt="Fast Delivery"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-base md:text-lg font-medium text-slate-900">
                  Fast & Reliable Delivery
                </h3>
                <p className="text-sm md:text-base text-slate-500">
                  Get your favorite outfits delivered quickly and safely to your
                  doorstep.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png"
                  alt="Trendy Styles"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-base md:text-lg font-medium text-slate-900">
                  Trendy & Stylish Designs
                </h3>
                <p className="text-sm md:text-base text-slate-500">
                  Explore our modern collections that fit every occasion and
                  personality.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png"
                  alt="Easy Returns"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-base md:text-lg font-medium text-slate-900">
                  Easy Returns & Exchange
                </h3>
                <p className="text-sm md:text-base text-slate-500">
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
