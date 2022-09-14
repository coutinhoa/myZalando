from pydantic import BaseModel
from typing import Optional

#reviews
class RatingBase(BaseModel):
    rating : int
    description : str
    date : str


class RatingCreate(RatingBase):
    pass


class Rating(RatingBase):
    id: int
    garment_id: int

    class Config:
        orm_mode = True


#pictures
class PicturesBase(BaseModel):
    id: int
    url : str


class PicturesCreate(PicturesBase):
    pass


class Pictures(PicturesBase):
    id: int
    garment_id: int

    class Config:
        orm_mode = True


#garments
class GarmentBase(BaseModel):
    id: int
    name : str
    type : str
    price : int
    colour : str
    premiumdelivery : str
    identity : str
    sizes : list[str]


class GarmentCreate(GarmentBase):
    pass

#class GarmentDetails(GarmentBase):
 #   reviews: list[Rating]=[]

class Garment(GarmentBase):
    id: int
    reviews: list[Rating]=[]
    pictures: list[Pictures]=[]

    class Config:
        orm_mode = True


