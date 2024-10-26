// src/types/navigation.ts
export type StackParamList = {
    Home: undefined;
    SixMonthCourses: undefined;
    SixWeekCourses: undefined;
    CourseDetail: { courseName: string; fee: number };
    CalculateFees: undefined;
    Contact: undefined}  