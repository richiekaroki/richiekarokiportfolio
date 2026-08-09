import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || siteConfig.name;
  const description = searchParams.get("description") || siteConfig.description;
  const tags = searchParams.get("tags")?.split(",").slice(0, 5) || [
    "TypeScript",
    "React",
    "Next.js",
    "NestJS",
    "Python",
  ];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3b82f6, #d97706)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              RK
            </span>
          </div>
        </div>
        <div
          style={{
            fontSize: title.length > 40 ? "48px" : "64px",
            fontWeight: "bold",
            color: "#ffffff",
            lineHeight: "1.1",
            marginBottom: "16px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#a1a1aa",
            lineHeight: "1.4",
            maxWidth: "600px",
          }}
        >
          {description}
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "32px",
            flexWrap: "wrap",
          }}
        >
          {tags.map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                backgroundColor: "#1c1917",
                color: "#d97706",
                fontSize: "18px",
                border: "1px solid #292524",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
