import { collections, dbConnect } from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const data = await req.json();
    const { title, description, price, image } = data;

    if (!title || !description || !price) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const result = await dbConnect(collections.PRODUCTS).insertOne({
      title,
      description,
      price: parseFloat(price),
      image: image || "",
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({
        message: "Product added successfully",
        id: result.insertedId,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Something went wrong" }),
      { status: 500 }
    );
  }
}
