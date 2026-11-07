// PROTOTYPE — date helpers for the calm variant (calendar dates only, no timezone maths).
import type { ClubEvent } from '../data';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const split = (s: string) => {
	const [y, m, d] = s.slice(0, 10).split('-').map(Number);
	return { y, m, d };
};
const dow = (s: string) => {
	const { y, m, d } = split(s);
	return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
};

export const fmtDay = (s: string) => `${DAYS[dow(s)]} ${split(s).d} ${MONTHS[split(s).m - 1].slice(0, 3)}`;
export const fmtDayLong = (s: string) => `${['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dow(s)]} ${split(s).d} ${MONTHS[split(s).m - 1]}`;
export const fmtTimes = (e: ClubEvent) => `${e.start.slice(11, 16)}–${e.end.slice(11, 16)}`;
export const monthKey = (s: string) => s.slice(0, 7);
export const monthLabel = (key: string) => {
	const [y, m] = key.split('-').map(Number);
	return `${MONTHS[m - 1]} ${y}`;
};
export const fmtClose = (iso: string) => `${split(iso).d} ${MONTHS[split(iso).m - 1]}`;

/** Month keys from the first to the last event, contiguous. */
export function monthRange(events: ClubEvent[]): string[] {
	if (!events.length) return [];
	const first = split(events[0].start);
	const last = split(events[events.length - 1].start);
	const out: string[] = [];
	let y = first.y;
	let m = first.m;
	while (y < last.y || (y === last.y && m <= last.m)) {
		out.push(`${y}-${String(m).padStart(2, '0')}`);
		m++;
		if (m > 12) {
			m = 1;
			y++;
		}
	}
	return out;
}

/** Weeks (Mon-first) of 'YYYY-MM-DD' strings or null padding. */
export function weeksOf(key: string): (string | null)[][] {
	const [y, m] = key.split('-').map(Number);
	const lead = (new Date(Date.UTC(y, m - 1, 1)).getUTCDay() + 6) % 7;
	const days = new Date(Date.UTC(y, m, 0)).getUTCDate();
	const cells: (string | null)[] = Array(lead).fill(null);
	for (let d = 1; d <= days; d++) cells.push(`${key}-${String(d).padStart(2, '0')}`);
	while (cells.length % 7) cells.push(null);
	const weeks: (string | null)[][] = [];
	for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
	return weeks;
}
