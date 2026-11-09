

function multiplyValue (value: number, multiplier: number = 2): number {

return value * multiplier;
}



type InputType = string | number | boolean;
type OutputType = string | number;

function processInput (value : InputType ): OutputType{
    if (typeof value === "string"){
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number"){
        return value*10;
    }
    else if (typeof value === "boolean"){
        return value? "Active" : "Inactive";
    }
    throw new Error("Invalid input"); 
}




type CoordinateTuple = readonly [number, number, string];

function formatCoordinate (coord:CoordinateTuple): string{
    const [latitude, longitude, locationName]= coord;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}





function concatenateArrays<T>(...arrays: T[][]):T[]{
    return arrays.flat();
}






interface Course{
    title : string;
    students: number;
    isPublished:Boolean;
}
function getPopularCourses(courses:Course[], minStudents: number) :Course[]{
    const popularCourses: Course[] = [];

    for (const course of courses){
        if(course.isPublished && course.students >= minStudents) {
            popularCourses.push(course);
        }
    }
    return popularCourses;    
}





function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {

    return items.map(item => item[key]);

}






class Employee  {
    protected name: string;
    private baseSalary: number;

    constructor(name:string, baseSalary:number){
        this.name =name;
        this.baseSalary= baseSalary;

    }

    public getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee{
    private department : string;
    constructor(name:string,baseSalary:number,department:string){
        super(name,baseSalary);
        this.department=department;
    }

    public getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }


}





async function validateAgeAsync(age:number):Promise<string> {
    if (age<18){
         throw new Error("Error: Access Denied: Must be 18 or older")
    }
       
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });   
    
}

export{};