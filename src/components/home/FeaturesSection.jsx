const features = [
  {
    title: "Educational Toys",
    desc: "শিশুর শেখার ক্ষমতা বাড়াতে বিশেষভাবে তৈরি।",
    bg: "bg-gradient-to-br from-orange-50 to-orange-100",
    text: "text-orange-600",
  },
  {
    title: "Safe Materials",
    desc: "১০০% শিশু-বান্ধব ও নিরাপদ উপকরণ।",
    bg: "bg-gradient-to-br from-green-50 to-green-100",
    text: "text-green-600",
  },
  {
    title: "Trusted by Parents",
    desc: "হাজারো অভিভাবকের আস্থা।",
    bg: "bg-gradient-to-br from-blue-50 to-blue-100",
    text: "text-blue-600",
  },
  {
    title: "Creative Learning",
    desc: "সৃজনশীল চিন্তা ও কল্পনাশক্তি বিকাশে সহায়ক।",
    bg: "bg-gradient-to-br from-purple-50 to-purple-100",
    text: "text-purple-600",
  },
  {
    title: "Age Appropriate",
    desc: "প্রতিটি বয়সের শিশুর জন্য আলাদা ডিজাইন।",
    bg: "bg-gradient-to-br from-pink-50 to-pink-100",
    text: "text-pink-600",
  },
  {
    title: "Fun & Playful",
    desc: "খেলতে খেলতেই শেখার আনন্দ।",
    bg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    text: "text-yellow-600",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why Choose <span className="text-primary">Hero Kidz</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className={`card ${item.bg} shadow-lg hover:shadow-xl transition duration-300`}
            >
              <div className="card-body text-center">
                <h3
                  className={`text-xl font-semibold mb-2 ${item.text}`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
