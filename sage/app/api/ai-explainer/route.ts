import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../lib/firebase";

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();

    if (!question || typeof question !== "string") {
      return NextResponse.json({ error: "Question is required" }, { status: 400 });
    }

    const snapshot = await db.collection("aiExplainer").get();

    console.log("Firestore docs:", snapshot.docs.map(d => d.data()));

    if (snapshot.empty) {
      return NextResponse.json({ answer: "No answers found in the database." });
    }
    const lowerQuestion = question.toLowerCase();

    const doc = snapshot.docs.find(d => {
      const q = d.data().question;
      if (!q) return false;
      return q.toLowerCase().includes(lowerQuestion);
    });

    if (!doc) {
      return NextResponse.json({ answer: "No answer found" });
    }

    return NextResponse.json({ answer: doc.data().answer });

  } catch (err) {
    console.error("Error in ai-explainer route:", err);
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}