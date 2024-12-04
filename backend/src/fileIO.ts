import * as fs from 'fs';


/** Defining an Interface to organize what each 
 *  Function should achieve. Thought about making
 *  a Controller MessageController for Business Logic
 *  but i guess that would rather confuse with 2 operations
 */
export interface FileIO {
    readFromFile(): string;
    writeToFile(message: any): boolean;
}
/** Using atob and btoa to decode and encode
 *  the file with Base64. 
 */
export class FileService implements FileIO{
    readFromFile() {
        //const file = fs.readFileSync("./data/gibberish_2.enc");
        const file = fs.readFileSync("./data/gibberish.enc");
        return atob(file.toString());
    }

    writeToFile (message){
        const db = JSON.parse(this.readFromFile());
        db.push(message);
        const encodedDb = btoa(JSON.stringify(db));
        //fs.writeFile("./data/gibberish_2.enc", encodedDb, function(error) {
        fs.writeFile("./data/gibberish.enc", encodedDb, function(error) {
        if (error) {
            console.error(error);
            return false;
        }
        console.log("Datenbank aktualisiert.");
        });
    return true;
    }
}