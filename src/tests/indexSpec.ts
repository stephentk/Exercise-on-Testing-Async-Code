import axios from "axios"

describe("countries",() => {
    it("Get countries",()=>{
        async function getCountries() {
            try {
              const response = await axios.get('https://restcountries.com/v3.1/all');
              console.log(response);
            } catch (error) {
              console.error(error);
            }
          }})

     it("Get region of countries",()=>{
                async function getRegion() {
                    try {
                      const response = await axios.get('https://restcountries.com/v3.1/region/{region}');
                      console.log(response);
                    } catch (error) {
                      console.error(error);
                    }
                  }})
           
             it("Get name of countries",()=>{
                    async function getName() {
                        try {
                          const response = await axios.get('https://restcountries.com/v2/continent/{name}}');
                          console.log(response);
                        } catch (error) {
                          console.error(error);
                        }
                      }})


        
               
             
   

})
