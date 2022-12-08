import { IconObj } from '@olympia/core/icon';

// eslint-disable-next-line max-len
const homeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M11 39h7.5V26.5h11V39H37V19.5L24 9.75 11 19.5Zm-3 3V18L24 6l16 12v24H26.5V29.5h-5V42Zm16-17.65Z"/></svg>`;

// eslint-disable-next-line max-len
const photoIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h30q1.2 0 2.1.9.9.9.9 2.1v30q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V9H9v30Zm2.8-4.85h24.45l-7.35-9.8-6.6 8.55-4.65-6.35ZM9 39V9v30Z"/></svg>`;

// eslint-disable-next-line max-len
const priceIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M27.95 43.15q-.9.9-2.175.9t-2.175-.9L4.85 24.4q-.5-.5-.675-1.05Q4 22.8 4 22.2V7q0-1.3.85-2.15Q5.7 4 7 4h15.2q.6 0 1.2.175t1.1.675L43.15 23.5q.95.95.95 2.225 0 1.275-.95 2.225ZM25.9 41.1l15.2-15.2L22.2 7H7v15.2ZM12.25 14.8q1.05 0 1.825-.775.775-.775.775-1.825 0-1.05-.775-1.825Q13.3 9.6 12.25 9.6q-1.05 0-1.825.775-.775.775-.775 1.825 0 1.05.775 1.825.775.775 1.825.775ZM7 7Z"/></svg>`;

// eslint-disable-next-line max-len
const contactIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M38.8 23.65q-.25-6.05-4.45-10.25T24.1 8.95v-3q3.6.1 6.775 1.525Q34.05 8.9 36.45 11.3q2.4 2.4 3.825 5.575Q41.7 20.05 41.8 23.65Zm-8.45 0q-.25-2.5-2-4.225Q26.6 17.7 24.1 17.45v-3q3.75.25 6.375 2.85t2.875 6.35ZM39.75 42q-6.1 0-12.125-3T16.8 31.2Q12 26.4 9 20.375 6 14.35 6 8.25q0-.95.65-1.6Q7.3 6 8.25 6h7q.7 0 1.225.475.525.475.675 1.275l1.35 6.3q.1.7-.025 1.275t-.525.975l-5 5.05q2.8 4.65 6.275 8.1Q22.7 32.9 27.1 35.3l4.75-4.9q.5-.55 1.15-.775.65-.225 1.3-.075l5.95 1.3q.75.15 1.25.75T42 33v6.75q0 .95-.65 1.6-.65.65-1.6.65Zm-28.3-23.4 4.05-4.1L14.35 9H9q0 1.95.6 4.275t1.85 5.325ZM29.9 36.75q2.05.95 4.45 1.55 2.4.6 4.65.7v-5.35l-5.15-1.05ZM11.45 18.6ZM29.9 36.75Z"/></svg>`;

export const NAV_ICONS: IconObj[] = [
  {
    name: 'homeIcon',
    source: homeIcon,
  },
  {
    name: 'photoIcon',
    source: photoIcon,
  },
  {
    name: 'priceIcon',
    source: priceIcon,
  },
  {
    name: 'contactIcon',
    source: contactIcon,
  },
];
