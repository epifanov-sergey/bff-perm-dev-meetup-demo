module.exports = {
  sourceMaps: true,
  presets: [
    [
      require('@babel/preset-env').default,
      {
        corejs: 3,
        useBuiltIns: 'entry',
        shippedProposals: true,
      },
    ],
    [require('@babel/preset-react').default, {}],
    [require('@babel/preset-typescript').default, {}],
  ],
  plugins: [
    require.resolve('@babel/plugin-proposal-class-properties'),
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.tsx', '.ts'],
        alias: {
          $types: './client/types',
        },
      },
    ],
  ],
};
