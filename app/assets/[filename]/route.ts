import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;
  const publicAssetsDir = path.join(process.cwd(), "public", "assets");
  const targetFile = path.join(publicAssetsDir, filename);

  // If file exists directly in public/assets
  if (fs.existsSync(targetFile)) {
    const fileBuffer = fs.readFileSync(targetFile);
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }

  // If hero-img.jpg is requested, use hero-image.jpg
  const candidateNames = ["hero-image.jpg", "hero-img.jpg", "alan-working.jpg"];
  for (const cand of candidateNames) {
    const candPath = path.join(publicAssetsDir, cand);
    if (fs.existsSync(candPath)) {
      const fileBuffer = fs.readFileSync(candPath);
      // Also write to public/assets/hero-img.jpg for static serving
      try {
        fs.writeFileSync(targetFile, fileBuffer);
      } catch (e) {
        console.error(e);
      }
      return new NextResponse(fileBuffer, {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }
  }

  return new NextResponse("Not Found", { status: 404 });
}
