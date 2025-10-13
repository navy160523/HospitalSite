import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Set `base` so production build references the correct asset paths.
// - For GitHub Pages (repo pages) set to `'/<repo-name>/'` e.g. '/HospitalSite/'
// - For relative deploys (Netlify, surge, or GitHub Pages using `./`) use './'
// Change the value below to match your deployment target.
export default defineConfig({
	base: '/HospitalSite/',
	plugins: [vue()],
})

