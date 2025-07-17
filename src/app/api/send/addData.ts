"server only";

import { ContactFormData } from "@/components/screens/section-5/form-schema";
// import { format } from "date-fns";
import { google } from "googleapis";

type Props = ContactFormData

const authObj = {
  type: "",
  project_id: "",
  private_key_id: "",
  private_key: ``,
  client_email: "",
  client_id: "",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/teste-464%40landingpage-461118.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};



export async function addData(props: Props) {
  const auth = new google.auth.GoogleAuth({
        
    credentials: authObj,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const authClient = await auth.getClient();

  const sheets = google.sheets({ version: "v4", auth: authClient });
  await sheets.spreadsheets.values.append({
    spreadsheetId: "",
    range: "Página1",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [[]],
    }
  });
}