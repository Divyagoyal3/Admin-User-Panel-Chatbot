export interface User {
  result:number;
}

interface UserRole {
  _id: string;
  name: string;
  description: string;
  permissions: any[]; // Assuming permissions can be of any type
  status: string;
  // Add any other properties as needed
}

export interface ActiveUser {
  createdAt: string;
  email: string;
  isLogin: boolean;
  name: string;
  profilePic: string;
  role: UserRole;
  status: boolean;
  updatedAt: string;
  __v: number;
  _id: string;
}

interface TimeSheetDetails {
  todayNumberOfFilledUsers: number;
  todayNumberOfUnfilledUsers: number;
}

export interface ApiResponse {
  statusCode: number;
  result: TimeSheetDetails;
  message: string;
  success: boolean;
}

export interface TimeSheetHoursResponse {
  statusCode: number;
  result: string;
  message: string;
  success: boolean;
}

export interface IncorrectTimeSheetResponse {
  statusCode: number;
  result: number;
  message: string;
  success: boolean;
}

//ProjectsTimesheet
export interface ProjectsTimeSheetEntry {
    totalHours: number;
    projectName: string;
  }

  interface TimeSheetData {
    statusCode: number;
    result: ProjectsTimeSheetEntry[];
    message: string;
    success: boolean;
  }


// Missed TimeSheets
export interface MissedTimeSheets {
  statusCode: number;
  result: { [date: string]: number };
  message: string;
  success: boolean;
}
