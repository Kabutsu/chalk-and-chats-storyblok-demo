// PROTOTYPE — warm-1 helpers
import type { ClubEvent } from '../data';
export const base = '/prototype/warm-1';
export const href = (slug: string) => `${base}${slug ? `/${slug}` : ''}`;
const d = (s: string) => new Date(s + ':00Z'); // display only; treated as UTC so no timezone shift
const f = (o: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat('en-GB', { ...o, timeZone: 'UTC' });
export const fmtDate = (s: string) => f({ weekday: 'short', day: 'numeric', month: 'short' }).format(d(s));
export const fmtTime = (s: string) => f({ hour: '2-digit', minute: '2-digit', hour12: false }).format(d(s));
export const fmtMonth = (key: string) => f({ month: 'long', year: 'numeric' }).format(d(key + '-01T00:00'));
export const fmtRange = (e: ClubEvent) => `${fmtTime(e.start)}–${fmtTime(e.end)}`;
export const typeClass = (t: string) => `badge--${t.toLowerCase()}`;
export function inkFor(hex: string) {
	const n = parseInt(hex.slice(1), 16);
	const ch = [n >> 16, (n >> 8) & 255, n & 255].map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; });
	const L = 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
	return L > 0.4 ? '#2b4d1f' : '#faf6ec';
}
