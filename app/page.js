import StudentInfo from "./week-2/student-info";
import Link from "next/link";

export default function Page()
{
  return(
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <h3><Link href="/week-2">Week 2 Assignment</Link></h3>
      <h3><Link href="/week-3">Week 3 Assignment</Link></h3>
      <h3><Link href="week-4">Week 4 Assignment</Link></h3>
      <h3><Link href="week-5">Week 5 Assignment</Link></h3>
      <h3>Week 6 Assignment</h3>
      <h3>Week 7 Assignment</h3>
      <h3>Week 8 Assignment</h3>
      <h3>Week 9 Assignment</h3>
      <h3>Week 10 Assignment</h3>

      {/* <h1>Shopping List</h1> */}
      {/* <StudentInfo /> */}
    </main>
  );
}
// main page.js