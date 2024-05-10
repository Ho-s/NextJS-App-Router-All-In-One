import { exec } from 'child_process';
import fs from 'fs';
import ora from 'ora';
import util from 'util';

const prettify = async () => {
  const spinner = ora('🚀  Code formatting...It will take about 10seconds').start();
  const promisedExec = util.promisify(exec);
  await promisedExec('yarn pretty');
  spinner.succeed('🎉  Done!');
};

const pascalCasify = param => `{{pascalCase ${param}}}`;
const toCamelCase = str => str.replace(/(\/\w)/g, k => k[1].toUpperCase());

const ASSET_TYPE = 'assetType';

const PAGE = 'page';
const PAGE_TYPE = 'pageType';
const PAGE_PATH = 'pagePath';

const COMPONENT = 'component';
const COMPONENT_NAME = 'componentName';
const COMPONENT_TYPE = 'componentType';

const API = 'api';

const TEST_EXIST = 'testExist';

const RENDERING_TYPE = 'renderingType';

const __dirname = new URL('../', import.meta.url).pathname;
const rootPath = __dirname + 'src';

const pageActions = data => {
  const pagePathInput = String(data[PAGE_PATH].replace(/\.tsx?/, '')).toLowerCase();

  const pagePath = `${rootPath + '/app'}/${pagePathInput}`;

  const name = toCamelCase(pagePathInput);

  const styledPath = pagePath + '/styled.ts';
  const styledExist = fs.existsSync(styledPath);

  return [
    {
      type: 'add',
      path: pagePath + `/${data[PAGE_TYPE]}.tsx`,
      templateFile: 'templates/page/page.hbs',
      data: {
        name,
      },
    },
    ...[
      styledExist
        ? {
            type: 'append',
            path: styledPath,
            pattern: /[;]/,
            separator: '\n',
            templateFile: 'templates/page/styled-append.hbs',
            data: {
              name,
            },
          }
        : {
            type: 'add',
            path: styledPath,
            templateFile: 'templates/page/styled.hbs',
            data: {
              name,
            },
          },
    ],
  ];
};

const componentActions = data => [
  {
    type: 'add',
    path: `${rootPath}/components/{{${COMPONENT_TYPE}}}/${pascalCasify(COMPONENT_NAME)}/${pascalCasify(COMPONENT_NAME)}.tsx`,
    templateFile: 'templates/component/component.hbs',
  },
  {
    type: 'add',
    path: `${rootPath}/components/{{${COMPONENT_TYPE}}}/${pascalCasify(COMPONENT_NAME)}/index.ts`,
    templateFile: 'templates/component/index.hbs',
  },
  {
    type: 'add',
    path: `${rootPath}/components/{{${COMPONENT_TYPE}}}/${pascalCasify(COMPONENT_NAME)}/styled.ts`,
    templateFile: 'templates/component/styled.hbs',
  },
  {
    type: 'add',
    path: `${rootPath}/components/{{${COMPONENT_TYPE}}}/${pascalCasify(COMPONENT_NAME)}/${pascalCasify(COMPONENT_NAME)}.stories.ts`,
    templateFile: 'templates/component/stories.hbs',
    ...(!data[TEST_EXIST] && {
      skip: () => 'skipped',
    }),
  },
  {
    type: 'add',
    path: `${rootPath}/components/{{${COMPONENT_TYPE}}}/${pascalCasify(COMPONENT_NAME)}/${pascalCasify(COMPONENT_NAME)}.test.tsx`,
    templateFile: 'templates/component/test.hbs',
    ...(!data[TEST_EXIST] && {
      skip: () => 'skipped',
    }),
  },
];

export default function generator(plop) {
  plop.addHelper('is', (v1, v2) => v1 === v2);
  plop.addHelper('notIs', (v1, v2) => v1 !== v2);
  plop.setGenerator('react-asset-generator', {
    description: 'Adds a new react assets',
    prompts: [
      {
        type: 'list',
        name: ASSET_TYPE,
        message: 'Asset type',
        choices: [PAGE, COMPONENT, API],
      },
      {
        type: 'list',
        name: COMPONENT_TYPE,
        when: answer => answer[ASSET_TYPE] === COMPONENT,
        message: 'Component type',
        choices: ['atoms', 'molecules', 'organisms', 'templates'],
      },
      {
        type: 'input',
        name: COMPONENT_NAME,
        message: 'Component name',
        when: answer => answer[ASSET_TYPE] === COMPONENT,
        validate: input => {
          return String(input).trim().length > 0 || `🚫 name is required`;
        },
      },
      {
        type: 'list',
        name: PAGE_TYPE,
        message: 'Page type',
        when: answer => answer[ASSET_TYPE] === PAGE,
        choices: ['page', 'layout', 'template'],
      },
      {
        type: 'input',
        name: PAGE_PATH,
        message: data => `Page path (ex:sign/in = sign/in/${data[PAGE_TYPE]}.tsx)`,
        when: answer => answer[ASSET_TYPE] === PAGE,
        validate: input => {
          return String(input).trim().length > 0 || `🚫 path is required`;
        },
      },
      {
        type: 'list',
        name: RENDERING_TYPE,
        message: 'Rendering type',
        choices: ['SSR(Server-Side-Rendering)', 'CSR(Client-Side-Rendering)'],
      },
      {
        type: 'confirm',
        name: TEST_EXIST,
        message: 'Do you want to create a test codes(with jest)?',
        default: false,
      },
    ],
    actions: data => [
      ...(data[ASSET_TYPE] === COMPONENT ? componentActions(data) : pageActions(data)),
      () => prettify(),
    ],
  });
}