// This enables Jest to parse:

// JSX (<Component />)

// TSX (.tsx)

// ES modules

// React components 
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { targets: { node: 'current' } }
    ],
    [
      '@babel/preset-react',
      { runtime: 'automatic' }
    ],
    '@babel/preset-typescript',
  ],
};
