import Image from "next/image";

const products = [
    {
        name: "Educational Toy",
        price: "৳1200",
        bg: "bg-gradient-to-br from-orange-50 to-orange-100",
        text: "text-orange-700",
        img: "https://i.ibb.co/LXK2KXVM/STEM.png",
    },
    {
        name: "Puzzle Learning Game",
        price: "৳950",
        bg: "bg-gradient-to-br from-blue-50 to-blue-100",
        text: "text-blue-700",
        img: "https://i.ibb.co/DHQhXmrY/Fun.png",
    },
    // {
    //     name: "Creative Blocks Set",
    //     price: "৳1350",
    //     bg: "bg-gradient-to-br from-green-50 to-green-100",
    //     text: "text-green-700",
    //     img: "https://i.ibb.co/nMkNZsJX/Puzzle-Learning-Game.png",
    // },
    // {
    //     name: "Kids Costume",
    //     price: "৳1650",
    //     bg: "bg-gradient-to-br from-purple-50 to-purple-100",
    //     text: "text-purple-700",
    //     img: "https://i.ibb.co/Rt3ndqF/3d-view-puzzle-pieces.jpg",
    // },
    // {
    //     name: "STEM Toy Kit",
    //     price: "৳1450",
    //     bg: "bg-gradient-to-br from-pink-50 to-pink-100",
    //     text: "text-pink-700",
    //     img: "https://i.ibb.co/ccVKVhBB/Creative.png",
    // },
    {
        name: "Fun Logic Game",
        price: "৳1100",
        bg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
        text: "text-yellow-700",
        img: "https://i.ibb.co/1JKLJT5D/Kids.png",
    },
];

export default function PopularProducts() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Popular <span className="text-primary">Products</span>
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {products.map((product, i) => (
                        <div
                            key={i}
                            className={`card ${product.bg} shadow-lg hover:shadow-2xl transition duration-300`}
                        >
                            <div className="card-body text-center">
                                <h3 className={`text-lg font-semibold ${product.text}`}>
                                    {product.name}
                                </h3>

                                {/* Image Wrapper */}
                                <div className="relative w-[90%] pt-[90%] rounded-xl overflow-hidden">
                                    <Image
                                        src={product.img}
                                        alt={product.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <p className="font-bold text-gray-800">{product.price}</p>

                                <div className="card-actions justify-center">
                                    <button className="btn btn-primary btn-sm">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
