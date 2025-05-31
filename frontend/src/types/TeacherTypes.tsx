export interface StudentData {
  id?: number;
  schoolId?: string;
  firstname: string;
  lastname: string;
  dob: string;
  gender: string;
  email: string;
  program: string;
  section: string;
  yearLevel: string;
}

export interface SubjectData {
  id?: number;
  courseCode: string;
  courseName: string;
  courseDescription: string;
}
