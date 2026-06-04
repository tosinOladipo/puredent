import { NextResponse } from "next/server";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

export async function POST(req: Request) {
  try {
    // ✅ Parse multipart/form-data
    const formData = await req.formData();
    //const userId = formData.get("userId") as string;
    const file = formData.get("image") as File; // ✅ File object (browser-native)

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Convert File → Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to ImageKit
    const uploadResponse = await imagekit.upload({
      file: buffer.toString("base64"),
      fileName: file.name,
    });

    // Example DB insert (pseudo-code)
    // await db.insert(tvsTable).values({ userId, tvImage: uploadResponse.url });

    console.log

    return NextResponse.json({
      success: true,
      imageUrl: uploadResponse.url,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}


