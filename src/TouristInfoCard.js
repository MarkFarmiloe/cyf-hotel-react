const TouristInfoCard = ({ title, imgsrc, link}) => {
  return (
    <div className="card">
      <img src={imgsrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <a href={link} className="btn btn-primary">
          {title}
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCard;
