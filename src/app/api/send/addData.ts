"server only";

import { ContactFormData } from "@/components/screens/section-5/form-schema";
// import { format } from "date-fns";
import { google } from "googleapis";

type Props = ContactFormData;

const authObj = {
  type: "service_account",
  project_id: "sheets-data-466418",
  private_key_id: "d2f6d42a94989421b5e3eec3ea7995416032aea8",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC/sQfh4Y+cGkbF\nJwzJOVlHop2o6xcOdkQdyEza0mtzFkRIG+Pa1SLM26/e9qQIsGtUyUCY1EYJ+feh\n/u1aJz3iWndVjfI4QZPM1OXPRu8aMbmUihdd0jiwsypgtdEssWiVfukeiuPA6FTy\n5yqxNavBSDEBbg40IvNVfIGrVB1wZNN4Sl85TqElk50P8+oeqTQ3coAaW0QBhHlI\nu4QFqBeYgbXiPSarY/1XJLc+RVOHBw/wcBVCQ7RTNhZKmwbrrxBOb3cMBer1o5mm\nC7o3uFFR1GBf51VATCc3xMs+WaOov/czWCZa+JD5E66fkfPzh+qBSQHEY7N4x/nz\nxSCFtw0BAgMBAAECggEAKzMozRmJxUrQrya1RXYErlWyBTrx58L0Z+fXlir8pyOa\nAMw0RgFphdRupqdb4U9s6N8wDSEtpZrtWVc7w2j7k9MCeMf0EgSJXAyQu+1G/la9\ndYHHcU/qkbvW7ZOcD9/ta19+BvGTEUrqthEtuGEZk4YC8UkNr2c/AoF8MZHTzpuu\nAEZssZjKpIkxniPUMQLZSt2RWmqz43TE7Fpup4GtNr0qgtQ78jszJZ0CKyN9Ca/i\n0AmQYC2UsMTfjYVaStQOXWkyIbFNK4nyqnS2D61UymB/RVRs5hOkqEw5X0iHUNX3\nuTpr6SdHah7J0I5g9OUmejI/+pAoUbltX3Whsj2SCQKBgQD1uRVYONpQFTAik/yF\nC2Nt48cNtxj9nkZ0nBQsuz8pQqrlLUl3xxZ61T7QwykxD8RYwwdlg3Q3fERmgu1w\nmoZGQ8fPIK1iIyBjm33OqOB55oHdO2F2an1yE9s33eT73Gu09EgtDUwG5RZ6cv3i\nsyx9VYPx0FCjXQEpEK7Y1+JZlQKBgQDHtXD3KLXmkHTX7e6RCxLGlUcRSdbL2WGh\ni3aky9sVGiEDea+hBG+HJ+k29tbDzG1+UVeoh9bvOQoIsQi8cBe9JXxA2bglUPRx\ntAELtnE4z1H2tqvplxz6u7421e6S/gJinvsVzC80AQpi/kmGyl6TGSip2QzIIGRA\nBQiebtjCvQKBgQCAuywhgfdtiQwksV7T3LmEcpZv6wKeq/LBWJuBK7/VP+YEFous\nwpJWW62C9Rt5Zoc48UPIvOt/vgyfn+wA2BOMcCoXq0jqZviq9mUchYDEnCxg2KEg\nxn1d7GUmiYtTH5EVxfyiDZtM6WuzTtcPk0q1hr2PS9FTJIBdIS5Y0BD3WQKBgBBd\nI6Z85XrA93ICAvxLhfxTmwElpb4KT9+mx8/1DDyMaYwZWnS9Ik5WzNs+Gpbsl0Q0\nchRTHR948wOHTgnyvV84RRgjPt1/5qeycit9hYV8J2Ep0qhPQ4af/5QKr4PH4HYo\nRLaihnOiajF2WJv81QcElrpkGJIFZXGBeBVTS9uZAoGBAJyqYS4uQD5hN1PcLpnZ\n3rBo2An0GN++WYu6Bd5uQBrW3m/q84TrQRK4jYxYJKvusFTh52JNNycMMpewdS6u\nP8y9BHV/8VeTRXdQboznOll1j7dZTy4jK+z7U4E5A+IFOg5jWhlAQXJRAx9Oa0sy\nX47rXYX8CLxcZ7JqPkWRmdnf\n-----END PRIVATE KEY-----\n",
  client_email:
    "editor-planilhas-app-267@sheets-data-466418.iam.gserviceaccount.com",
  client_id: "108626050435471245475",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/editor-planilhas-app-267%40sheets-data-466418.iam.gserviceaccount.com",
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
    spreadsheetId: "1NYS9e1Zcl5R6ykzA8qw9jljrdHnk-5BXdOOzyMxRhds",
    range: "Página1",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [
        [
          props.fullName,
          props.email,
          props.phone,
          props.company,
          props.role,
          props.companySize,
          props.field,
          props.projectDetails,
        ],
      ],
    },
  });
}
