export default function CTASection() {
    return (
      <section className="relative py-24 bg-gradient-to-br from-primary to-gray-600 text-white overflow-hidden">

        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            আজই শুরু করুন আপনার শিশুর
            <span className="block text-yellow-200">
              সুন্দর ও উজ্জ্বল ভবিষ্যৎ
            </span>
          </h2>

          {/* Sub Text */}
          <p className="text-white/90 text-lg mb-8">
            Hero Kidz নিয়ে এসেছে নিরাপদ, শিক্ষামূলক এবং মজাদার খেলনা—
            যা আপনার শিশুর শেখাকে করে আরও আনন্দদায়ক।
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn btn-secondary text-lg px-8">
              Shop Now
            </button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8">
              Explore Categories
            </button>
          </div>

          {/* Trust Line */}
          <p className="mt-8 text-sm text-white/80">
            ✔ ১০০% নিরাপদ উপকরণ &nbsp;|&nbsp; ✔ অভিভাবকদের বিশ্বস্ত পছন্দ
          </p>

        </div>
      </section>
    );
  }
