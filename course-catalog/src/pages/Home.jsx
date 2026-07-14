import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

function Home() {
  return (
    <div className="container">
      <h1>Course Catalog</h1>

      <p>Browse our available courses and choose one to start learning.</p>

      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Home;
