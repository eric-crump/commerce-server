
export default function handler(req, res){
    if(req.method === 'GET'){
        res.status(200).send({
            products : [
                {
                    name: "Hosta",
                    image: "",
                    price: "",
                    description: "",
                    inventory: "44"
                }
            ]
        })
    }
    else{
        res.status(400).send({result: "Method not supported"});
    }
}