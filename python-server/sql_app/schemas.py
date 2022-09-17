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
    url : str


class PicturesCreate(PicturesBase):
    pass


class Pictures(PicturesBase):
    id: int
    garment_id: int

    class Config:
        orm_mode = True


#garment_size
class GarmentSizeBase(BaseModel):
    quantity : int


class GarmentSizeCreate(GarmentSizeBase):
    pass


class GarmentSize(GarmentSizeBase):
    id: int
    garment_id: int
    size_id: int

    class Config:
        orm_mode = True

#sizes
class SizeBase(BaseModel):
    size : str


class SizeCreate(SizeBase):
    pass


class Size(SizeBase):
    id: int
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


class GarmentCreate(GarmentBase):
    pass

#class GarmentDetails(GarmentBase):
 #   reviews: list[Rating]=[]

class Garment(GarmentBase):
    id: int
    reviews: list[Rating]=[]
    pictures: list[Pictures]=[]
    sizes: list[Size]=[]

    class Config:
        orm_mode = True
