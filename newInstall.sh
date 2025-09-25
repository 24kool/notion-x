#!/bin/bash
# install-safe-versions.sh

echo "🛡️ 안전한 버전 설치 시작..."

# package.json에 overrides 추가
cat > temp-overrides.json << 'EOF'
{
  "overrides": {
    "debug": "4.3.4",
    "chalk": "4.1.2",
    "ansi-styles": "4.3.0",
    "strip-ansi": "6.0.1",
    "ansi-regex": "5.0.1",
    "wrap-ansi": "7.0.0",
    "color-convert": "2.0.1",
    "supports-color": "7.2.0",
    "error-ex": "1.3.2",
    "color-name": "1.1.4",
    "is-arrayish": "0.3.2",
    "slice-ansi": "4.0.0",
    "chalk-template": "0.4.0",
    "supports-hyperlinks": "2.3.0",
    "has-ansi": "4.0.1",
    "simple-swizzle": "0.2.2",
    "color-string": "1.9.1",
    "backslash": "0.2.0"
  }
}
EOF

# package.json 업데이트
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const overrides = JSON.parse(fs.readFileSync('temp-overrides.json', 'utf8')).overrides;
pkg.overrides = {...(pkg.overrides || {}), ...overrides};
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
console.log('✅ package.json updated with safe versions');
"

rm temp-overrides.json

# 안전한 버전으로 재설치
npm install

# 검증
npm audit
npm ls debug chalk ansi-styles

echo "✅ 안전한 버전 설치 완료"