#!/bin/bash
set -e

SITE_DIR="/var/www/siteolsenrodrigo"
APP_NAME="siteolsenrodrigo"
PORT=3030
PM2_USER="claude-user"
PM2_HOME_DIR="/home/$PM2_USER"

if [ "$(id -u)" -ne 0 ]; then
  echo ">>> ERRO: execute como root (use sudo)."
  exit 1
fi

pm2_prod() {
  sudo -u "$PM2_USER" env HOME="$PM2_HOME_DIR" PORT="$PORT" pm2 "$@"
}

echo ">>> Atualizando $APP_NAME..."

cd "$SITE_DIR"

git config --global --add safe.directory "$SITE_DIR"

STASHED=false
if ! git diff --quiet 2>/dev/null; then
  git stash
  STASHED=true
  echo ">>> Mudanças locais salvas via stash"
fi

git pull

if [ "$STASHED" = true ]; then
  git stash pop || echo ">>> AVISO: conflito ao reaplicar mudanças locais. Verifique manualmente."
fi

npm install --silent
npm run build

pm2 delete "$APP_NAME" 2>/dev/null || true
pm2 save --force 2>/dev/null || true

if pm2_prod describe "$APP_NAME" >/dev/null 2>&1; then
  echo ">>> Reiniciando $APP_NAME no pm2 de $PM2_USER..."
  pm2_prod restart "$APP_NAME" --update-env
else
  echo ">>> Criando entrada $APP_NAME no pm2 de $PM2_USER..."
  pm2_prod start npm --name "$APP_NAME" -- start
fi
pm2_prod save

echo ">>> $APP_NAME atualizado com sucesso!"
