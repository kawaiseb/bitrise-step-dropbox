#!/bin/bash
set -ex

THIS_SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo "INFO : Installing NPM dependencies..."
npm install --prefix $THIS_SCRIPT_DIR dropbox-upload --save

echo "INFO : Launching step script to upload file on dropbox..."

$THIS_SCRIPT_DIR/dropbox.js "${dropbox_debug_mode}" "${dropbox_secret}" "${dropbox_local_path}" "${dropbox_remote_path}"