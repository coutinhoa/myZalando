from msilib import Table
from xmlrpc.client import Boolean
from sqlalchemy import Column, Boolean, Integer, String, ForeignKey, Float
from database import Base
from sqlalchemy.orm import relationship


# class Garment(Base):
#     __tablename__ = "garments"

#     id = Column(Integer, primary_key=True, index=True)
#     name = Column(String)
#     type = Column(String)
#     price = Column(Float)
#     colour = Column(String)
#     premiumdelivery = Column(Boolean)
#     identity = Column(String)
#     reviews = relationship("Rating", back_populates="garment")
#     pictures = relationship("Pictures", back_populates="garment")
#     sizes = relationship("GarmentSize", back_populates="garment")
       

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


# class Size(Base):
#     __tablename__ = "sizes"

#     id = Column (Integer, primary_key=True, index=True)
#     size = Column (String)
#     garments = relationship("GarmentSize", back_populates="size")

class GarmentSize(Base):
    __tablename__ = "garmentsizes"
    garment_id = Column(ForeignKey("garments.id"), primary_key=True)
    size_id = Column(ForeignKey("sizes.id"), primary_key=True)
    quantity = Column(Integer, nullable=False, default=1)
    size = relationship("Size")
    garment = relationship("Garment")


class Garment(Base):
    __tablename__ = "garments"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    type = Column(String)
    price = Column(Float)
    colour = Column(String)
    premiumdelivery = Column(Boolean)
    identity = Column(String)
    reviews = relationship("Rating", back_populates="garment")
    pictures = relationship("Pictures", back_populates="garment")
    sizes = relationship("Size", secondary="garmentsizes")

class Size(Base):
    __tablename__ = "sizes"
    id = Column(Integer, primary_key=True)
    size = Column (String)

# class GarmentSize(Base):
#     __tablename__ = "garmentsizes"

#     id = Column (Integer, primary_key=True, index=True)
#     garment_id = Column(Integer, ForeignKey("garments.id"))
#     size_id = Column(Integer, ForeignKey("sizes.id"))
#     quantity = Column(Integer, nullable=False, default=1)
#     garment = relationship("Garment", back_populates="sizes")
#     size = relationship("Size", back_populates="garments")
   



