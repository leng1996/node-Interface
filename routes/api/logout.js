let express = require("express");
let router = express.Router();

router.put("/",(req,res,next)=>{
    req.session["jl_username"] = undefined;
    res.send({error:0,mess:"注销成功"})
})


module.exports = router;