    const express=require("express")
    const mysql2=require("mysql2")
    const app=express()
    const cors=require("cors")
    app.use(express.json())
    app.use(cors())
    const db=mysql2.createConnection({ 
        "host":"localhost",
        "user":"root",
        "password":"",
        "database":"student",
        "port":"3307"
    })
    app.post("/students",(req,res)=>{ 
        db.query("Insert into students(name,age) values(?,?)",[req.body.name,req.body.age],(err,result)=>{ 
            res.json({"message":"added"})
        })
    })
    app.get("/students",(req,res)=>{ 
        db.query("select * from students",(err,result)=>{ 
            res.json(result)
        })
    })
    app.put("/students/:id",(req,res)=>{ 
        db.query("update students set name=?,age=? where id=?",[req.body.name,req.body.age,req.params.id],(err,result)=>{ 
            res.json({"message":"added"})
        })
    })
    app.delete("/students/:id",(req,res)=>{ 
        db.query("Delete from students where id=?",[req.params.id],(err,result)=>{ 
            res.json({"message":"added"})
        })
    })
    app.listen(3000,()=>{ 
        console.log("started");
    })