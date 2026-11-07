// PROTOTYPE — shared dummy content. Shapes mirror the future Storyblok block fields.
// Placeholder values (URLs, second wall, prices, handle) are invented and must be replaced with real copy.

export const site = {
	name: 'Chalk & Chats',
	tagline: 'Friendly indoor climbing in Southampton',
	whatsappUrl: 'https://chat.whatsapp.com/EXAMPLE-INVITE', // Storyblok global field: whatsapp_invite_url
	instagramUrl: 'https://www.instagram.com/chalkandchats.example',
	instagramHandle: '@chalkandchats.example',
	contactEmail: 'hello@chalkandchats.example',
	memberCount: 150,
	primaryColour: '#437032',
	nav: [
		{ label: 'Home', slug: '' },
		{ label: 'Events', slug: 'events' },
		{ label: 'Merch', slug: 'merch' },
		{ label: 'About', slug: 'about' },
	],
};

export const variants = [
	{ key: 'warm-1', label: 'Warm & Social 1' },
	{ key: 'warm-2', label: 'Warm & Social 2' },
	{ key: 'crisp', label: 'Crisp & Sporty' },
	{ key: 'calm', label: 'Calm & Minimal' },
];

// ---------- Walls ----------
export const walls = {
	hangar: {
		name: 'The Climbing Hangar',
		area: 'Southampton',
		mapUrl: 'https://maps.google.com/?q=The+Climbing+Hangar+Southampton',
	},
	// Second wall is not named in the brief — invented placeholder.
	second: {
		name: 'Itchen Bouldering Co.',
		area: 'Southampton',
		mapUrl: 'https://maps.google.com/?q=Bouldering+Southampton',
	},
};

export const wednesdayBookingUrl = 'https://example.com/the-climbing-hangar/chalk-and-chats-wednesday'; // external booking page

// ---------- Hero (Storyblok component: hero — admin-editable photo) ----------
export const hero = {
	eyebrow: 'Southampton climbing community',
	headline: 'Climb. Chat. Repeat.',
	subheadline:
		'A friendly, no-pressure climbing community for everyone from first-timers to seasoned boulderers. Come for the climbing, stay for the chats.',
	primaryCta: { label: 'Join the WhatsApp group', url: site.whatsappUrl },
	secondaryCta: { label: 'Come to Wednesday’s Session', url: wednesdayBookingUrl, note: 'Books via The Climbing Hangar' },
	imageAlt: 'A chalky hand gripping a green climbing hold on an indoor wall', // photo = assets.chalkHand (editable in Storyblok)
};

// ---------- Intro / welcome video ----------
export const intro = {
	heading: 'What is Chalk & Chats?',
	body: [
		'We’re a local group of about 150 climbers who meet to boulder, share tips and catch up over a drink afterwards. Nobody’s keeping score — well, except at our occasional competition nights.',
		'Whether you’ve climbed for ten years or ten minutes, there’s always someone to climb with, a problem to puzzle over and a post-session chat to join.',
	],
	videoLabel: 'Watch our 2-minute welcome video',
	videoDurationLabel: '1 min 50 s',
};

// ---------- Values / highlights (used for About + Home) ----------
export const highlights = [
	{ title: 'All levels welcome', body: 'From your very first V0 to your hardest project, you’ll find people at your pace.' },
	{ title: 'Weekly & monthly sessions', body: 'Every Wednesday evening, plus a monthly Monday session at a second wall.' },
	{ title: 'Social, not stuffy', body: 'Board games, yoga, pub trips and the odd outdoor adventure — climbing is just the start.' },
];

// ---------- FAQ (Storyblok component: faq — admin-editable entries) ----------
export const faq = [
	{
		question: 'Do I need to be a good climber to join?',
		answer:
			'Not at all. Plenty of us are beginners and the walls set problems for every grade. Nobody will mind if you spend the whole evening on the easy ones.',
	},
	{
		question: 'Can I hire climbing shoes and equipment?',
		answer:
			'Chalk & Chats doesn’t hire kit, but the walls we visit do rent shoes and chalk. Ask at the front desk when you arrive. Wall entry and any rental are paid to the wall directly.',
	},
	{
		question: 'How much does it cost?',
		answer:
			'Joining Chalk & Chats is free. You just pay the wall’s normal entry fee (around £9 at The Climbing Hangar on a Wednesday). Merch is optional and only sold in occasional Drops.',
	},
	{
		question: 'Do I need to book?',
		answer:
			'For Wednesday sessions, yes — book through The Climbing Hangar’s website using the link on our Events page. Our monthly Monday session and our socials don’t need booking, just turn up.',
	},
	{
		question: 'I’ve never been climbing before. Is that OK?',
		answer:
			'Absolutely. The wall will give you a short induction on your first visit, and our regulars love showing newcomers the ropes (well, the mats). Message us on WhatsApp and someone will meet you at the door.',
	},
	{
		question: 'How do I join the WhatsApp group?',
		answer:
			'Tap any “Join the WhatsApp group” button on this site. New joiners are approved by an admin, usually within a day, and you’ll be added to the chat.',
	},
];

