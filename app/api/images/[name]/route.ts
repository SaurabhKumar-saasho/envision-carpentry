import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const imageMap: Record<string, string> = {
  "trim-craft.jpg":
    "C:\\Users\\saura\\.gemini\\antigravity-ide\\brain\\1abbcc01-b54f-4cdb-b32f-061db464719d\\about_trim_work_1792434346571.jpg",
  "deck-framing.jpg":
    "C:\\Users\\saura\\.gemini\\antigravity-ide\\brain\\1abbcc01-b54f-4cdb-b32f-061db464719d\\about_deck_framing_1792434367822.jpg",
  "service-remodel.jpg":
    "C:\\Users\\saura\\.gemini\\antigravity-ide\\brain\\1abbcc01-b54f-4cdb-b32f-061db464719d\\service_remodel_1792435416153.jpg",
  "service-carpentry.jpg":
    "C:\\Users\\saura\\.gemini\\antigravity-ide\\brain\\1abbcc01-b54f-4cdb-b32f-061db464719d\\service_carpentry_1792435434008.jpg",
  "service-flooring.jpg":
    "C:\\Users\\saura\\.gemini\\antigravity-ide\\brain\\1abbcc01-b54f-4cdb-b32f-061db464719d\\service_flooring_1792435451998.jpg",
  "service-doors.jpg":
    "C:\\Users\\saura\\.gemini\\antigravity-ide\\brain\\1abbcc01-b54f-4cdb-b32f-061db464719d\\service_doors_1792435467211.jpg",
  "service-garage.jpg":
    "C:\\Users\\saura\\.gemini\\antigravity-ide\\brain\\1abbcc01-b54f-4cdb-b32f-061db464719d\\service_garage_1792435485036.jpg",
  "service-framing.jpg":
    "C:\\Users\\saura\\.gemini\\antigravity-ide\\brain\\1abbcc01-b54f-4cdb-b32f-061db464719d\\service_framing_1792435516647.jpg",
  "service-paint.jpg":
    "C:\\Users\\saura\\.gemini\\antigravity-ide\\brain\\1abbcc01-b54f-4cdb-b32f-061db464719d\\service_paint_1792435532868.jpg",
  "service-restore.jpg":
    "C:\\Users\\saura\\.gemini\\antigravity-ide\\brain\\1abbcc01-b54f-4cdb-b32f-061db464719d\\service_restore_1792435552324.jpg",
  "cta-banner-bg.jpg":
    "C:\\Users\\saura\\.gemini\\antigravity-ide\\brain\\1abbcc01-b54f-4cdb-b32f-061db464719d\\cta_banner_bg_1792436373903.jpg",
  "alan-working.jpg":
    "C:\\Users\\saura\\.gemini\\antigravity-ide\\brain\\1abbcc01-b54f-4cdb-b32f-061db464719d\\.tempmediaStorage\\media_1792433306711.jpg",
  "custom-woodwork.jpg":
    "C:\\Users\\saura\\.gemini\\antigravity-ide\\brain\\1abbcc01-b54f-4cdb-b32f-061db464719d\\hero_woodwork_1792428640077.jpg",
};

// Copy all images to public/ for instant static serving
try {
  const publicDir = path.join(process.cwd(), "public");
  for (const [filename, sourcePath] of Object.entries(imageMap)) {
    const destPath = path.join(publicDir, filename);
    if (fs.existsSync(sourcePath) && !fs.existsSync(destPath)) {
      fs.copyFileSync(sourcePath, destPath);
    }
  }
} catch (e) {
  console.error("Auto copy error:", e);
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ name: string }> }
) {
  const { name } = await context.params;
  const sourcePath = imageMap[name];

  if (!sourcePath || !fs.existsSync(sourcePath)) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const fileBuffer = fs.readFileSync(sourcePath);
  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
