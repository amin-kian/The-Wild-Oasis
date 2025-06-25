// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import eslint from 'vite-plugin-eslint';
//
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     // eslint()
//   ],
// });

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import autoImport from 'unplugin-auto-import/vite';

export default defineConfig({
    plugins: [
        react(),
        autoImport({
            imports: [
                {
                    'date-fns/esm': [
                        'formatDistance',
                        'parseISO',
                        'differenceInDays'
                    ],
                },
            ],
            dts: true, // optional: auto-generates a .d.ts file for TypeScript support
        }),
    ],
});