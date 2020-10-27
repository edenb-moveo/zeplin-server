import { fork } from 'child_process';
import * as validator from 'validator';

export class RequestValidator {
    private nameError = 'NAME IS NOT VALID' //readonly all
    private emailError = 'EMAIL IS NOT VALID'
    private classdateError = 'DATE IS NOT VALID'
    private classNameError = 'CLASS NAME IS NOT VALID'
    private idError = 'ID IS NOT NUMBER'

    constructor() {
        this.isFilterIsByDefinition = this.isFilterIsByDefinition.bind(this)
        this.isStudent = this.isStudent.bind(this)
        this.isId = this.isId.bind(this)
    }

    public isEmail(email: string) {
        if(!validator.isEmail(email)) {
            throw new Error(this.emailError)
        }
    }

    public isNameOnlyEnglishLetters(name: string) {
        let nameToValid = name.split(' ');
        for(let i = 0;i<nameToValid.length;i++) {
            if(!validator.isAlpha(nameToValid[i])){
                throw new Error(this.nameError)
            }
        }

    }

    public isDateValid(date: string) {
        if(!validator.isDate(date)){
            throw new Error(this.classdateError)
        }
    }
    
    isId(req,res,next) {
        let id;
        if( req.body.id !== undefined) {
            id = req.body.id
        }
        else{
            id = req.params.id.toString()
        }
        this.isNumber(id)
        next()
    }

    public isNumber(number: string) { 
        if(!validator.isNumeric(number)){
            throw new Error(this.idError)
        }
    }

    public isFilterIsByDefinition(req, res, next) {
        try {
            let filters;
            if( req.body.filters !== undefined) {
                filters = req.body.filters;
            }
            else {
                filters = req.body
            }

            if( filters.first_name !== undefined) {
                this.isNameOnlyEnglishLetters(filters.first_name)
            }
            if( filters.last_name !== undefined ) {
                this.isNameOnlyEnglishLetters(filters.last_name) 
            }
            if( filters.email !== undefined ) {
                this.isEmail(filters.mail)
            }
            if( filters.classId !== undefined ) {
                this.isNumber(filters.classId.toString())
            }
            if( filters.class_name !== undefined){
                this.isNameOnlyEnglishLetters(filters.class_name)
            }
            if( filters.date_created !== undefined ){
                this.isDateValid(filters.class_date_created)
            }
            next()
        }
        catch(error) {
            return res.status(400).send(new Error(""));
            
        }
        
    }

    public isStudent(req, res, next) { 
        try {
            let student = req.body
            this.isNameOnlyEnglishLetters(student.firstName)
            this.isNameOnlyEnglishLetters(student.lastName)
            this.isEmail(student.mail)
            for(let i = 0;i<student.classes.length;i++) {
                this.isNameOnlyEnglishLetters(student.classes[i].name)
                this.isDateValid(student.classes[i].dateCreated)
            }
        }
        catch(error) {
            throw new Error(error)
        }
        next()
    }
    
}