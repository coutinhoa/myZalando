import React from "react";
import { Link } from "react-router-dom";
import "./Rating.css";
import zalando from "../../images/Zalando.png";

export const Rating = ({
  item,
  renderStars,
  getAverageRating,
  ratingWidth,
  value,
}) => {
  return (
    <div>
      <div className="item-ratings-body">
        <div className="images-container">
          <div>
            {/*the feature of changing images is only available for item 1 and 2 */}
            <div>
              <img src={item.picture} className="small-photo" alt="item" />
            </div>
            <div>
              <img src={item.picture} className="small-photo" alt="item" />
            </div>
            <div>
              <img src={item.picture} className="small-photo" alt="item" />
            </div>
          </div>
          <div className="image-container">
            <img src={item.picture} className="item-photo" alt="item" />
          </div>
        </div>

        <div className="body-container">
          <div className="item-infos-container">
            <div className="detailed-infos">
              {item.name} {item.type} - {item.color}
            </div>
            <div className="price-container">{item.price.toFixed(2)}$</div>
            <div className="plus">
              {item.premiumDelivery ? (
                <>
                  <span className="plus-logo">PLUS</span>
                  <span>Premium-Lieferung</span>
                </>
              ) : null}
            </div>
            <div className="stars-average">{renderStars()}</div>
          </div>
          <div className="rating-container">
            <div className="rating-resume">
              <span className="heading">
                Kundenbewertungen ({item.reviews.length}){" "}
              </span>
              <div className="rating-and-stars">
                <div className="average-review">
                  {getAverageRating(item)} out of 5 Stars
                </div>
                <div className="stars-average">{renderStars()}</div>
              </div>
            </div>
            <div className="horizontal-line"></div>
            <div className="rating-distribution">
              <div className="row">
                <div>
                  <div className="stars">
                    <div>5 Stars</div>
                  </div>
                  <div className="bar">
                    <div className="bar-container">
                      <div
                        className="bar-5"
                        style={{
                          width: `${ratingWidth(5)}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="reviewers">
                    <div>{value(5)}</div>
                  </div>
                </div>
                <div>
                  <div className="stars">
                    <div>4 Stars</div>
                  </div>
                  <div className="bar">
                    <div className="bar-container">
                      <div
                        className="bar-4"
                        style={{ width: `${ratingWidth(4)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="reviewers">
                    <div>{value(4)}</div>
                  </div>
                </div>
                <div>
                  <div className="stars">
                    <div>3 Stars</div>
                  </div>
                  <div className="bar">
                    <div className="bar-container">
                      <div
                        className="bar-3"
                        style={{ width: `${ratingWidth(3)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="reviewers">
                    <div>{value(3)}</div>
                  </div>
                </div>
                <div>
                  <div className="stars">
                    <div>2 Stars</div>
                  </div>
                  <div className="bar">
                    <div className="bar-container">
                      <div
                        className="bar-2"
                        style={{ width: `${ratingWidth(2)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="reviewers">
                    <div>{value(2)}</div>
                  </div>
                </div>
                <div>
                  <div className="stars">
                    <div>1 Star</div>
                  </div>
                  <div className="bar">
                    <div className="bar-container">
                      <div
                        className="bar-1"
                        style={{ width: `${ratingWidth(1)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="reviewers">
                    <div>{value(1)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="your-rating-container">
              <a href="#opinion-form" className="your-rating">
                Give us your opinion
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="ratings-details-line"></div>
      <div className="ratings-details-line"></div>
      <div className="rating-details-container">
        <div className="infos-title">
          {" "}
          {item.reviews.length} Kundenbewertungen
        </div>
        <div className="ratings-container">
          <div>
            <span className="letters-format">User: </span>
            {item.reviews.id}
          </div>
          <div>
            <span className="letters-format">Review Date: </span>
            {item.reviews.date}
          </div>
        </div>
        <div>
          <span className="letters-format">Rating: </span>
          {item.reviews.rating} out of 5 stars
        </div>
        <div>
          {" "}
          <span className="letters-format">Description: </span>
          {item.reviews.description}
        </div>
      </div>
      <div className="ratings-details-line"></div>
      <div className="ratings-details-line"></div>
      <div className="opinion-container" id="opinion-form">
        <form>
          <div className="infos-title">Give us your opinion</div>
          <div>
            <div className="user-opinion">
              <div>
                <span className="letters-format">Rating: </span>
                <span className="star-fill">
                  <i className="bi bi-star-fill"></i>{" "}
                </span>
                <span className="star-fill">
                  <i className="bi bi-star-fill"></i>{" "}
                </span>
                <span className="star-fill">
                  <i className="bi bi-star-fill"></i>{" "}
                </span>
                <span className="star-fill">
                  <i className="bi bi-star-fill"></i>{" "}
                </span>
                <span className="star-fill">
                  <i className="bi bi-star-fill"></i>
                </span>
              </div>
              <div className="input-format">
                <div>
                  Your Opinion:
                  <input
                    className="input-opinion"
                    type="text"
                    maxlength="30"
                    required
                  ></input>
                </div>
              </div>
              <button className="opinion-button" type="submit">
                {" "}
                Submit my opinion
              </button>
            </div>
          </div>
        </form>
      </div>{" "}
      <footer>
        <ul className="footer">
          <li>Datenschutz</li>
          <li>Nutzungsbedingungen</li>
          <li>Impressum</li>
        </ul>
        <div className="logo-container">
          <Link to={`/`}>
            <img src={zalando} className="logo-triangle" alt="zal-logo" />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Rating;
