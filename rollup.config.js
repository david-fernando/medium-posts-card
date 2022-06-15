import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import css from "rollup-plugin-import-css";
import postcss from 'rollup-plugin-postcss'
import postcssModules from 'postcss-modules';

const cssExportMap = {};

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
        postcss({
            plugins: [
                postcssModules({
                    getJSON (id, exportTokens) {
                      cssExportMap[id] = exportTokens;
                    }
                })
            ],
            getExportNamed: false,
            getExport (id) {
              return cssExportMap[id];
            },
            extract: false
        }),
        css()
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};