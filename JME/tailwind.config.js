module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}", // Include all source files
    "./public/index.html", // Include HTML if applicable
  ],
  theme: {
    extend: {},
    screens: {
			sm: '640px', 
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px', 
		  },
  },
  plugins: [],
};
