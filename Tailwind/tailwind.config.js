/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.html",
];
export const theme = {
  extend: {
    colors: {
      'primario': 'white',
      'Light red': 'hsl(0, 100%, 67%)',
      'Orangey yellow': 'hsl(39, 100%, 56%)',
      'Green teal': 'hsl(166, 100%, 37%)',
      'Cobalt blue': 'hsl(234, 85%, 45%)',

      'Light-slate-blue': 'hsl(252, 100%, 67%)',
      'Light-royal-blue': 'hsl(241, 81%, 54%)',
      'Violet-blue': 'hsla(256, 72%, 46%, 1)',
      'Persian-blue': 'hsla(241, 72%, 46%, 0)'
    }
    
  },
  
};
export const plugins = [];

