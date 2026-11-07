// PROTOTYPE — date helpers for the crisp variant (calendar dates only, no timezone maths).
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function parts(s: string) {
	const [date, time] = s.split('T');
	const [y, m, d] = date.split('-').map(Number);
	const dow = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
	return { y, m, d, dow, time, date };
}
export const dayNum = (s: string) => String(parts(s).d).padStart(2, '0');
export const weekdayShort = (s: string) => DAYS[parts(s).dow].slice(0, 3);
export const weekdayLong = (s: string) => DAYS[parts(s).dow];
export const monthShort = (s: string) => MONTHS[parts(s).m - 1].slice(0, 3);
export const longDate = (s: string) => {
	const p = parts(s);
	return `${DAYS[p.dow]} ${p.d} ${MONTHS[p.m - 1]}`;
};
export const startTime = (s: string) => parts(s).time;
export const timeRange = (e: { start: string; end: string }) => `${parts(e.start).time}–${parts(e.end).time}`;
export const monthKey = (s: string) => s.slice(0, 7);
export const monthLabel = (key: string) => {
	const [y, m] = key.split('-').map(Number);
	return `${MONTHS[m - 1]} ${y}`;
};
export const todayKey = () => {
	const n = new Date();
	return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, '0')}-${String(n.getDate()).padStart(2, '0')}`;
};

/** Monday-first weeks for a 'YYYY-MM' key. Each cell is a 'YYYY-MM-DD' string or null. */
export function weeksOf(key: string): (string | null)[][] {
	const [y, m] = key.split('-').map(Number);
	const first = new Date(Date.UTC(y, m - 1, 1));
	const lead = (first.getUTCDay() + 6) % 7;
	const days = new Date(Date.UTC(y, m, 0)).getUTCDate();
	const cells: (string | null)[] = Array(lead).fill(null);
	for (let d = 1; d <= days; d++) cells.push(`${key}-${String(d).padStart(2, '0')}`);
	while (cells.length % 7) cells.push(null);
	const weeks: (string | null)[][] = [];
	for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
	return weeks;
}
