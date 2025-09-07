// /app/api/run-workflow/route.ts (Next.js App Router example)
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Trigger your workflow
        const resp = await fetch("https://api.vapi.ai/v1/workflows/start", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.VAPI_API_KEY}`, // server-side key, not NEXT_PUBLIC
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                workflow: process.env.VAPI_WORKFLOW_ID,
                variableValues: {
                    username: body.username,
                    userid: body.userid,
                },
            }),
        });

        const data = await resp.json();
        return NextResponse.json(data);
    } catch (err) {
        console.error("Error running workflow:", err);
        return NextResponse.json({ error: "Workflow failed" }, { status: 500 });
    }
}
