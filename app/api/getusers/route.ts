import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse.json({
        user: [
            { id: "1", name: "Pawan", email: "pawan@example.com", role: "Software Engineer" },
            { id: "2", name: "John Doe", email: "john@example.com", role: "Software Engineer" },
            { id: "3", name: "Jane Smith", email: "jane@example.com", role: "Product Manager" },
            { id: "4", name: "Alice Johnson", email: "alice@example.com", role: "Designer" },
            { id: "5", name: "Bob Brown", email: "bob@example.com", role: "Software Engineer" },
            { id: "6", name: "Charlie Davis", email: "charlie@example.com", role: "Data Scientist" },
            { id: "7", name: "David Lee", email: "david@example.com", role: "HR Manager" },
            { id: "8", name: "Eva Green", email: "eva@example.com", role: "Software Engineer" },
            { id: "9", name: "Fiona White", email: "fiona@example.com", role: "Marketing Manager" },
            { id: "10", name: "George Black", email: "george@example.com", role: "Product Manager" },
            { id: "11", name: "Hannah Brown", email: "hannah@example.com", role: "Customer Support" },
            { id: "12", name: "Ian Blue", email: "ian@example.com", role: "UX Researcher" },
            { id: "13", name: "Jack Red", email: "jack@example.com", role: "Backend Developer" },
            { id: "14", name: "Karen Pink", email: "karen@example.com", role: "Frontend Developer" },
            { id: "15", name: "Leo Gray", email: "leo@example.com", role: "Product Manager" }
        ]
    });
}
