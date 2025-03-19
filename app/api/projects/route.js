import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import project from "@/models/projects";

export async function GET() {
  try {
    await connectToDatabase(); // Connect to MongoDB

    const projects = await project.find({});
    return NextResponse.json(projects, { status: 200 });

  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
