from flask import Flask
from flask_migrate import Migrate

from config import app_config
from .model import db
from .api import init_api


def create_app(config_name):
    app = Flask(__package__, instance_relative_config=True)
    app.config.from_object(app_config[config_name])
    app.config.from_pyfile('%s.py' % config_name, silent=True)

    db.init_app(app)
    migrate = Migrate(app, db)

    with app.app_context():
        init_api(app, db)

    return app
