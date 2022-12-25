import * as readlineSync from 'readline-sync';
const CoursesList = [];
class Course {
    static TotalCourses = 0;
    course_id;
    course_name;
    course_fees;
    isPaid = false;
    constructor(_ICourse) {
        this.course_id = this.GenerateCourseId();
        this.course_name = _ICourse.course_name;
        this.course_fees = _ICourse.course_fees;
        _ICourse.isPaid = false;
        _ICourse.course_id = this.course_id;
        CoursesList.push(_ICourse);
    }
    GenerateCourseId() {
        return ++Course.TotalCourses;
    }
    static ViewCourses() {
        if (CoursesList.length > 0) {
            console.log(`\n|******** Courses Detail Start ********|\n`);
            console.log(`\t|  ID | Name | Fees  |`);
            console.log(`\t|--------------------|`);
            CoursesList.forEach((data) => {
                console.log(`\t|  ${data.course_id}  | ${data.course_name}  | ${data.course_fees} |`);
            });
            console.log(`\n|******** Courses Detail End ********|\n`);
        }
        else {
            console.log("No Courses Found");
        }
    }
}
class Student {
    static TotalStudents = 0;
    std_id;
    std_name;
    balance;
    rem_balance = 0;
    RegisteredCourses = [];
    constructor(_IStudent) {
        this.std_id = this.generateStudentId();
        this.std_name = _IStudent.std_name;
        this.balance = _IStudent.balance;
    }
    //Enroll Student in Courses
    EnrollInCourse(courseToBeAdded) {
        // Course.ViewCourses();
        // const courseToBeAdded: number = Number(readlineSync.question('Please Type Above Course ID to Add Course: '));
        let isCourseRegistered = this.RegisteredCourses.find(x => x.RegisteredCousrseId === courseToBeAdded);
        if (isCourseRegistered === undefined) {
            let _courseFee = CoursesList.find(x => x.course_id === courseToBeAdded)?.course_fees;
            this.rem_balance += _courseFee;
            this.RegisteredCourses.push({ RegisteredCousrseId: courseToBeAdded, courseStatus: false });
            console.log('Course Added Successfully!!!!!!');
        }
        else {
            console.log('Course Already Added!!!!!!');
        }
    }
    //Pay Fees for registered Courses
    PayFees() {
        console.log(`\n|============ Paying Fees Start ===========|\n|\t\t\t\t\t   |`);
        if (this.rem_balance > 0) {
            let unpaidcoursesid = [];
            this.RegisteredCourses.forEach(element => {
                if (element.courseStatus === false) {
                    unpaidcoursesid.push(element.RegisteredCousrseId);
                }
            });
            unpaidcoursesid.forEach((_Id) => {
                let unpaidcourses = CoursesList.find(x => x.course_id === _Id);
                if (unpaidcourses.course_fees <= this.balance) {
                    //minus course fees from balance
                    this.balance = this.balance - unpaidcourses.course_fees;
                    //minus remaining balance
                    this.rem_balance -= unpaidcourses.course_fees;
                    //update course status
                    let updateCourseStatus = this.RegisteredCourses.find(x => x.RegisteredCousrseId === unpaidcourses.course_id);
                    updateCourseStatus.courseStatus = true;
                    console.log(`|\tFees Paid for Course: ${unpaidcourses.course_name}\t   |`);
                }
                else {
                    console.log(`|    Not Enough Balance for Course: ${unpaidcourses.course_name}    |`);
                }
            });
        }
        else {
            console.log(`|     You don't have any excess Balance    |`);
        }
        console.log(`|\t\t\t\t\t   |\n|============= Paying Fees End ============|\n`);
    }
    //Show Student Balance
    ViewBalance() {
        console.log(`\n|=========== Your Balance Start ===========|\n|\t\t\t\t\t   |`);
        console.log(`|\tYour Current Balance: ${this.balance}\t   |`);
        console.log(`|\tYour Due Balance: ${this.rem_balance}\t\t   |`);
        console.log(`|\t\t\t\t\t   |\n|============ Your Balance End ============|\n`);
    }
    //Student Auto Generated Id Function
    generateStudentId() {
        ++Student.TotalStudents;
        return (Student.TotalStudents.toString().padStart(5, '0'));
    }
    //Student Info
    Display() {
        console.log(`\n|======= ${this.std_name} Details Start =======|`);
        console.log('|\t\t\t\t\t   |');
        console.log(`|\tStudent ID: ${this.std_id}\t\t   |`);
        console.log(`|\tStudent Name: ${this.std_name}\t   |`);
        console.log(`|\tStudent Balance: ${this.balance}\t\t   |`);
        console.log('|\t\t\t\t\t   |');
        if (this.RegisteredCourses.length > 0) {
            console.log(`|------- Courses you are Enrolled In ------|`);
            console.log('|\t\t\t\t\t   |');
            console.log(`|\t|  ID | Name | Fees  | Status |    |`);
            console.log(`|\t|-----------------------------|    |`);
            this.RegisteredCourses.forEach((data) => {
                let course = CoursesList.find(x => x.course_id === data.RegisteredCousrseId);
                let paidStatus = data.courseStatus == true ? " PAID " : "UNPAID";
                console.log(`|\t|  ${course.course_id}  | ${course.course_name}  | ${course.course_fees} | ${paidStatus} |    |`);
            });
            console.log('|\t\t\t\t\t   |');
            // console.log(`|----- ******************************* ----|`);
        }
        console.log(`|======== ${this.std_name} Details End ========|\n`);
    }
    //Options Menu
    static DisplayOptions() {
        console.log("\t|============================================|");
        console.log(`\t|*** Welcome To Student Management System ***|`);
        console.log("\t|============================================|");
        console.log('\t|\t\t\t\t\t     |');
        console.log('\t|  *****  Please Select Below Options *****  |');
        console.log('\t|\t\t\t\t\t     |');
        console.log('\t| Press 0 to Exit || Press 1 to Add Student  |');
        console.log('\t| Press 2 to Add Course || 3 to View Courses |');
        console.log('\t| Press 4 to Display Student Info \t     |');
        console.log('\t| Press 5 to View Balance ||   6 to Pay Fees |');
        console.log('\t| Press 7 to Enroll Student In a Course      |');
        console.log('\t|\t\t\t\t\t     |');
        console.log("\t|============================================|");
        console.log();
    }
}
function Main() {
    let flag = true;
    let _student;
    while (flag) {
        let _course;
        //If No Student found
        while (_student === undefined) {
            console.log("\nNo Student Found, Add Student First to Continue\n");
            if (_student === undefined) {
                const _std_name = String(readlineSync.question('Enter Student Name: \n'));
                const _balance = Number(readlineSync.question('Enter Student Balance: \n'));
                //Add Student
                if (_std_name !== '' && _balance > 0) {
                    _student = new Student({ std_name: _std_name, balance: _balance });
                    console.log(`\n${_student.std_name} Student Added Successfully\n`);
                    break;
                }
                else {
                    console.log("Kindly Input Valid Student Details\n");
                }
            }
        }
        Student.DisplayOptions();
        const userInput = Number(readlineSync.question('Press between 0-5 for Action.....\n'));
        switch (userInput) {
            case 0:
                console.log("Thank you for using Student Management System\n");
                flag = false;
                break;
            case 1:
                const _std_name = String(readlineSync.question('Enter Student Name: \n'));
                const _balance = Number(readlineSync.question('Enter Student Balance: \n'));
                //Add Student
                if (_std_name !== '' && _balance > 0) {
                    _student = new Student({ std_name: _std_name, balance: _balance });
                    console.log(`\n${_student.std_name} Student Added Successfully\n`);
                }
                else {
                    console.log("Kindly Input Valid Student Details\n");
                }
                break;
            case 2:
                const _course_name = String(readlineSync.question('Enter Course Name: \n'));
                const _course_fees = Number(readlineSync.question('Enter Course Fees\n'));
                //Add Course
                if (_course_name !== '' && _course_fees > 0) {
                    _course = new Course({ course_name: _course_name, course_fees: _course_fees });
                    console.log(`\n${_course.course_name} Course Added Successfully\n`);
                }
                else {
                    console.log("Kindly Input Valid Course Details\n");
                }
                break;
            case 3:
                //View Courses
                Course.ViewCourses();
                break;
            case 4:
                // Student Info
                _student?.Display();
                // if (_student! !== undefined) {
                //     _student.Display();
                // } else {
                //     console.log("\nNo Student Found\n");
                // }
                break;
            case 5:
                // View Balance
                _student?.ViewBalance();
                // if (_student !== undefined) {
                //     _student.ViewBalance();
                // } else {
                //     console.log("\nNo Student Found\n");
                // }
                break;
            case 6:
                // Pay Fees
                _student?.PayFees();
                // if (_student !== undefined) {
                //     _student.PayFees();
                // } else {
                //     console.log("\nNo Student Found\n");
                // }
                break;
            case 7:
                // Enroll Student in a Course
                if (CoursesList.length > 0) {
                    Course.ViewCourses();
                    const courseToBeAdded = Number(readlineSync.question('Please Type Above Course ID to Add Course: '));
                    if (_student !== undefined && Boolean(CoursesList.find(x => x.course_id === courseToBeAdded))) {
                        _student.EnrollInCourse(courseToBeAdded);
                    }
                    else {
                        console.log("\nNo Course Found\n");
                    }
                }
                else {
                    console.log('\No Course Found\n');
                }
                break;
            default:
                console.log("Please Choose Correct Options........\n");
        }
        if (!flag) {
            break;
        }
    }
    //All Courses 
    // const pf = new Course({ course_name: "PF", course_fees: 15000 });
    // const oop = new Course({ course_name: "OOP", course_fees: 20000 });
    // const dsa = new Course({ course_name: "DSA", course_fees: 20000 });
    // const dbms = new Course({ course_name: "DBMS", course_fees: 20000 });
    // const dp = new Course({ course_name: "DP", course_fees: 17000 });
    // Course.ViewCourses();
    // const haris = new Student({ std_name: "Haris Rehman", balance: 41000 });
    // haris.AddStudent(2);
    // haris.AddStudent(3);
    // haris.PayFees();
    // haris.ViewBalance();
    // haris.Display();
    // haris.PayFees();
    // const ammad = new Student({ std_name: "Ammad Raza", balance: 15000 });
    // const mubashir = new Student({ std_name: "Mubashir Ahmed", balance: 50000 });
    // const hassaan = new Student({ std_name: "Muhammad Hassaan", balance: 20000 });
    // haris.Display();
    // ammad.Display();
    // mubashir.Display();
    // hassaan.Display();
}
Main();
