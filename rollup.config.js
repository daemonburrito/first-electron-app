import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';


export default [{
  input: 'src/main/main.js',
  output: {
    file: 'build/electron-app.js',
    format: 'cjs'
  },
  plugins: [
    globals(),
    builtins()
  ],
  external: ['electron'],
  sourcemap: 'inline'
}, {
  name: 'reactApp',
  input: 'src/app/app.js',
  output: {
    file: 'build/react-app.js',
    format: 'umd'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: [
        ['es2015', {
          modules: false
        }],
        'stage-0',
        'react'
      ],
      plugins: [
        'external-helpers'
      ]
    }),
    commonjs({
      // include: ['node_modules/**'],
      include: [
        'node_modules/create-react-class/**',
        'node_modules/fbjs/**',
        'node_modules/object-assign/**',
        'node_modules/react/**',
        'node_modules/react-dom/**',
        'node_modules/prop-types/**'
      ],
      // namedExports: {
      //   'react-dom': ['render']
      // }
    }),
    globals(),
    nodeResolve({
      module: true,
      // jsnext: true,
      // main: true
    })
  ],
  sourcemap: 'inline'
}];
