import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h2>{course.title}</h2>

      <p>
        <strong>Category:</strong> {course.category}
      </p>

      <p>
        <strong>Duration:</strong> {course.duration}
      </p>

      <Link to={`/courses/${course.slug}`}>View Course</Link>
    </div>
  );
}

export default CourseCard;
