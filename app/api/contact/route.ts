import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { nom, prenom, email, tel, question } = await req.json();

    const mailData = {
      first_name: nom,
      last_name: prenom,
      email: email,
      phone: tel,
      content: question,
    };

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (process.env.BIPSOS_API_KEY) {
      headers["X-API-Key"] = process.env.BIPSOS_API_KEY;
    }

    if (process.env.BIPSOS_ACCESS_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.BIPSOS_ACCESS_TOKEN}`;
    }

    const response = await axios.post(
      process.env.BIPSOS_API_URL || "https://api.bipsos.com/mail",
      mailData,
      {
        headers,
        timeout: 10000,
      }
    );

    console.log("URL utilisée :", process.env.BIPSOS_API_URL || "https://api.bipsos.com/mail");

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès !",
      data: response.data,
    });

  } catch (error) {
    console.error("Erreur d'envoi :", error);

    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const message = error.response?.data?.message || "Erreur de communication avec l'API";

      return NextResponse.json(
        {
          success: false,
          message: `Erreur ${status}: ${message}`,
        },
        { status }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Erreur serveur interne",
      },
      { status: 500 }
    );
  }
}
