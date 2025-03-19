import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import contact from "@/models/contact";

export async function POST(req) {
    try {
        await connectToDatabase();

        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const newContact = new contact({ name, email, message });
        await newContact.save();

        return NextResponse.json({ message: "Message sent successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error in API:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
