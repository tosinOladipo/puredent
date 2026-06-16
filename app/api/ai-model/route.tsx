import { AI_PROMPT } from "@/utils/prompt/prompt";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    const { imageUrl } = await req.json();

    const FINAL_PROMPT = AI_PROMPT
      .replace('{{imageUrl}}', imageUrl)

    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_AI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.5-flash-lite",
      messages: [{ role: "user", content: FINAL_PROMPT }],
    });

    const content = completion.choices?.[0]?.message?.content;
    console.log("AI Response:", content);

    if (!content) {
      return NextResponse.json({ error: "No content received from AI" }, { status: 500 });
    }

    return NextResponse.json({ content });

  } catch (error: any) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: error?.message || "Server error" },
      { status: 500 }
    );
  }
}
