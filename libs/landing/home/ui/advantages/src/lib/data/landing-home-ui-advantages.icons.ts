/* eslint-disable max-len */
const gymIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m27.5 43.8-2.1-2.1 7.1-7.1-19.1-19.1-7.1 7.1-2.1-2.1L7 17.6l-2.8-2.8 4.25-4.25-2.1-2.1 2.1-2.1L10.6 8.4l4.2-4.2L17.6 7l2.9-2.8 2.1 2.1-7.1 7.1 19.1 19.1 7.1-7.1 2.1 2.1-2.8 2.9 2.8 2.8-4.3 4.3 2.1 2.1-2.1 2.1-2.1-2.1-4.2 4.2-2.8-2.8Z"/></svg>`;

const fightIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M2.2 44 .05 41.85l7.4-7.5-2.25-6.3q-.4-1.1-.2-2.1t1-1.8l6.8-6.85q.5-.5 1.15-.8.65-.3 1.3-.3t1.3.3q.65.3 1.15.8l4.2 3.95q2.15 1.95 3.7 2.575 1.55.625 3.8.625v3q-2.5 0-4.875-.825T20.1 23.75l-1.85-1.85-5.7 5.7 4.7 4.6V44h-3V33.55l-3.8-3.6v5.7Zm28.35 0V30.4l4.5-4.25-1.65-8.95q-2 2.7-3.7 3.95-1.7 1.25-3.55 1.75-.8-.4-1.675-.975T23.1 20.75q2.25-.4 4.25-1.575 2-1.175 3.75-4.025l2.05-3.35q.85-1.4 2.1-1.775t2.6.225l10.1 4.4v8.6h-3v-6.6l-4.9-2.2L45.7 44h-3.1l-4-16-5.05 5.05V44ZM22.4 16.8q-1.5 0-2.575-1.075-1.075-1.075-1.075-2.575 0-1.5 1.075-2.575Q20.9 9.5 22.4 9.5q1.5 0 2.575 1.075 1.075 1.075 1.075 2.575 0 1.5-1.075 2.575Q23.9 16.8 22.4 16.8Zm10.5-8.5q-1.5 0-2.575-1.075Q29.25 6.15 29.25 4.65q0-1.5 1.075-2.575Q31.4 1 32.9 1q1.5 0 2.575 1.075Q36.55 3.15 36.55 4.65q0 1.5-1.075 2.575Q34.4 8.3 32.9 8.3Z"/></svg>`;

const womanIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M21 44V33h-6l5.1-16.4q.4-1.25 1.5-1.925T24 14q1.3 0 2.4.675 1.1.675 1.5 1.925L33 33h-6v11Zm3-32.7q-1.5 0-2.575-1.075Q20.35 9.15 20.35 7.65q0-1.5 1.075-2.575Q22.5 4 24 4q1.5 0 2.575 1.075Q27.65 6.15 27.65 7.65q0 1.5-1.075 2.575Q25.5 11.3 24 11.3Z"/></svg>`;

const shower = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14.9 34.85q-.6 0-1.05-.45-.45-.45-.45-1.05 0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.05.45Zm9.1 0q-.6 0-1.05-.45-.45-.45-.45-1.05 0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.05.45Zm9.1 0q-.6 0-1.05-.45-.45-.45-.45-1.05 0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.05.45ZM10 27.35v-3Q10 19 13.625 15t8.875-4.55V6h3v4.45q5.25.55 8.875 4.55T38 24.35v3Zm3-3h22q0-4.55-3.225-7.775Q28.55 13.35 24 13.35q-4.55 0-7.775 3.225Q13 19.8 13 24.35ZM14.9 42q-.6 0-1.05-.45-.45-.45-.45-1.05 0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.05.45Zm9.1 0q-.6 0-1.05-.45-.45-.45-.45-1.05 0-.6.45-1.05Q23.4 39 24 39q.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05Q24.6 42 24 42Zm9.1 0q-.6 0-1.05-.45-.45-.45-.45-1.05 0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.05.45ZM24 24.35Z"/></svg>`;

const airFlow = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 35q4.6 0 7.8-3.2T35 24q0-4.6-3.2-7.8T24 13q-4.6 0-7.8 3.2T13 24q0 4.6 3.2 7.8T24 35Zm0-3q-1.45 0-2.8-.525-1.35-.525-2.45-1.475h10.5q-1.1.95-2.45 1.475Q25.45 32 24 32Zm-6.9-4q-.4-.7-.65-1.45T16.1 25h15.8q-.1.8-.35 1.55-.25.75-.65 1.45Zm-1-5q.1-.8.35-1.55.25-.75.65-1.45h13.8q.4.7.65 1.45T31.9 23Zm2.65-5q1.1-.95 2.45-1.475Q22.55 16 24 16q1.45 0 2.8.525 1.35.525 2.45 1.475ZM9 42q-1.25 0-2.125-.875T6 39V9q0-1.25.875-2.125T9 6h30q1.25 0 2.125.875T42 9v30q0 1.25-.875 2.125T39 42Zm0-3h30V9H9v30ZM9 9v30V9Z"/></svg>`;

const coach = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22 38q-5.05 0-8.525-3.475Q10 31.05 10 26q0-.55.05-1.15.05-.6.15-1.05-.25.1-.6.15-.35.05-.6.05-2.2 0-3.6-1.4T4 19q0-2.2 1.4-3.6T9 14q1.55 0 2.85.925t1.85 2.325q1.55-1.4 3.725-2.325Q19.6 14 22.05 14H44v6H34v6q0 5.05-3.475 8.525Q27.05 38 22 38ZM9 21q.9 0 1.45-.55Q11 19.9 11 19q0-.9-.55-1.45Q9.9 17 9 17q-.9 0-1.45.55Q7 18.1 7 19q0 .9.55 1.45Q8.1 21 9 21Zm13 12q3 0 5-2t2-5q0-3-2-5t-5-2q-3 0-5 2t-2 5q0 3 2 5t5 2Zm0-3q1.65 0 2.825-1.175Q26 27.65 26 26q0-1.65-1.175-2.825Q23.65 22 22 22q-1.65 0-2.825 1.175Q18 24.35 18 26q0 1.65 1.175 2.825Q20.35 30 22 30Zm0-4Z"/></svg>`;

const facebookIcon = `<svg enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"/></svg>`;

const telegramIcon = `<svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/></svg>`;

const instagramIcon = `<svg height="511pt" viewBox="0 0 511 511.9" width="511pt" xmlns="http://www.w3.org/2000/svg"><path d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"/><path d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"/><path d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"/></svg>`;

export const ICONS: { name: string; source: string }[] = [
  {
    name: 'gymIcon',
    source: gymIcon,
  },
  {
    name: 'fightIcon',
    source: fightIcon,
  },
  {
    name: 'womanIcon',
    source: womanIcon,
  },
  {
    name: 'shower',
    source: shower,
  },
  {
    name: 'airFlow',
    source: airFlow,
  },
  {
    name: 'coach',
    source: coach,
  },
];
