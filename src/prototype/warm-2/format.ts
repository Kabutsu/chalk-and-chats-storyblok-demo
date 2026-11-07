// PROTOTYPE — date helpers for warm-2 (calendar dates only, no timezone maths).
import type { ClubEvent, EventType } from '../data';

const pad = (n: number) => String(n).padStart(2, '0');
export const dateOf = (s: string) => {
	const [y, m, d] = s.slice(0, 10).split('-').map(Number);
	return new Date(Date.UTC(y, m - 1, d));
};
const fmt = (o: Intl.DateTimeFormatOptions, s: string) => new Intl.DateTimeFormat('en-GB', { ...o, timeZone: 'UTC' }).format(dateOf(s));

export const dayName = (s: string) => fmt({ weekday: 'short' }, s);
export const dayNum = (s: string) => fmt({ day: 'numeric' }, s);
export const monthShort = (s: string) => fmt({ month: 'short' }, s);
export const longDate = (s: string) => fmt({ weekday: 'long', day: 'numeric', month: 'long' }, s);
export const monthTitle = (key: string) => fmt({ month: 'long', year: 'numeric' }, `${key}-01`);
export const timeRange = (e: ClubEvent) => `${e.start.slice(11)}–${e.end.slice(11)}`;

/** ISO date of the Monday starting the week that contains `s`. */
export const weekKey = (s: string) => {
	const d = dateOf(s);
	const back = (d.getUTCDay() + 6) % 7;
	const m = new Date(d.getTime() - back * 86400000);
	return `${m.getUTCFullYear()}-${pad(m.getUTCMonth() + 1)}-${pad(m.getUTCDate())}`;
};
export const weekLabel = (key: string) => `Week of ${fmt({ day: 'numeric', month: 'long' }, key)}`;

export const typeStyle: Record<EventType, { glyph: string; cls: string }> = {
	Session: { glyph: '●', cls: 'session' },
	Social: { glyph: '■', cls: 'social' },
	Competition: { glyph: '▲', cls: 'competition' },
	Trip: { glyph: '◆', cls: 'trip' },
};

/** Weeks (Mon–Sun) of a month; null = padding cell. Values are ISO dates. */
export function monthWeeks(key: string): (string | null)[][] {
	const [y, m] = key.split('-').map(Number);
	const lead = (new Date(Date.UTC(y, m - 1, 1)).getUTCDay() + 6) % 7;
	const days = new Date(Date.UTC(y, m, 0)).getUTCDate();
	const cells: (string | null)[] = Array(lead).fill(null);
	for (let d = 1; d <= days; d++) cells.push(`${key}-${pad(d)}`);
	while (cells.length % 7) cells.push(null);
	const rows: (string | null)[][] = [];
	for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));
	return rows;
}
