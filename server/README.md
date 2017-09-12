# Address Book - Server

The server provides a JSON Web API to interact with the Address Book data.

It is written in Python (3.6.0) using Flask with SQLAlchemy, Migrate & Restless extensions.

Install the dependencies:

```python
pip install -r requirements/install.txt
```

The server supports 3 alternative configurations:

```
production
development
test
```

You can see the default configuration for each in:

```
config.py
```

To further customise the configuration you can provide additional details in:

```
instance/production.py
instance/development.py
instance/test.py
```

In particular, you can provide the ```SQLALCHEMY_DATABASE_URI``` for a specific database.

By default the server will run with the ```development``` configuration using an ```SQLite``` DB stored at ```/tmp/addressbook.db```

To change which configuration is used set the ```FLASK_CONFIG``` environment variable:

```
export FLASK_CONFIG=production
```

Once the database configuration options are set the database is created with Flask Migrate:

```
export FLASK_APP=run.py
flask db updgrade
```

To run the server:

```python
export FLASK_APP=run.py
export FLASK_DEBUG=1            # optional
export FLASK_CONFIG=development # default
flask run
```

The development server provides 2 JSON Api endpoints:

```
http://localhost:5000/api/organisations
http://localhost:5000/api/contacts
```

The development server for the client will proxy requests to the Api server such that CORS headers do not need to be configured