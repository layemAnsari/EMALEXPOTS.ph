#!/usr/bin/env bash
# Exit immediately if a command exits with a non-zero status
set -o errexit

# 1. Install all dependencies from your file
pip install -r requirements.txt

# 2. Collect static files (optional but highly recommended for Django)
# python manage.py collectstatic --noinput

# 3. Swap the string out to Session mode and run your migrations
# python manage.py makemigrations --noinput
python manage.py migrate --noinput

# export DATABASE_URL="$DIRECT_URL"