// ---------- First session guide ----------
export const firstSession = {
	heading: 'Your first Session',
	intro: 'Here’s exactly what to expect, so you can walk in feeling like a regular.',
	steps: [
		{ title: 'Join the WhatsApp group', body: 'Say hi and mention it’s your first time — someone will be your climbing buddy for the night.' },
		{ title: 'Book Wednesday’s slot', body: 'Sessions at The Climbing Hangar are booked through their website. It takes a minute.' },
		{ title: 'Bring comfy clothes', body: 'Stretchy trousers, a t-shirt and water. Shoes and chalk can be hired at the wall.' },
		{ title: 'Climb, chat, repeat', body: 'Climb at your own pace, rest, chat, and head to the bar or café with the group afterwards.' },
	],
	cost: 'Free to join. You only pay the wall’s entry fee (around £9) plus any shoe hire.',
	kit: 'We don’t hire kit ourselves, but both walls we visit have shoes and chalk for hire.',
};

// ---------- Events ----------
export type EventType = 'Session' | 'Social' | 'Competition' | 'Trip';

export interface Place {
	name: string;
	area: string;
	mapUrl: string;
}

export interface ClubEvent {
	id: string;
	title: string;
	type: EventType;
	start: string; // 'YYYY-MM-DDTHH:mm' local (Europe/London), no timezone suffix
	end: string;
	place: Place; // a Wall for Sessions/Competitions; any venue for Socials/Trips
	description: string;
	cost: string; // plain text
	bookingUrl?: string; // external — only the Wednesday Session has one
	recurrence?: string; // human-readable, for recurring Sessions
	image?: 'chalkHand' | 'holdsPink' | 'holdsBlue' | 'chalkBags';
}

