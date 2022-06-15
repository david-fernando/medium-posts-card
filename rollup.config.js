import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import styles from "rollup-plugin-styles";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' }
    ],
    plugins: [
        external(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled' 
        }),
        del({ targets: ['dist/*'] }),
        styles({ 
            modules: true,
            mode: ['extract', 'style.css']
         })
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};