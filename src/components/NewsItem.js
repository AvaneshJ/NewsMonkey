import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card h-100">
        <img
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
          src={
            imageUrl ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png"
          }
          className="card-img-top"
          alt="..."
          onError={(e) =>
            (e.target.src =
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png")
          }
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
          <p className="card-text my-2">
            <small className="text-body-secondary">
              By {!author ? "Unkown" : author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <div style={{ fontSize: 20 }}>
            <span className="badge text-bg-success">{source}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
