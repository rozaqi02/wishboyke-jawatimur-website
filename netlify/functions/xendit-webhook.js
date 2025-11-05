export async function handler(event) {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method Not Allowed" };
  const tokenHeader = event.headers["x-callback-token"] || event.headers["X-Callback-Token"];
  const expected = process.env.XENDIT_CALLBACK_TOKEN;
  if (expected && tokenHeader !== expected) return { statusCode: 403, body: "Forbidden" };
  try {
    const payload = JSON.parse(event.body || "{}");
    console.log("Xendit webhook:", payload);
    return { statusCode: 200, body: "OK" };
  } catch (e) {
    return { statusCode: 400, body: "Bad Request" };
  }
}
