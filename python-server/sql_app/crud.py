from sqlalchemy.orm import Session
import models, schemas


def get_garment(db: Session, garment_id: int):
    return db.query(models.Garment).filter(models.Garment.id == garment_id).first()


def get_garments(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Garment).offset(skip).limit(limit).all()


def get_pictures(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Pictures).offset(skip).limit(limit).all()

def get_reviews(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Rating).offset(skip).limit(limit).all()


def create_garment_rating(db: Session, rating: schemas.RatingCreate, garment_id: int):
    db_rating = models.Rating(**rating.dict(), owner_id=garment_id)
    db.add(db_rating)
    db.commit()
    db.refresh(db_rating)
    return db_rating
