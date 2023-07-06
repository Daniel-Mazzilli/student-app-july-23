import "./StudentCard.scss"

const StudentCard = ({student}) => {

  const {firstName, lastName, company, email, skill, pic, grades } = student
  return (
    <div className="studentCard">
      <div className="studentCard__profileImage">
        <img
          src={pic}
          alt="student profile"
        />
      </div>
      <div className="studentCard__studentInfo">
        <div className="studentCard__name">{firstName} {lastName}</div>
        <div className="studentCard__studentDetail">Email: {email}</div>
        <div className="studentCard__studentDetail">Company: {company}</div>
        <div className="studentCard__studentDetail">Skill: {skill}</div>
        <div className="studentCard__studentDetail">Average: {grades.reduce((acc, e) => +e + acc, 0) / grades.length}%</div>
      </div>
    </div>
  );
};

export default StudentCard;