// Local-date helpers (no timezone maths: we only ever care about calendar dates).
const pad = (n: number) => String(n).padStart(2, '0');
const ymd = (d: Date) => `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
const addDays = (d: Date, n: number) => new Date(d.getTime() + n * 86400000);
const todayUtc = () => {
	const n = new Date();
	return new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()));
};

/** Generates ~12 weeks of dummy events starting from today. */
export function getEvents(): ClubEvent[] {
	const start = todayUtc();
	const horizon = 84; // days
	const events: ClubEvent[] = [];

	for (let i = 0; i < horizon; i++) {
		const d = addDays(start, i);
		const dow = d.getUTCDay(); // 0 Sun … 6 Sat
		const dom = d.getUTCDate();

		// Every Wednesday — The Climbing Hangar, bookable externally
		if (dow === 3) {
			events.push({
				id: `wed-${ymd(d)}`,
				title: 'Wednesday Session',
				type: 'Session',
				start: `${ymd(d)}T18:30`,
				end: `${ymd(d)}T21:30`,
				place: walls.hangar,
				description:
					'Our weekly bouldering night. All grades welcome — come and climb with a friendly crowd, then stay for a drink afterwards.',
				cost: 'Wall entry applies (around £9). Chalk & Chats is free.',
				bookingUrl: wednesdayBookingUrl,
				recurrence: 'Every Wednesday',
				image: 'holdsBlue',
			});
		}

		// Third Monday of the month — second wall, no booking
		if (dow === 1 && dom >= 15 && dom <= 21) {
			events.push({
				id: `mon-${ymd(d)}`,
				title: 'Monday Session',
				type: 'Session',
				start: `${ymd(d)}T19:00`,
				end: `${ymd(d)}T21:30`,
				place: walls.second,
				description:
					'A change of scenery: our monthly session at a different wall with fresh problems to try. No booking — just turn up.',
				cost: 'Wall entry applies (around £8). Chalk & Chats is free.',
				recurrence: 'Every third Monday',
				image: 'holdsPink',
			});
		}
	}

	// One-off events, offset from today so the calendar always looks populated.
	const oneOff = (offset: number, from: string, to: string, e: Omit<ClubEvent, 'id' | 'start' | 'end'>) => {
		const d = addDays(start, offset);
		events.push({ ...e, id: `${e.type.toLowerCase()}-${ymd(d)}`, start: `${ymd(d)}T${from}`, end: `${ymd(d)}T${to}` });
	};

	oneOff(4, '19:00', '22:00', {
		title: 'Board Games Night',
		type: 'Social',
		place: { name: 'The Dice & Dram', area: 'Southampton', mapUrl: 'https://maps.google.com/?q=board+games+cafe+Southampton' },
		description: 'Swap crimps for counters. Bring a favourite game or just turn up and join a table — beginners to Catan veterans welcome.',
		cost: 'Free (buy your own food and drink)',
		image: 'chalkBags',
	});
	oneOff(11, '10:30', '11:45', {
		title: 'Yoga for Climbers',
		type: 'Social',
		place: { name: 'Studio 7', area: 'Southampton', mapUrl: 'https://maps.google.com/?q=yoga+studio+Southampton' },
		description: 'A gentle session focused on shoulders, hips and fingers. Mats provided. Perfect for a rest-day stretch.',
		cost: '£5 towards the instructor',
		image: 'chalkHand',
	});
	oneOff(19, '07:00', '19:00', {
		title: 'Peak District Day Trip',
		type: 'Trip',
		place: { name: 'Stanage Edge', area: 'Peak District', mapUrl: 'https://maps.google.com/?q=Stanage+Edge' },
		description: 'Our occasional outdoor adventure: shared lifts, gritstone bouldering and a pub lunch. Bring crash pads if you have them; we’ll share the rest.',
		cost: 'Share of fuel (around £25)',
		image: 'holdsPink',
	});
	oneOff(26, '19:30', '22:00', {
		title: 'Pub Quiz & Pizza',
		type: 'Social',
		place: { name: 'The Anchor', area: 'Southampton', mapUrl: 'https://maps.google.com/?q=pub+Southampton' },
		description: 'Team up for a climbing-flavoured quiz. Pizza on us for the winners, pride for everyone else.',
		cost: 'Free (buy your own drinks)',
		image: 'chalkBags',
	});
	oneOff(33, '18:30', '22:00', {
		title: 'Winter Boulder Bash',
		type: 'Competition',
		place: walls.hangar,
		description:
			'Our single-night bouldering competition: climb as many problems as you can, score points for zones and tops, and compete in Men’s, Women’s or Open. Prizes and plenty of cheering.',
		cost: 'Wall entry applies (around £9).',
		image: 'holdsBlue',
	});
	oneOff(47, '19:00', '23:00', {
		title: 'Christmas Social',
		type: 'Social',
		place: { name: 'The Anchor', area: 'Southampton', mapUrl: 'https://maps.google.com/?q=pub+Southampton' },
		description: 'End the year with food, drink and terrible jumpers. Secret Santa (£5 limit) optional.',
		cost: 'Free (buy your own food and drink)',
		image: 'chalkBags',
	});

	return events.sort((a, b) => a.start.localeCompare(b.start));
}

/** Build a data: URI .ics for the "Add to calendar" button. */
export function icsHref(e: ClubEvent): string {
	const fmt = (s: string) => s.replace(/[-:]/g, '') + '00';
	const lines = [
		'BEGIN:VCALENDAR',
		'VERSION:2.0',
		'PRODID:-//Chalk & Chats//Prototype//EN',
		'BEGIN:VEVENT',
		`UID:${e.id}@chalkandchats.example`,
		`DTSTART;TZID=Europe/London:${fmt(e.start)}`,
		`DTEND;TZID=Europe/London:${fmt(e.end)}`,
		`SUMMARY:${e.title}`,
		`LOCATION:${e.place.name}`,
		`DESCRIPTION:${e.description}`,
		'END:VEVENT',
		'END:VCALENDAR',
	];
	return 'data:text/calendar;charset=utf-8,' + encodeURIComponent(lines.join('\r\n'));
}

export const eventTypes: EventType[] = ['Session', 'Social', 'Competition', 'Trip'];

// ---------- Merch ----------
export type DropState = 'open' | 'closed' | 'none';

export const merch = {
	items: [
		{ id: 'tee', name: 'Classic Tee', price: 18, blurb: 'Soft organic cotton with the Chalk & Chats hold logo on the chest.', garment: 'tee' as const },
		{ id: 'hoodie', name: 'Pullover Hoodie', price: 34, blurb: 'Heavyweight fleece-back hoodie. Warm between attempts.', garment: 'hoodie' as const },
		{ id: 'tank', name: 'Racerback Tank', price: 16, blurb: 'Lightweight and breathable for hot, sweaty evenings on the wall.', garment: 'tank' as const },
	],
	colours: [
		{ name: 'Forest', hex: '#437032' },
		{ name: 'Chalk', hex: '#F3EFE4' },
		{ name: 'Slate', hex: '#3C4650' },
	],
	sizes: ['S', 'M', 'L', 'XL'],
	// The current Drop (shown when state is 'open' or 'closed')
	drop: {
		name: 'Winter Drop',
		closesLabel: 'Orders close in 3 weeks',
		closesIso: (() => {
			const d = addDays(todayUtc(), 21);
			return `${ymd(d)}T23:59`;
		})(),
		collection: 'Collect your order at a Wednesday Session in mid-December. We’ll confirm the date by email and WhatsApp.',
		note: 'Made to order in one bulk run — that’s how we keep prices low. Pay securely online when you order.',
	},
};

/** Parse ?drop= into a DropState, defaulting to 'open'. */
export function parseDropState(v: string | null): DropState {
	return v === 'closed' || v === 'none' ? v : 'open';
}
