# run python uvicorn sql_app.main:app --reload

from calendar import c
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
import crud, models, schemas
from database import SessionLocal, engine
from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# get 
@app.get("/api/garments/", response_model=list[schemas.Garment])
def read_garments( db: Session = Depends(get_db)):
    garments = crud.get_garments(db)
    return garments


@app.get("/api/garments/{garment_id}", response_model=schemas.Garment)
def read_garment(garment_id: int, db: Session = Depends(get_db)):
    db_garment = crud.get_garment(db, garment_id=garment_id)
    if db_garment is None:
        raise HTTPException(status_code=404, detail="Garment not found")
    return db_garment


@app.get("/api/garments/{garment_id}/reviews", response_model=list[schemas.Rating])
def read_ratings(garment_id: int, db: Session = Depends(get_db)):
    print(garment_id)
    return crud.get_reviews(db, garment_id=garment_id)


@app.get("/api/garments/{garment_id}/pictures", response_model= list[schemas.Pictures])
def read_pictures(garment_id: int, db: Session = Depends(get_db)):
    return crud.get_pictures(db, garment_id=garment_id)
    


@app.get("/api/garments/{garment_id}/garmentsizes", response_model=list[schemas.GarmentSize])
def read_garment_sizes(garment_id: int, db: Session = Depends(get_db)):
    return crud.get_garment_sizes(db, garment_id=garment_id)   



#post review
@app.post("/api/garments/{garment_id}/reviews")
def create_rating_for_garment(garment_id: int, rating: schemas.RatingCreate, db: Session = Depends(get_db)):
    return crud.create_garment_rating(db=db, rating=rating, garment_id=garment_id)

