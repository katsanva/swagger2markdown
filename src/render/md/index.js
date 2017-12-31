'use strict';

export const getFilledArray = (length, content) => Array(length).fill(content);

export const pre = i => `\`${i}\``;

export const link = (name, link) => `[${name}](${(link || name)})`;

export const italics = string => `_${string}_`;

export const bold = string => `**${string}**`;

export const tr = (...args) => args.join('|');

export const th = (...args) => [
  tr(...args),
  tr(...getFilledArray(args.length, '---'))
];

export const escape = (string = '') => string.replace(/\r\n/gi, ' ').replace(/\n\n/gi, ' ');

export const table = (header, rows) => header.concat(rows).join('\n');

export const code = (data, type = 'application/json') => [
  `\`\`\`${type.replace(/ /gi, '_')}`,
  JSON.stringify(data, null, 2),
  `\`\`\``
].join('\n');

export const li = string => `* ${string}`;

export const heading = (level = 1, string) => {
  const header = getFilledArray(level, '#').join('');

  return `${header} ${string}`
};