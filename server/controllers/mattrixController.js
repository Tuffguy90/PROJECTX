const db = require("../models")
const { create } = require("./subsidaryController")
const mattrixSchema = require("./validators/mattrix")
const MATTRIX = db.tbl_mattrix_masters;
const SUBSIDARYMATTRIX = db.tbl_subsidary_mattrix_mapings;


create = async (req, res) => {
    try {
        const body = req.body;
        const validate = mattrixSchema.validate(body)
        if (validate?.error) {
            return res.status(400).json({
                message: "Validation Error",
                error: validate?.error,
            })
        }
        let resp = await MATTRIX.create(body);
        return res.send({
            message: "mattrix Created Successfully",
            data: resp,
        })
    } catch (error) {
        console.log("error-in-mattrix-list", err)
        return res.status(500)
    }
}

list = async (req, res) => {
    try {
        let resp = await MATTRIX.findAll({
            where:{
                status:1
            }
        });
        return res.send({
            message: "mattrix Created Successfully",
            data: resp,
        })
    } catch (error) {
        console.log("error-in-mattrix-list", err)
        return res.status(500)
    }
}

mapSubsidaryMattrix= async (req, res) => {
    try {
        let mattrix_ids = req.body.mattrix_ids;
        let subsidary_id = req.body.subsidary_id;
        if(mattrix_ids.length<0 || !subsidary_id){
            return res.status(400).json({
                message: "Validation Error",
                error: validate?.error,
            })
        }
        let data=[];
        mattrix_ids.forEach(element => {
            data.push({
                mattrix_id:element,
                subsidary_id
            });
        });
        let resp = await SUBSIDARYMATTRIX.bulkCreate(data);
        return res.send({
            message: "mattrix Created Successfully",
            data: resp,
        })
    } catch (error) {
        console.log("error-in subsidary mattrix map", err)
        return res.status(500)
    }
}

mapSubsidaryMattrix= async (req, res) => {
    try {
        let mattrix_ids = req.body.mattrix_ids;
        let subsidary_id = req.body.subsidary_id;
        if(mattrix_ids.length<0 || !subsidary_id){
            return res.status(400).json({
                message: "Validation Error",
                error: validate?.error,
            })
        }
        let data=[];
        mattrix_ids.forEach(element => {
            data.push({
                mattrix_id:element,
                subsidary_id
            });
        });
        let resp = await SUBSIDARYMATTRIX.bulkCreate(data);
        return res.send({
            message: "mattrix Created Successfully",
            data: resp,
        })
    } catch (error) {
        console.log("error-in-mattrix-list", err)
        return res.status(500)
    }
}

remove= async (req, res) => {
    try {
        if(req.body.id == undefined || req.body.id == null){
            return res.status(400).json({
                message: "Validation Error",
                error: validate?.error,
            })
        }
        let resp = await MATTRIX.destroy({
            where:{
                id: req.body.id
            }
        });
        return res.send({
            message: "mattrix Created Successfully",
            data: resp,
        })
    } catch (error) {
        console.log("error-in-mattrix-list", err)
        return res.status(500)
    }
}



const mattrixController = {
    create,
    list,
    mapSubsidaryMattrix
}

module.exports = mattrixController