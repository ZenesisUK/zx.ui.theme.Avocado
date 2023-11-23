#!/bin/bash

DEPLOY_PK="$1"

mkdir tmp
ABSOLUTE_TMP=$(echo "$(cd "$(dirname "$tmp")"; pwd -P)/$(basename "tmp")")
echo "$DEPLOY_PK" > ./tmp/deploy-key
chmod 600 ./tmp/deploy-key

echo "arg 0: $0" 
echo "arg 1: $1" 
echo "deploy pk: $DEPLOY_PK" 
echo "Private key permissions: $(ls -l ./tmp/deploy-key)"
echo "Private key file contents: $(cat ./tmp/deploy-key)"

npm i

REPO_NAME="zx-ui-theme-avocado.github.io"

echo ">>> Cloning existing website..."
git config --global user.email "deployment@qooxdoo.org"
git config --global user.name "Automated Deployment for qooxdoo/qxl-datagrid.qooxdoo.github.io"
git clone -c core.sshCommand="/usr/bin/ssh -i $ABSOLUTE_TMP/deploy-key" git@github.com:zenesisuk/$REPO_NAME.git --depth=1 ./tmp/$REPO_NAME

echo
echo ">>> Building website..."
npx qx deploy --out=./tmp/$REPO_NAME

cd ./tmp/$REPO_NAME
if [ ! -e ./index.html ] ; then
    echo "index.html not found! Most likely due to failure of cloning the webpage repo."
    exit 1
fi

git add .
git commit -m 'automatic deployment from ZenesisUk/zx.ui.theme.avocado/.github/workflows/build-website.sh'
git push
