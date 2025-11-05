export async function handler(event) {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method Not Allowed" };
  try {
    const { amount, payer_email, description } = JSON.parse(event.body || "{}");
    if (!process.env.XENDIT_SECRET_KEY) return { statusCode: 500, body: "Missing XENDIT_SECRET_KEY" };
    const resp = await fetch("https://api.xendit.co/v2/invoices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + Buffer.from(process.env.XENDIT_SECRET_KEY + ":").toString("base64"),
      },
      body: JSON.stringify({
        amount,
        payer_email,
        description: description || "Wishboyke Order",
        success_redirect_url: process.env.SUCCESS_REDIRECT_URL || "https://example.com/sukses",
        failure_redirect_url: process.env.FAIL_REDIRECT_URL || "https://example.com/gagal",
      }),
    });
    const data = await resp.json();
    return { statusCode: resp.status, body: JSON.stringify(data) };
  } catch (e) {
    return { statusCode: 500, body: String(e) };
  }
}
