#!/usr/bin/env bash
jspm install redux-devtools=github:gaearon/redux-devtools@next \
  -o "{main:'src/index',dependencies:{'lodash':'^3.10.1','react-redux':'^4.0.0','redux':'^3.0.0','react':'^0.14.0','react-addons-test-utils':'npm:react-addons-test-utils@^0.14.0','react-dom':'npm:react-dom@^0.14.0'} } "
jspm install redux-devtools-gentest-plugin=github:lapanoid/redux-devtools-gentest-plugin@next \
  -o "{main:'src/index',dependencies:{'redux':'^3.0.0','react-redux':'^4.0.0','jquery':'2.1.4','ramda':'^0.18.0','react-pure-render':'npm:react-pure-render@^1.0.2','react-zeroclipboard':'npm:react-zeroclipboard@^3.0.0'} } "
