import { NextRequest, NextResponse } from "next/server";
import { addData } from "./addData";
import { ContactFormData } from "@/components/screens/section-5/form-schema";

export async function POST(request: NextRequest) {
  const body: ContactFormData = await request.json(); 

  const formData = new FormData();
  Object.entries(body).forEach(([key, value]) => {
    formData.append(key, value);
  });

  await addData(body);

  try {
  return NextResponse.json({ message: "OK" }, { status: 200 })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Erro ao enviar:", error?.message);
    return NextResponse.json({ message: error?.message }, { status: 500 });
  }
}
