

function domgen (pronouns, adj , noun, ) {
  
  let domain = ""
 for(let i = 0; i < pronouns.length ; i++) {
 
   for (let j = 0; j < adj.length ; j++) {
    
    for (let h = 0; h < noun.length ; h++){
      domain = pronouns[i] + adj [j] + noun[h] 
      if (domain == "thelastof")
       console.log(domain + ".us")

      else{
        console.log(domain + ".com")
      }


    }
   }

 }
}

 let answer = domgen (['the', 'our'], ['great', 'big', "last"], ['jogger', 'racoon', "of"])