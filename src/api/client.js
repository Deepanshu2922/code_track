/**
 * API base URL for fetch calls.
 * - CRA dev: keep `"proxy": "http://localhost:5000"` in the root `package.json`.
 * - We still provide a safe default so we never accidentally call React dev server (`:3000`).
 */
export const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

// Parse JSON body if present; avoids throwing when server returns HTML.
export async function parseJsonSafe(response) {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return { message: text.slice(0, 200) };
  }
}

// Turn fetch/network failures into clear messages for the UI + console.
export function getFetchErrorMessage(error) {
  console.error("API request failed:", error);

  if (error instanceof TypeError && error.message === "Failed to fetch") {
    return "Cannot reach server. Start backend on http://localhost:5000 (node server.js).";
  }

  return error?.message || "Something went wrong. Please try again.";
}
