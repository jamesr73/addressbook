from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Organisation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    street1 = db.Column(db.String(120))
    street2 = db.Column(db.String(120))
    city = db.Column(db.String(80))
    postcode = db.Column(db.String(10))
    country = db.Column(db.String(80))
    email = db.Column(db.String(80))
    phone = db.Column(db.String(20))


class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(10))
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80))
    role = db.Column(db.String(80))
    email = db.Column(db.String(80), unique=True)
    phone = db.Column(db.String(20))
    mobile = db.Column(db.String(20))
    organisation_id = db.Column(
        db.Integer, db.ForeignKey('organisation.id'), nullable=False)
    organisation = db.relationship(
        Organisation,
        backref=db.backref('contacts', cascade='all, delete-orphan'))
