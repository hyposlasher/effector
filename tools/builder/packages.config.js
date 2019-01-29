//@flow

const common = {
  author: 'Zero Bias',
  maintainers: [
    {
      name: 'Zero Bias',
      email: 'ribkatt@gmail.com',
    },
    {
      name: 'goodmind',
      email: 'andwebar@gmail.com',
    },
  ],
  sideEffects: false,
  license: 'MIT',
  devDependencies: {},
  scripts: {},
  repository: 'https://github.com/zerobias/effector',
  bugs: 'https://github.com/zerobias/effector/issues',
  homepage: 'https://zerobias.github.io/effector',
  engines: {
    node: '>=6.0.0',
  },
}

const version = {
  effector: '0.18.2',
  'effector-react': '0.18.2',
  'effector-vue': '0.18.2',

  'bs-effector': '0.18.2',
  'bs-effector-react': '0.18.2',
}

const getFiles = name => [
  'README.md',
  'LICENSE',
  'index.d.ts',
  'index.js.flow',
  //js files
  `${name}.es.js`,
  `${name}.cjs.js`,
  `${name}.umd.js`,
  //mappings
  `${name}.es.js.map`,
  `${name}.cjs.js.map`,
  `${name}.umd.js.map`,
  //typings
  `${name}.cjs.js.flow`,
  `${name}.es.js.flow`,
  `${name}.umd.js.flow`,
]

const dependsOnEffector = {
  effector: `^${version.effector}`,
}

export default {
  effector: {
    name: 'effector',
    version: version['effector'],
    description: 'Application state manager',
    main: 'effector.cjs.js',
    module: 'effector.es.js',
    'umd:main': 'effector.umd.js',
    'jsnext:main': 'effector.es.js',
    typings: 'index.d.ts',
    dependencies: {
      'symbol-observable': '^1.2.0',
    },
    files: getFiles('effector'),
    keywords: [
      'data',
      'datastructure',
      'functional',
      'collection',
      'state',
      'store',
      'reactive',
      'streams',
      'actions',
      'effects',
      'redux',
    ],
    ...common,
  },
  'effector-react': {
    name: 'effector-react',
    version: version['effector-react'],
    description: 'React bindings for effector',
    main: 'effector-react.cjs.js',
    module: 'effector-react.es.js',
    'umd:main': 'effector-react.umd.js',
    'jsnext:main': 'effector-react.es.js',
    typings: 'index.d.ts',
    dependencies: dependsOnEffector,
    peerDependencies: {
      react: '*',
    },
    files: getFiles('effector-react'),
    keywords: [
      'data',
      'datastructure',
      'functional',
      'collection',
      'state',
      'store',
      'reactive',
      'streams',
      'actions',
      'effects',
      'redux',
      'react',
    ],
    ...common,
  },
  'effector-vue': {
    name: 'effector-vue',
    version: version['effector-vue'],
    description: 'Vue bindings for effector',
    main: 'effector-vue.cjs.js',
    module: 'effector-vue.es.js',
    'umd:main': 'effector-vue.umd.js',
    'jsnext:main': 'effector-vue.es.js',
    typings: 'index.d.ts',
    dependencies: dependsOnEffector,
    peerDependencies: {
      vue: '*',
    },
    files: getFiles('effector-vue'),
    keywords: [
      'data',
      'datastructure',
      'functional',
      'collection',
      'state',
      'store',
      'reactive',
      'streams',
      'actions',
      'effects',
      'redux',
      'vue',
    ],
    ...common,
  },
  'bs-effector': {
    name: 'bs-effector',
    version: version['bs-effector'],
    description: 'Reason bindings for effector',
    dependencies: {},
    peerDependencies: dependsOnEffector,
    files: ['src/Effector.re', 'bsconfig.json', 'LICENSE', 'README.md'],
    keywords: [
      'bucklescript',
      'reason',
      'bsb',
      'data',
      'datastructure',
      'functional',
      'collection',
      'state',
      'store',
      'reactive',
      'streams',
      'actions',
      'effects',
      'redux',
    ],
    ...common,
  },
  'bs-effector-react': {
    name: 'bs-effector-react',
    version: version['bs-effector-react'],
    description: 'Reason bindings for effector-react',
    dependencies: dependsOnEffector,
    peerDependencies: {
      'reason-react': '*',
    },
    files: ['src/EffectorReact.re', 'bsconfig.json', 'LICENSE', 'README.md'],
    keywords: [
      'bucklescript',
      'reason',
      'bsb',
      'data',
      'datastructure',
      'functional',
      'collection',
      'state',
      'store',
      'reactive',
      'streams',
      'actions',
      'effects',
      'redux',
      'react',
    ],
    ...common,
  },
}
