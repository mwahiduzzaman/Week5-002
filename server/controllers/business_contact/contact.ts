import express from 'express';
import contactModel from '../../models/contact';

export function DisplayContactListPage(req:express.Request, res:express.Response, next: express.NextFunction){

    contactModel.find((err, contactCollection) => {
        if(err){
            console.error(err);
            res.end(err);
        }
        //console.log(contactCollection);

        res.render('index', {title: "Contact List Page", page:"business_contact/contact-list", contactList: contactCollection});
    })
   
}
export function DisplayContactEditPage(req:express.Request, res:express.Response, next: express.NextFunction){
let id = req.params.id;
console.log(id)
contactModel.findById(id, {}, {}, (err, contactItemToEdit) =>{
    if(err){
        console.error(err);
        res.end(err);
        }
    console.log(contactItemToEdit);
        res.render('index', {title:"Contact Edit", page: "business_contact/contact-edit", item: contactItemToEdit});
})
}