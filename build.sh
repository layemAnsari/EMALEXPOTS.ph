#!/usr/bin/env bash
# Exit immediately if a command exits with a non-zero status
set -o errexit

# 1. Swap connection strings for the build phase (Crucial for Supabase)
if [ -n "$DIRECT_URL" ]; then
    export DATABASE_URL="$DIRECT_URL"
fi

# 2. Install all dependencies from your file
pip install -r requirements.txt

# 3. Collect static files into the missing directory
# python manage.py collectstatic --noinput

# 4. Run your migrations safely into Supabase
python manage.py migrate --noinput
