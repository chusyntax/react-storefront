import categories from "../data/constants/categoriesStaticData";

const Categories = () => {
  return (
    <div className="mt-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Featured categories
      </h1>

      <div className="flex justify-center gap-12 flex-wrap">
        {categories.map(({ name, image, description }) => (
          <div
            key={name}
            className="group relative flex flex-col items-center cursor-pointer"
            style={{ width: 150 }}
          >
            <div
              className="
                w-[9.5rem] h-[9.5rem] rounded-full overflow-hidden
                border-2 border-gray-300
                flex items-center justify-center
                transform transition-transform duration-300
                group-hover:-translate-y-6
              "
            >
              <img
                src={image}
                alt={name}
                className="object-cover w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="mt-4 font-semibold capitalize text-center text-lg">
              {name}
            </div>

            <div className="relative w-full h-10 mt-2 overflow-hidden">
              <div
                className="
                  absolute bottom-0 left-1/2 -translate-x-1/2
                  text-sm text-gray-600 text-center
                  max-w-xs px-2
                  transition-all duration-300 ease-in-out
                  opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                "
              >
                {description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
