import React from "react";

const Projects = () => {
  // hero-content max-w-[1000px] mx-auto flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8 lg:gap-24
  return (
    <div className="max-w-[1000px] mx-auto mt-30 text-center">
      <h2 className="inline-block px-4 py-2 text-xl font-bold bg-[#52b788] text-white rounded-lg shadow-md]">
        My Projects
      </h2>
      <h3 className="text-5xl font-bold mt-4">Check out some of my work</h3>
      <p className="mt-4 text-2xl text-gray-500">
        I'have worked different types of projects. I want to <br /> show my demo
        projects in below.
      </p>

      <div className="flex flex-wrap justify-center mt-12 gap-12">
        {/* Card 1 */}
        <div className="relative p-[12px] rounded-xl animate-border bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 bg-[length:200%_200%]">
          <div className="card bg-base-100 w-96 shadow-sm rounded-xl overflow-hidden">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Card Title
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative p-[12px] rounded-xl animate-border bg-gradient-to-r from-green-500 via-blue-400 to-green-300 bg-[length:200%_200%]">
          <div className="card bg-base-100 w-96 shadow-sm rounded-xl overflow-hidden">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Card Title
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
