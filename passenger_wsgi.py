import os
import sys

sys.path.insert(0, "/home/biochemu/biochem.update.uz/repositories/bki")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "bki.settings")

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
