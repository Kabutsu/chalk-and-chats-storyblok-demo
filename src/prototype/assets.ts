// PROTOTYPE — shared asset imports. Variants import from here, never from src/images directly.
import logo from '../images/Circle Chalk and Chats.png';
import logoSvgUrl from '../images/Circle Chalk and Chats small.svg?url';
import chalkHand from '../images/-post-ai-image-5587.jpg'; // chalky hand on a green hold (dark, moody)
import holdsPink from '../images/-post-ai-image-12137.png'; // pink + yellow holds on teal wall (bright)
import holdsBlue from '../images/-post-ai-image-4490.png'; // colourful holds on pale blue wall (bright, airy)
import chalkBags from '../images/d3a66df1-754f-426f-b520-a83df7861f7c.png'; // chalk bags on a wooden table, outdoors
import videoUrl from '../images/welcome-video.mp4?url'; // 720x1280 portrait, 110s, ~15MB
import videoPoster from '../images/welcome-video-poster.jpg'; // title card on green, 720x1280

export const assets = {
	logo, // ImageMetadata (PNG) — use with <Image/> from astro:assets
	logoSvgUrl, // plain URL string (SVG)
	chalkHand,
	holdsPink,
	holdsBlue,
	chalkBags,
	videoUrl, // string
	videoPoster, // ImageMetadata
};
