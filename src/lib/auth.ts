import crypto from "crypto";

const SECRET = process.env.ADMIN_SECRET || "fallback-dev-secret-change-in-production";
const TOKEN_TTL = 15 * 60 * 1000; // 15 minutes

export function generateToken(email: string): string {
  const expiry = Date.now() + TOKEN_TTL;
  const payload = `${email}:${expiry}`;
  const signature = crypto.createHmac("sha256", SECRET).update(payload).digest("hex");
  return Buffer.from(`${payload}:${signature}`).toString("base64url");
}

export function verifyToken(token: string): { valid: boolean; email?: string } {
  try {
    const decoded = Buffer.from(token, "base64url").toString();
    const parts = decoded.split(":");
    if (parts.length !== 3) return { valid: false };

    const [email, expiryStr, signature] = parts;
    const expiry = parseInt(expiryStr, 10);

    if (Date.now() > expiry) return { valid: false };

    const expectedSig = crypto.createHmac("sha256", SECRET).update(`${email}:${expiry}`).digest("hex");
    if (signature !== expectedSig) return { valid: false };

    return { valid: true, email };
  } catch {
    return { valid: false };
  }
}

export function isAdminEmail(email: string): boolean {
  const allowed = process.env.ADMIN_EMAIL;
  if (!allowed) return false;
  return email.toLowerCase() === allowed.toLowerCase();
}

export function getSessionCookieName(): string {
  return "rk_admin_session";
}

export function generateSessionToken(email: string): string {
  const expiry = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days
  const payload = `${email}:${expiry}`;
  const signature = crypto.createHmac("sha256", SECRET).update(payload).digest("hex");
  return Buffer.from(`${payload}:${signature}`).toString("base64url");
}

export function verifySessionToken(token: string): { valid: boolean; email?: string } {
  try {
    const decoded = Buffer.from(token, "base64url").toString();
    const parts = decoded.split(":");
    if (parts.length !== 3) return { valid: false };

    const [email, expiryStr, signature] = parts;
    const expiry = parseInt(expiryStr, 10);

    if (Date.now() > expiry) return { valid: false };

    const expectedSig = crypto.createHmac("sha256", SECRET).update(`${email}:${expiry}`).digest("hex");
    if (signature !== expectedSig) return { valid: false };

    return { valid: true, email };
  } catch {
    return { valid: false };
  }
}
