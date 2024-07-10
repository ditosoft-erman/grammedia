/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xxxs: "280px",
				xxs: "320px",
				xs: "375px",
				sm: "425px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1440px",
				"3xl": "1920px",
			},
			color: {
				main: "#f4f3ef",
				semi: "#cb594c",
			},
			borderColor: {
				main: "#f4f3ef",
				semi: "#cb594c",
			},
			textColor: {
				main: "#f4f3ef",
				semi: "#cb594c",
			},
			backgroundColor: {
				main: "#f4f3ef",
				secondary: "#cb594c",
			},
			fontFamily: {
				span: ["Fugaz One", "sans-serif"],
				title: ["Kanit", "sans-serif"],
				head: ["Archivo Black", "sans-serif"],
				sub: ["Gabarito", "sans-serif"],
				text: ["Poppins", "sans-serif"],
				email: ["Playball", "serif"],
				inter: ['Inter', 'sans-serif'],
			},
			backgroundImage: {
				'fine': "url('/src/assets/fine-works.png')",
        'sculpting': "url('/src/assets/gif/continuity.gif')",
        'viral-editing': "url('/src/assets/gif/editing.gif')",
        'specific': "url('/src/assets/gif/specific.gif')",
        'partnership': "url('/src/assets/gif/partnership.gif')",
			}
		},
	},
	plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1px black',
        },
        '.text-stroke-0': {
          '-webkit-text-stroke-width': '0',
        },
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '0.2px',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
        },
		'.text-stroke-gram': {
			'-webkit-text-stroke-color': '#00FFF0',
		},
   
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
