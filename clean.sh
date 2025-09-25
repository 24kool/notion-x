#!/bin/bash
# remove-compromised.sh - 이 스크립트를 저장하고 실행

echo "🔥 악성 패키지 긴급 제거 시작..."

# 캐시 완전 삭제
npm cache clean --force
yarn cache clean 2>/dev/null
pnpm store prune 2>/dev/null

# 악성 버전 강제 제거
MALICIOUS_PACKAGES=(
  "debug@4.4.2"
  "chalk@5.6.1"
  "ansi-styles@6.2.2"
  "strip-ansi@7.1.1"
  "ansi-regex@6.2.1"
  "wrap-ansi@9.0.1"
  "color-convert@3.1.1"
  "supports-color@10.2.1"
  "error-ex@1.3.3"
  "color-name@2.0.1"
  "is-arrayish@0.3.3"
  "slice-ansi@7.1.1"
  "chalk-template@1.1.1"
  "supports-hyperlinks@4.1.1"
  "has-ansi@6.0.1"
  "simple-swizzle@0.2.3"
  "color-string@2.1.1"
  "backslash@0.2.1"
)

for pkg in "${MALICIOUS_PACKAGES[@]}"; do
  echo "제거 중: $pkg"
  npm uninstall "$pkg" 2>/dev/null
done

# node_modules 완전 제거
rm -rf node_modules
rm -f package-lock.json yarn.lock pnpm-lock.yaml

echo "✅ 악성 패키지 제거 완료"