/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        'custom': 'calc(100vh - 4rem - 2.75rem)', // Calculate the custom maximum height
      },
      minHeight: {
        'custom': 'calc(100vh - 4rem - 2.75rem)', // Calculate the custom maximum height
      },
      fontSize:{
        'textsm' : '1rem',
        'subheadingsm' : '1.25rem',
        'headingsm' : '1.5rem',
        'textlg' : '1.25rem',
        'subheadinglg' : '1.5rem',
        'headinglg' : '1.875rem',
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
    },
  },
  plugins: [],
}

