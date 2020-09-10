import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'

import pkg from './package.json'
import scss from 'rollup-plugin-scss'

export default {
    input: 'src/main.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: true
        }
    ],
    plugins: [
        scss({
            modules: true
        }),
        external(),
        resolve(),
        typescript({
            rollupCommonJSResolveHack: true,
            exclude: [
                '**/__tests__/**'
            ],
            clean: true
        }),
        commonjs({
            include: ['node_modules/**'],
            namedExports: {
                'node_modules/react/index.js': [
                    'cloneElement',
                    'Component',
                    'createContext',
                    'createElement',
                    'createRef',
                    'forwardRef',
                    'Fragment',
                    'isValidElement',
                    'lazy',
                    'memo',
                    'Profiler',
                    'PureComponent',
                    'StrictMode',
                    'Suspense',
                    'useCallback',
                    'useContext',
                    'useDebugValue',
                    'useEffect',
                    'useImperativeHandle',
                    'useLayoutEffect',
                    'useMemo',
                    'useReducer',
                    'useRef',
                    'useState',
                    'version',
                ],
                'node_modules/react-dom/index.js': [
                    'findDOMNode',
                    'render',
                    'unmountComponentAtNode',
                ]
            }
        })
    ]
}