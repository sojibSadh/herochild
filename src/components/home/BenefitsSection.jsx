const benefits = [
    {
        title: "Creative Thinking",
        desc: "শিশুর কল্পনাশক্তি ও সৃজনশীল চিন্তাভাবনা গড়ে তোলে।",
        bg: "bg-gradient-to-br from-purple-50 to-purple-100",
        text: "text-purple-700",
    },
    {
        title: "Problem Solving",
        desc: "খেলতে খেলতেই সমস্যা সমাধানের দক্ষতা বৃদ্ধি পায়।",
        bg: "bg-gradient-to-br from-blue-50 to-blue-100",
        text: "text-blue-700",
    },
    {
        title: "Confidence Building",
        desc: "নিজের ওপর বিশ্বাস ও আত্মবিশ্বাস বাড়াতে সাহায্য করে।",
        bg: "bg-gradient-to-br from-green-50 to-green-100",
        text: "text-green-700",
    },
    {
        title: "Fun Learning",
        desc: "শেখাকে করে আনন্দদায়ক ও সহজবোধ্য।",
        bg: "bg-gradient-to-br from-orange-50 to-orange-100",
        text: "text-orange-700",
    },
];

export default function BenefitsSection() {
    return (
        <section className="bg-base-200 py-20">
            <div className="container mx-auto px-4 text-center">

                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Learning Through <span className="text-primary">Play</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    আমাদের খেলনাগুলো শিশুর সৃজনশীলতা, সমস্যা সমাধান এবং আত্মবিশ্বাস
                    গড়ে তোলে—খেলতে খেলতেই শেখার আনন্দ।
                </p>

                {/* Benefits Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {benefits.map((item, i) => (
                        <div
                            key={i}
                            className={`card ${item.bg} shadow-md hover:shadow-xl transition duration-300`}
                        >
                            <div className="card-body text-center">
                                <h3 className={`text-lg font-semibold mb-2 ${item.text}`}>
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
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
