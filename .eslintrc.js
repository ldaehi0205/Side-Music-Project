module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks', 'react', 'import'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'no-use-before-define': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    'react/jsx-filename-extension': [1, { extensions: ['js', 'jsx', 'ts', 'tsx'] }],
    // 확장자로 js,jsx,ts,tsx 둘다 허용하도록 수정
    'arrow-parens': ['off', 'as-needed'],
    // 화살표 함수의 파라미터가 하나일때 괄호 생략, X
    'no-unused-vars': [
      'warn',
      {
        args: 'none',
      },
    ],
    // 사용하지 않는 변수가 있을때 빌드에러가 나던 규칙 해제
    'no-console': ['error'],
    // 콘솔을 쓰면 에러가 나던 규칙 해제
    'import/prefer-default-export': ['off'],
    // export const 문을 쓸때 에러를 내는 규칙 해제
    'react-hooks/exhaustive-deps': ['off'],
    // hooks의 의존성배열이 충분하지 않을때 강제로 의존성을 추가하는 규칙을 해제 => componentDidmount 의존성 배열 에러
    'react/jsx-props-no-spreading': ['off'],
    // props spreading을 허용하지 않는 규칙 해제
    'react/prop-types': ['off'],
    // props의 타입체크를 처리하려면 prop-types보단 차라리 typescript를 사용하는게 낫다.
    'no-underscore-dangle': ['warn'],
    // camelCase가 아닌경우 warn
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'object-shorthand': ['error', 'always'],
    // 확장자 누락 에러 무시
    'no-unused-expressions': 'off',
    // 사용하지 않는 표현(?, &&)를 쓰지못하게하는 옵션 해제 (if문을 강제하는 옵션)
    'no-nested-ternary': 'off',
    // 중첨 삼항 연산자 허용
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    // 단항 연산자 허용 ex) i++, i--
    'no-param-reassign': 0,
    // 'useRef에 재할당 없을'을 해제
    'react-hooks/rules-of-hooks': 'off', // added “react-hooks/rules-of-hooks”
    // 'react-hooks/exhaustive-deps': ['off'], // added “react-hooks/exhaustive-deps”,
    'array-callback-return': 'off',
    // 콜백함수에 return이 강제되어야하는 옵션 해제
    'react/require-default-props': 'off',
    // props를 optional로 넘기면 undefined, null이 기본으로 설정되기때문에 발생한 오류를 해제
    'consistent-return': 'off',
    // 분기에 따라 함수가 다른 동작을 갖도록 허용
    'no-else-return': 'off',
    // if문에서 else 이전 return 금지 해제
    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
    // 외부 패키지 사용 금지 해제
  },
  settings: {
    react: {
      version: 'detect', // eslint-plugin-react가 자동 리액트버전탐지
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  globals: {
    React: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    JSX: true,
  },
};
