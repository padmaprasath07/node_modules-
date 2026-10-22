const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors=require("cors")
const dns=require("node:dns")
dns.setServers(["8.8.8.8"],["8.8.4.4"])
app.use(express.json())
app.use(cors())
if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI must be set")
}
mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("connected")).catch((e)=>console.log(e))
const schema=mongoose.Schema({
    name:String,
    age:String
})
const student=mongoose.model("student",schema);
app.post("/students",async (req,res)=>{ 
    try{ 
        const s=await student.create(req.body);
        res.json({"msg":"created"})
    }
    catch(err){ 
        res.json({"msg":"error"})
    }
})
app.get("/students",async (req,res)=>{ 
    try{ 
        const s=await student.find();
        res.json(s)
    }
    catch(err){ 
        res.json({"msg":"error"})
    }
})
app.put("/students/:id",async (req,res)=>{ 
    try{ 
        const s=await student.findByIdAndUpdate(req.params.id,req.body);
        res.json({"msg":"updated"})
    }
    catch(err){ 
        res.json({"msg":"error"})
    }
})
app.delete("/students/:id",async (req,res)=>{ 
    try{ 
        const s=await student.findByIdAndDelete(req.params.id);
        res.json({"msg":"created"})
    }
    catch(err){ 
        res.json({"msg":"error"})
    }
})
app.listen(3000,()=>{ 
    console.log("server started");
})