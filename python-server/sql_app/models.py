from datetime import datetime
from multiprocessing.dummy import Array
import string
from xmlrpc.client import Boolean
from sqlalchemy import Column, Boolean, Integer, String, ForeignKey, Float, ARRAY
from database import Base
from sqlalchemy.orm import relationship

class Garment(Base):
    __tablename__ = "garments"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    type = Column(String)
    price = Column(Float)
    colour = Column(String)
    premiumdelivery = Column(Boolean)
    identity = Column(String)
    sizes = Column(ARRAY(String))
    reviews = relationship("Rating", back_populates="garment")
    pictures = relationship("Pictures", back_populates="garment")

class Rating(Base):
    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True, index=True)
    rating = Column(Integer)
    description = Column(String)
    date = Column(String)
    garment_id = Column(Integer, ForeignKey("garments.id"))
    garment = relationship("Garment", back_populates="reviews")

class Pictures(Base):
    __tablename__ = "pictures"

    id = Column(Integer, primary_key=True, index=True)
    url = Column(String)
    garment_id = Column(Integer, ForeignKey("garments.id"))
    garment = relationship("Garment", back_populates="pictures")
