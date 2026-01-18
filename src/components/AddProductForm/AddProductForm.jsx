"use client";

import { useState } from "react";

export default function AddProductForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");
        setError("");

        const form = e.target;

        const productData = {
            title: form.title.value,
            description: form.description.value,
            price: form.price.value,
            image: form.image.value,
        };

        try {
            const res = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productData),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Failed to add product");
            } else {
                setSuccess("🎉 Product added successfully!");
                form.reset();
            }
        } catch (err) {
            setError("Server error!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100">
            <div className="w-full max-w-lg">
                <div className="rounded-2xl bg-white/90 backdrop-blur shadow-xl border border-slate-200">
                    <div className="p-6 sm:p-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-6">
                            Add New Product
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Product Name */}
                            <div>
                                <label className="block mb-1 text-sm font-medium text-slate-600">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Enter product name"
                                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                    required
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block mb-1 text-sm font-medium text-slate-600">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    placeholder="Product description"
                                    rows="3"
                                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                    required
                                />
                            </div>

                            {/* Price */}
                            <div>
                                <label className="block mb-1 text-sm font-medium text-slate-600">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="৳ Price"
                                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                    required
                                />
                            </div>

                            {/* Image URL */}
                            <div>
                                <label className="block mb-1 text-sm font-medium text-slate-600">
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    placeholder="Optional image URL"
                                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full rounded-lg bg-primary text-white font-semibold py-2.5 transition-all duration-300 hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? "Adding..." : "Add Product"}
                            </button>
                        </form>

                        {/* Messages */}
                        {success && (
                            <div className="mt-4 rounded-lg bg-green-50 border border-green-200 p-3 text-green-700 text-sm">
                                {success}
                            </div>
                        )}

                        {error && (
                            <div className="mt-4 rounded-lg bg-red-50 border border-red-200 p-3 text-red-700 text-sm">
                                {error}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
