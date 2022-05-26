import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import replace from '@rollup/plugin-replace';
import { babel } from '@rollup/plugin-babel';
import autoprefixer from 'autoprefixer';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss'

import packageJson from './package.json';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: 'umd',
                name: packageJson.name.split("/")[1].replace('-', '_'),
                sourcemap: true
            }
        ],
        plugins: [
            external({
                includeDependencies: true
            }),
            resolve({
                jsnext: true,
                main: true,
                browser: true
            }),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss([autoprefixer()]),
            babel({
                exclude: "node_modules/**",
                presets: ["@babel/preset-react", "@babel/preset-typescript"]
            }),
            replace({
                exclude: 'node_modules/**',
                'process.env.NODE_ENV': JSON.stringify('production'),
                'process.env.REACT_APP_npm_package_version': JSON.stringify(packageJson.version),
                preventAssignment: true
            }),
            terser()
        ],
        external: [
            "react",
            "react-dom"
        ]
    },
    {
        input: 'dist/umd/types/src/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        external: [/\.css$/],
        plugins: [dts()]
    }
]