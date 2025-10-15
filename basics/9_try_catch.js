try{
    console.log("ganesh");
    throw new Error("something wrong");
    
}catch(error){
    console.log("error : ",error.message);

}