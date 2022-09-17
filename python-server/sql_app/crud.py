from sqlalchemy.orm import Session
import models, schemas


def get_garment(db: Session, garment_id: int):
    return db.query(models.Garment).filter(models.Garment.id == garment_id).first()


def get_garments(db: Session):
    return db.query(models.Garment).all()


def get_pictures(db: Session, garment_id: int):
    return db.query(models.Pictures).filter(models.Pictures.garment_id==garment_id).all()

def get_reviews(db: Session, garment_id: int):
    return db.query(models.Rating).filter(models.Rating.garment_id==garment_id).all()


def get_garment_sizes(db: Session, garment_id: int):
    return db.query(models.GarmentSize).filter(models.GarmentSize.garment_id==garment_id).all()

    

#post
def create_garment_rating(db: Session, rating: schemas.RatingCreate, garment_id: int):
    db_rating = models.Rating(**rating.dict(), garment_id=garment_id)
    db.add(db_rating)
    db.commit()
    db.refresh(db_rating)
    return db_rating

