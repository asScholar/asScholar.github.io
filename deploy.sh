#!/usr/bin/env sh

# ȷ���ű��׳������Ĵ���
set -e

# ���ɾ�̬�ļ�
npm run docs:build

# �������ɵ��ļ���
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# ��������� https://<USERNAME>.github.io  ��д��ոմ����Ĳֿ��ַ
git push -f https://github.com/asScholar/asScholar.github.io.git master

cd -