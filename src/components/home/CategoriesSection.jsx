const categories = [
    {
      title: "Learning Toys",
      bg: "bg-gradient-to-br from-blue-50 to-blue-100",
      text: "text-blue-700",
    },
    {
      title: "Creative Toys",
      bg: "bg-gradient-to-br from-pink-50 to-pink-100",
      text: "text-pink-700",
    },
    {
      title: "Puzzle Games",
      bg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      text: "text-yellow-700",
    },
    {
      title: "Costumes",
      bg: "bg-gradient-to-br from-purple-50 to-purple-100",
      text: "text-purple-700",
    },
    {
      title: "STEM Toys",
      bg: "bg-gradient-to-br from-green-50 to-green-100",
      text: "text-green-700",
    },
    {
      title: "Outdoor Play",
      bg: "bg-gradient-to-br from-orange-50 to-orange-100",
      text: "text-orange-700",
    },
    {
      title: "Montessori",
      bg: "bg-gradient-to-br from-teal-50 to-teal-100",
      text: "text-teal-700",
    },
  ];

  export default function CategoriesSection() {
    return (
      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Shop by <span className="text-primary">Category</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div
                key={i}
                className={`card ${cat.bg} shadow-md hover:shadow-xl transition duration-300 cursor-pointer`}
              >
                <div className="card-body items-center justify-center">
                  <h3 className={`text-lg font-semibold ${cat.text}`}>
                    {cat.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    );
  }
